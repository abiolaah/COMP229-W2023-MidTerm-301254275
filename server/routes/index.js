/*File name: routes-books.js
Author name: Oluwapelumi Ajuwon
Student ID:301254275
Site Name: My Favourite Books*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let Book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
