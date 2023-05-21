import Item from "../model/Item.js";

export const createItem = async (req, res, next) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(200).json(newItem);
  } catch (err) {
    next(err);
  }
};
export const getItem = async (req, res, next) => {
  try {
    const foundItem = await Item.findById(req.params.id);
    res.status(200).json(foundItem);
  } catch (err) {
    next(err);
  }
};
export const getAll = async (req, res, next) => {
  const filter = req.query;
  if (filter.type == 0) {
    try {
      const allItem = await Item.find();
      res.status(200).json(allItem);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      const allItem = await Item.find(filter);
      res.status(200).json(allItem);
    } catch (err) {
      next(err);
    }
  }
};
export const update = async (req, res, next) => {
  const result = await Item.updateMany({}, { $set: { Category: "Drinks" } });
};
