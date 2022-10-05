const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BrandSchema = new Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  numberOfProducts: {
    type: Number,
    default: 0,
  },
});

const Brand = mongoose.model("Brand", BrandSchema);
module.exports = Brand;
