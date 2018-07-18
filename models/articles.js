// requiring mongoose
var mongoose = require("mongoose");

// variable for setting the Schema constructor
var Schema = mongoose.Schema();

// creating the article schema constructor
var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "notes"
    }
});

// creating a varible called article that creates the DB Article with the schema of the articleSchema constructor
var article = ("Article", articleSchema);

module.exports = article;