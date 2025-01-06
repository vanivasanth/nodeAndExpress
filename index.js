const express = require('express');
const routes = require('./routes/books.js');
     
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/books",routes);

app.listen(PORT, ()=>console.log('server is running on port 5000'));