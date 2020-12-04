const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:VgM8hR0qsQT60T43@cluster0.stkey.mongodb.net/genericDatabase?retryWrites=true&w=majority";;

const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let connection = mongoose.connect(db, options, (error) => {

    if (error) {
        console.log("There was an error!", error);
    } else {
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    }
});

let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});
// This Oject/exampleModel represents our db
let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Read from firstcollections colleciton. The first argument is the "search parameters", the seocond argument will run when we get a response, the database will return an error or results.
// Search Parameters
exampleModel.find({age: 20}, (error, results) => { 
    if (error) {
        console.log("There was an error reading database.", error);
    } else {
        console.log("Successfully read the database.");
        console.log ("We found something.", results);
    }
});// find() needs 2 arguments: Object and Callback Function

// mongoose documentation -> https://mongoosejs.com/docs/api.html