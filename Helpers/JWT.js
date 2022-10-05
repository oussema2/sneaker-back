const jsonwebtoken = require("jsonwebtoken");

exports.JWTChecker = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;

    next();
  }
};

exports.generateUserJWT = (data) => {
  return jsonwebtoken.sign(
    {
      email: data?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      _id: data?._id,
    },

    "RESTFULAPIs"
  );
};
