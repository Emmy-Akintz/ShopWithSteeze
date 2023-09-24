const express = require('express');
const router = express.Router();

const item = require('../controllers/item.controller')

router.post('/createItem', item.create)

module.exports = router