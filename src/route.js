const express = require('express');
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');

const route = express.Router();

route.get('/', (req, res) => res.render("home", { page: 'enter-room' }))
route.get('/create-room', (req, res) => res.render("home", { page: 'create-room' }))

route.post('/create-pass', roomController.create)
route.post("/enterroom", roomController.enter)
route.get('/room/:room', roomController.open)

route.post('/question/:room/:question/:action', questionController.index)
route.post('/question/create/:room', questionController.create)

module.exports = route

