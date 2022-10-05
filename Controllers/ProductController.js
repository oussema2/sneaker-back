const Product = require("../Schemas/ProductsSchema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.add = (req, res) => {
  const reqBody = req.body;
  const product = new Product(reqBody);
  product.primaryImage = reqBody.images[0];
  product.secondaryImage = reqBody.images[1];
  product.allImages = req.body.images;
  product.brand = mongoose.Types.ObjectId(req.body.brand);
  product.categorie = mongoose.Types.ObjectId(req.body.categorie);

  product._id = req.body.id;

  product.save((err, product) => {
    if (err) {
      return res.send({
        status: 400,
        message: err,
        attr: "email",
      });
    }
    res.status(200).send({
      message: "ADDED",
      product: product,
      status: 200,
    });
  });
};

exports.read = (req, res) => {
  Product.find({})
    .populate("brand")
    .populate("categorie")
    .exec((err, products) => {
      if (err) {
        return res.send({
          status: 400,
          message: err,
          attr: "email",
        });
      }
      if (products) {
        res.status(200).send({
          message: "ADDED",
          product: products,
          status: 200,
        });
      }
    });
};
