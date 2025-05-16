"use client"

import Link from "next/link"
import { ArrowDown, Code, Github, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { TextReveal } from "@/components/animations/text-reveal"

export default function Home() {
  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.header
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div variants={navItemVariants}>
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-primary">Portfolio</span>
            </Link>
          </motion.div>
          <nav className="flex items-center gap-6 text-sm">
            {["about", "projects", "resume", "contact"].map((item, index) => (
              <motion.div key={item} variants={navItemVariants} custom={index}>
                <Link href={`#${item}`} className="transition-colors hover:text-foreground/80">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={navItemVariants}>
              <ThemeToggle />
            </motion.div>
          </nav>
        </div>
      </motion.header>

      <main className="container py-10">
        {/* Hero Section */}
        <motion.section className="py-20 md:py-28" initial="hidden" animate="visible" variants={heroVariants}>
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              variants={heroItemVariants}
            >
              <span className="block">Hello, I'm </span>
              <motion.span
                className="block mt-2 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              >
                Keshav
              </motion.span>
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-xl text-muted-foreground" variants={heroItemVariants}>
              A passionate developer crafting beautiful digital experiences
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap justify-center gap-4" variants={heroItemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button asChild>
                  <Link href="#contact">
                    Get in Touch <Send className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button variant="outline" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              </FadeIn>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <TextReveal delay={0.1}>
                  <p>
                    I'm a passionate developer with a keen eye for design and a love for creating intuitive,
                    user-friendly applications. My journey in tech began with a curiosity about how things work, which
                    evolved into a career building digital solutions.
                  </p>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p>
                    With expertise in backend development and Artificial Intelligence, I enjoy the challenge of bringing ideas to life
                    through clean code and thoughtful design. I believe in continuous learning and staying updated with
                    the latest industry trends.
                  </p>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p>
                    When I’m not coding, you’ll find me playing sports, hitting the gym, or going for a run.
I also love unwinding by listening to music in my free time.
                  </p>
                </TextReveal>
              </div>
            </div>
            <FadeIn direction="left" delay={0.3}>
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background flex items-center justify-center text-6xl font-bold text-primary/40">
                   Keshav
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <p className="mt-4 text-muted-foreground">
              Here are some of the projects I've worked on. Each represents a unique challenge and solution.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="CrackLens"
              description="It is an AI-powered tool that detects and quantifies surface cracks in infrastructure using advanced deep learning models. It leverages multiple segmentation architectures to deliver highly accurate and reliable crack analysis, helping improve structural health monitoring and maintenance."
              tags={["Python", "Computer Vision"]}
              imageUrl="/cracklens-cover.svg?height=400&width=600"
              githubUrl="https://github.com/KeshavGogia/CrackLens"
              liveUrl="https://github.com/KeshavGogia/CrackLens"
              index={0}
            />
            <ProjectCard
              title="SpeechIQ"
              description="It is an AI-driven speaker intent recognition system leveraging Wav2Vec2 and deep learning to achieve 95.5% accuracy on real-world voice commands. Improved contextual understanding and robustness compared to traditional MFCC-based methods for enhanced speech interaction."
              tags={["Python", "Wave2Vec2", "FastAPI", "Next.js","TypeScript"]}
              imageUrl="/speech.svg?height=400&width=600"
              githubUrl="https://github.com/KeshavGogia/SpeechIQ"
              liveUrl="https://v0-next-js-dashboard-beta-ochre.vercel.app/"
              index={1}
            />
            <ProjectCard
              title="MediLink"
              description="It is a MERN-based healthcare app that automates patient follow-ups and feedback, boosting engagement by 15%. Integrated AI-powered symptom analysis and streamlined appointment booking for efficient, personalized healthcare access."
              tags={["Node.js", "JavaScript", "Tailwind CSS", "React.js","MongoDB","GeminiAI"]}
              imageUrl="/medilink.svg?height=400&width=600"
              githubUrl="https://github.com/KeshavGogia/MediLink"
              liveUrl="https://medilinkai-e0lvjzt9p-keshavgogias-projects.vercel.app"
              index={2}
            />
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
              <p className="mt-4 text-muted-foreground">
                Download my resume to learn more about my experience, skills, and qualifications.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <a href="https://drive.google.com/file/d/1kMRlqtuEvxh3LdtPQF4NVkEi14i4w88V/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-6" size="lg">
                    Download Resume <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </FadeIn>

            <div className="space-y-8">
              <FadeIn direction="left" delay={0.2}>
                <div>
                  <h3 className="text-xl font-semibold">Skills</h3>
                  <StaggerContainer className="mt-4 flex flex-wrap gap-2">
                    {[
                      "C",
                      "C++",
                      "HTML",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Node.js",
                      "Express.js",
                      "Express",
                      "MongoDB",
                      "MYSQL",
                      "Numpy",
                      "Librosa",
                      "Scikit-learn",
                      "Cuda",
                      "Pandas",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "Git",
                      "Docker",
                      "AWS",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.4}>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <div className="mt-4 space-y-4">
                    <TextReveal delay={0.1}>
                      <div>
                        <h4 className="font-medium">Bachelor of Engineering in Computer Engineering</h4>
                        <p className="text-sm text-muted-foreground">Thapar University  •  2022 - Present</p>
                        <p className="text-sm text-muted-foreground">CGPA : 8.81</p>
                      </div>
                    </TextReveal>
                  
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn direction="up" delay={0.2}>
              <ContactForm />
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="mt-4 space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>keshavgogia57@gmail.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <a href="https://github.com/KeshavGogia" className="hover:underline">
                        github.com/KeshavGogia
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Code className="h-5 w-5 text-primary" />
                      <a href="https://leetcode.com/keshav510" className="hover:underline">
                        leetcode.com/keshav510
                      </a>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="mt-2">Harayana, India</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Availability</h3>
                  <p className="mt-2">I'm currently available for freelance work and full-time opportunities.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Keshav. All rights reserved.
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="https://github.com/KeshavGogia" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="mailto:keshavgogia57@gmail.com" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
