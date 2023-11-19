import express from "express";


const app = express();
const port = 8000;

app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/skills",(req,res) => {
  res.render("skills.ejs");
});

app.get("/projects",(req,res)=>{
  res.render("projects.ejs");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
