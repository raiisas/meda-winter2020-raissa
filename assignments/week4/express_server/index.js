// Bring in the express package.
const express = require("express"); // Function to load express module

// Run a cop of the express pagackage
const app = express();

// Connects our HTTP server with the Express web module
const http = require("http").Server(app); // Link the http to the express module

// Decide on the port number to listen on when running Express server
// DO NOT USE 80, 443, 20, 21, 22
const port = 3000; // Node uses 3000 (8080 also safe)

// Tell http module that we will be listening on the number in the port module
http.listen(port);

console.log("Express server is now running on " + port); //http://127.0.0.1:3000/ or localhost:3000

app.use("/", express.static("public_html/") );

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/") );