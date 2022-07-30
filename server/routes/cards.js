const express = require('express')
const router = express.Router()

const allCards = require('../db/functions/cards')

router.get('/', (req, res) => {
  allCards.getAllCards()
    .then((allTheCards) => res.json(allTheCards))
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router