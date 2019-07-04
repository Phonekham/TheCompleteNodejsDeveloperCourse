const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "test",
    name: "Phonekham"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/weather", (req, res) => {
  res.send("weather page");
});

app.get("");

app.get("*", (req, res) => {
  res.render("404",{
      errorMessage:"Error Page not found"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
