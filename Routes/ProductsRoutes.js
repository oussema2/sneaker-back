const ProductsRouter = require("express").Router();
const ProductController = require("../Controllers/ProductController");
const JWT = require("../Helpers/JWT");
const imageUpload = require("../Multer/PrdocutsMulter/fileUploads").uploadFile;

ProductsRouter.route("/add").post(
  JWT.JWTChecker,
  imageUpload.array("otherimages", 999999),
  ProductController.add
);

ProductsRouter.route("/read").get(ProductController.read);

module.exports = ProductsRouter;
