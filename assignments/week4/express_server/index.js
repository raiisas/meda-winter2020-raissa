// Bring in the express package.
const express = require("express"); // Function to load express module

// Run a cop of the express module
const app = express();

// Connects our HTTP server with the Express web module
const http = require("http").Server(app); // Link the http to the express module

// Decide on the port number to listen on when running Express server
// DO NOT USE 80, 443, 20, 21, 22 (public)
const port = 3000; // Node uses 3000 (8080 also safe)

// Tell http module that we will be listening on the number in the port module
http.listen(port); // Method to http:

console.log("Express server is now running on " + port); //http://127.0.0.1:3000/ or localhost:3000

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/") );

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));

app.post("/sayHello", () => {
    console.log("Someone said hello!");
}); // Run a function

// npm packages reminder: use .gitignore
// Email POP3 or IMAP are protocols (services) on the website