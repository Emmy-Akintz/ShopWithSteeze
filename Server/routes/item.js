const express = require('express');
const router = express.Router();

const item = require('../controllers/item.controller')

router.post('/createItem', item.create)
router.get('/storeitems', item.findAll)

module.exports = router