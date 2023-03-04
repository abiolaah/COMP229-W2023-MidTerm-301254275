/*File name: models-books.js
Author name: Oluwapelumi Ajuwon
Student ID:301254275
Site Name: My Favourite Books*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
