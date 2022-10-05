const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorieSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  numberOfProducts: {
    type: Number,
    default: 0,
  },
});

const Categorie = mongoose.model("Categorie", CategorieSchema);
module.exports = Categorie;
