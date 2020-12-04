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

// Find a specifice document based on the ID, and provide the data we want to update as an object in the second argument, and run a callback function when database responds. Note that the database will return the ORIGINAL document, before it was updated.
let exampleModel = new mongoose.model("firstcollections", exampleSchema);

exampleModel.findByIdAndUpdate("5fca7a79e2a1edf9b3afc521", {age: 21, username: "RaiRai"}, (error, results) => {
    if (error) {
        console.log("There was an error.");
    } else {
        console.log("Document was update! This is the original document: ", results);
    }
}); 

// Code to close out connect, in this case 5 seconds
setTimeout(() => {
    mongoose.connection.close();
    console.log("connection closed!");
}, 5000);