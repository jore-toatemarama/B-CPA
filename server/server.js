const express = require('express')
const path = require('path')
const cardRoutes = require('./routes/cards')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cards', cardRoutes)

module.exports = server
