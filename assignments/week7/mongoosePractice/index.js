const mongoose = require("mongoose"); // Type in exact folder name

// URL that we use to connect to MongoDB Atlas
const db = "mongodb+srv://mongoosePracticeUser:VgM8hR0qsQT60T43@cluster0.stkey.mongodb.net/genericDatabase?retryWrites=true&w=majority";

// We use connect to actually connect to the database. The connect method needs three arguments, URL, options, and callback.
let connection = mongoose.connect(db, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}, (error) => {

// Check if MonoDB gave us an error
    if (error) {
        // If so, log error.
        console.log("There was an error!", error); 
        // If not, successfully connect to database
    } else {
        console.log("Successfully connected to the MongoDB Database.")
    }
});

// Grab a copy of what Schema is from mongoose package
// Schema is (captialized because it's a package) the place where documents get verified. 
let Schema = mongoose.Schema;

// Customize our Schema so mongoose knows how the document is formatted
let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

// Create at the model for mongoose, we look for a specific colleciton, and we are going to work with a specific Schema.
let exampleModel = new mongoose.model("firstCollections", exampleSchema);

// Create a new document and fill it with data.
let exampleDocument = new exampleModel({
    username: "Rai",
    password: "12345",
    created: "Dec 2, 2020",
    age: 30,
    accountClosed: false
});

// CREATE
// callback will run when we get a message from MongoDB.
exampleDocument.save((error) => {
    // We check if we got an error or not and console log accordingly.
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!")
    }
// CLOSE CONNECTION
// Once we've saved this document, we have the option of closing the connection so we can end the script.
    mongoose.connection.close();
    console.log("Closed connection!"); // a variable was created on Line 7
});