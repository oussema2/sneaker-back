const Brand = require("../Schemas/BrandsSchema");

exports.add = (req, res) => {
  if (!req.user) {
    res.send({
      status: 301,
      message: "unauthorized",
    });
  }
  const reqBody = req.body;
  const response = {};
  const brand = new Brand(reqBody);
  brand.save((err, brand) => {
    if (err) {
      response["status"] = 404;
      response["message"] = err;
    }
    if (brand) {
      response["status"] = 200;
      response["message"] = "ADDED";
      response["brand"] = brand;
    }
    res.send(response);
  });
};

exports.read = (req, res) => {
  const response = {};

  Brand.find({}, (err, brands) => {
    if (err) {
      response["status"] = 404;
      response["message"] = err;
    }
    if (brands) {
      response["status"] = 200;
      response["message"] = "FETCHED";
      response["brands"] = brands;
    }
    res.send(response);
  });
};
