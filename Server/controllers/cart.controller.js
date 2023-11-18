const db = require("../models");
const Item = db.cart;

// Create and Save a new Item
exports.create = async (req, res) => {
  const { firebaseUid } = req.params;
  const userExists = await Item.find({ _id: req.body.id });
  if (userExists.length < 1) {
    await Item.create({
      ...req.body,
      firebaseUid,
    });

    res.json({ msg: `Cart item ${req.body.name} added successfully created` });
  } else {
    const updatedItem = await Item.updateOne(
      { _id: req.body.id },
      {
        $set: {
          ...req.body,
          firebaseUid,
        },
      }
    );

    if (updatedItem.nModified === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.json({ message: "Updated Cart" });
  }
};

exports.findAll = async (req, res) => {
  const { firebaseUid } = req.params;

  try {
    const items = await Item.find({ firebaseUid: firebaseUid });
    res.json(items);
  } catch (error) {
    console.error("Error retrieving Cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
};

exports.deleteOne = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    // Use the Mongoose model to find and delete one item by _id
    const deletedItem = await Item.findOneAndDelete({ _id: itemId });

    // Check if the item exists
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Return a success message as JSON response
    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
