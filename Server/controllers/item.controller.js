const db = require("../models");
const Item = db.items;

// Create and Save a new Item
exports.create = async (req, res) => {
    const { name, price, category, color,  description, size, image } = req.body
    await Item.create({name, price, category, color,  description, size, image})
    res.json({msg: `Item ${name} successfully created`})
};

exports.findAll = async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        console.error("Error retrieving items:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}