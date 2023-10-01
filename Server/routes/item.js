const express = require('express');
const router = express.Router();

const item = require('../controllers/item.controller')
const featureditem = require('../controllers/featuredItem.controller')

router.post('/createItem', item.create)
router.get('/storeitems', item.findAll)
router.post('/featureditems', featureditem.create)
router.get('/featureditems', featureditem.findAll)
router.get('/storeitems/:itemId', item.findOne)

module.exports = router