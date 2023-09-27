const db = require("../models");
const FeaturedItems = db.featuredItems

// Create and Save a new Item
exports.create = async (req, res) => {
    const { name, price, category, color,  description, size, image } = req.body
    await FeaturedItems.create({name, price, category, color,  description, size, image})
    res.json({msg: `Featured item ${name} successfully created`})
};

exports.findAll = async (req, res) => {
    try {
        const items = await FeaturedItems.find({});
        res.json(items);
    } catch (error) {
        console.error("Error retrieving items:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
