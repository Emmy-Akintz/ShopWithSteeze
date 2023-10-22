const express = require("express");
const router = express.Router();

const cart = require("../controllers/cart.controller");

router.post("/createCartItem/:firebaseUid", cart.create);

router.get("/getCartItems/:firebaseUid", cart.findAll);

module.exports = router;
