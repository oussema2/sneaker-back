const Categories = require("../Schemas/CategorieSchema");
const Brands = require("../Schemas/BrandsSchema");
exports.add = (req, res) => {
  if (!req.user) {
    res.send({
      status: 301,
      message: "unauthorized",
    });
  }
  const reqBody = req.body;
  const response = {};
  const categorie = new Categories(reqBody);
  categorie.save((err, categorie) => {
    if (err) {
      response["status"] = 404;
      response["message"] = err;
    }
    if (categorie) {
      response["status"] = 200;
      response["message"] = "ADDED";
      response["categorie"] = categorie;
    }
    res.send(response);
  });
};

exports.read = (req, res) => {
  const response = {};

  Categories.find({}, (err, categories) => {
    if (err) {
      response["status"] = 404;
      response["message"] = err;
    }
    if (categories) {
      response["status"] = 200;
      response["message"] = "FETCHED";
      response["categories"] = categories;
    }
    res.send(response);
  });
};

exports.getAllCategoriesAndBRands = async (req, res) => {
  const response = {};

  const resCategories = await Categories.find({});
  const resBrands = await Brands.find({});
  if (resCategories && resBrands) {
    res.send({
      status: 200,
      message: "FETCHED",
      brands: resBrands,
      categories: resCategories,
    });
  }
  //   res.send({ data: resCategories });
};
