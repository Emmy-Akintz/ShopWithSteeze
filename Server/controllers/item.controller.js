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

exports.findOne = async (req, res) => {
    try {
      const itemId = req.params.itemId;

      // Use the Mongoose model to find one item by _id
      const item = await Item.findById(itemId);

      // Check if the item exists
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }

      // Return the found item as JSON response
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
}