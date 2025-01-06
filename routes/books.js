const express = require('express');
let router = express.Router();
const books = require('../data/data.js');


    router.get('/', (req, res) => {
        let { title, author, ISBN } = req.query;
    
        // Filter books based on query parameters
        let filteredBooks = books;
    
        if (title) {
            filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        } else if (author) {
            filteredBooks = filteredBooks.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
        } else if (ISBN) {
            filteredBooks = filteredBooks.filter(book => book.ISBN.toLowerCase().includes(ISBN.toLowerCase()));
        }    
        // Pass the filtered books and the search query to the view
        res.send(filteredBooks);
    });  

module.exports = router ;