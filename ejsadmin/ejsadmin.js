const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
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

app.use(
  "/admin/stylescss",
  express.static(path.join(__dirname, "views", "admin", "stylescss"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

// Set the correct MIME type for JavaScript files
app.use(
  "/admin/js",
  express.static(path.join(__dirname, "views", "admin", "js"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    },
  })
);

// Add a route for the assets directory
app.use(
  "/client/assets",
  express.static(path.join(__dirname, "views", "public", "assets"))
);

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
