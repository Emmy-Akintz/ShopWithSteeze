const db = require("../models");
const Item = db.items;

// Create and Save a new Item
exports.create = async (req, res) => {
    const { name, price, category, color,  description, size } = req.body
    await Item.create({name, price, category, color,  description, size})
    res.json({msg: `Item ${name} successfully created`})
};