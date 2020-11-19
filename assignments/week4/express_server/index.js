//Bring in the express package.
const express = require("express");

// Brings in the body-parser package
const bodyParser = require("body-parser");

//Run a copy of the express module.
const app = express();

//Connects our HTTP server with the Express web module.
const http = require("http").Server(app);

// Decide on the port number to listen on when running Express server.
// DO NOT USE 80, 443, 20, 21, 22, etc.
const port = 3000;

// Tell http module that we will be listening on the number in the port variable.
http.listen(port);

// Body Parser so we can automatically convert request objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is now running on " + port);

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/") );

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));

app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");

    // Generate random number
    let winningNumber = Math.floor((Math.random() * 10) + 1);

    // Requesting Data from Input/Button
    let dataFromFront = request.body;

    let userNumberChoice = parseInt(dataFromFront.number);

    let userWinner = false;

    console.log(winningNumber, userNumberChoice);

    if (winningNumber === userNumberChoice) {
        userWinnter = true;
    }
    
    let responseObject = {
        results: userWinner
    };

    response.send(responseObject);
});