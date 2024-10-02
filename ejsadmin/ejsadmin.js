const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Define routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to the website!",
  });
});
// Define routes for admin EJS files
app.get("/admin/:ejsfilename", (req, res) => {
  const ejsFileName = req.params.ejsfilename; // Récupérer le nom du fichier EJS depuis le paramètre d'URL
  res.render(`admin/${ejsFileName}`, {
    title: "Admin Page",
    message: "This is an admin page rendered from the EJS file.",
  });
});
// Other backend functionalities and routes can be added here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
