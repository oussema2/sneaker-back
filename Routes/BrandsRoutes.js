const BrandRouter = require("express").Router();
const BrandController = require("../Controllers/BrandsController");
const JWT = require("../Helpers/JWT");

BrandRouter.route("/add").post(JWT.JWTChecker, BrandController.add);
BrandRouter.route("/read").get(BrandController.read);

module.exports = BrandRouter;
