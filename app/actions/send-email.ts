"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com", 
        pass: process.env.EMAIL_PASSWORD || "your-app-password", 
      },
    })

    // Email content
    const mailOptions = {
      from: validatedData.email,
      to: process.env.EMAIL_RECIEVER, 
      subject: `Portfolio Contact: Message from ${validatedData.name}`,
      text: validatedData.message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${validatedData.message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ path: e.path[0], message: e.message })),
      }
    }

    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
