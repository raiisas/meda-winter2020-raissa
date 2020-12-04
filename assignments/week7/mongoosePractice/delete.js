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

let exampleModel = new mongoose.model("firstcollections", exampleSchema);

// Finds a specific document by its ID, and deletes the docuement from the database and returns either error or results. Note: results will have a copy of the deleted document.
exampleModel.findByIdAndDelete("5fca8a3a0adad8fdc1f8a848", (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully deleted the follow document from the database: ", results);
    }
});