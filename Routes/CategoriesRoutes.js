const CategorieRouter = require("express").Router();
const CategoriesController = require("../Controllers/CategorieController");
const JWT = require("../Helpers/JWT");

CategorieRouter.route("/add").post(JWT.JWTChecker, CategoriesController.add);
CategorieRouter.route("/read").get(CategoriesController.read);
CategorieRouter.route("/getAllCategoriesBrands").get(
  CategoriesController.getAllCategoriesAndBRands
);
module.exports = CategorieRouter;
