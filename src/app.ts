import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (_req, res) => res.render("index", { title: "Hjem" }));
app.get("/projects", (_req, res) => res.render("projects", { title: "Prosjekter" }));
app.get("/about", (_req, res) => res.render("about", { title: "Om meg" }));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
