const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id: {
    unique: true,
    trim: true,
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Decimal128,
    required: true,
  },
  primaryImage: {
    type: String,
    required: true,
  },
  secondaryImage: {
    type: String,
    required: true,
  },
  allImages: [{ type: String, required: true }],
  quantitie: {
    type: Number,
    required: true,
  },
  size: {
    type: Decimal128,
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
  },
  createdAt: {
    type: Schema.Types.Date,
    default: new Date(),
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
