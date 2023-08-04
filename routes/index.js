const route = require('express').Router();
const path = require('path');

route.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/home.html')));

route.get('/viewDish/:id', (req, res) => res.sendFile(path.join(__dirname, '../views/viewDish.html')));

module.exports = route;
