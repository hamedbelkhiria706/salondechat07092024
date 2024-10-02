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
// Set the correct MIME type for CSS files

// Set the correct MIME type for CSS files
app.use(
  "/client/stylescss",
  express.static(path.join(__dirname, "views", "public", "stylescss"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

// Set the correct MIME type for JavaScript files
app.use(
  "/client/js",
  express.static(path.join(__dirname, "views", "public", "js"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    },
  })
);
// Define routes
app.get("/client/:ejsfilename", (req, res) => {
  const ejsFileName = req.params.ejsfilename; // Get the EJS filename from the URL parameter
  res.render(`public/${ejsFileName}`, {
    title: "Dynamic Page",
    message: "This is a dynamic page rendered from the EJS file.",
  });
});
// Other backend functionalities and routes can be added here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
