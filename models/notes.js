// requiring mongoose
var mongoose = require("mongoose");

// variable for setting the Schema constructor
var Schema = mongoose.Schema();

// creating the note schema constructor
var noteSchema = new Schema({
    title: String,
    body: String
});

// creating variable to export the DB name and schema constructor
var notes = ("notes", noteSchema);

// exporting notes
module.exports(notes);