const path = require("path");
const { engine } = require("express-handlebars");
const express = require("express");
const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Not Found",
  });
});

app.use((err, res, req) => {
  console.error(err.stack);
  res.status(500).send("Erreur, regardez le terminal !");
});

app.listen(port, () => {
  console.log(`App is launched on port: ${port}`);
});
