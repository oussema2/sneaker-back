const User = require("../Schemas/UserSchema");
const bcrypt = require("bcrypt");
const JWT = require("../Helpers/JWT");
exports.register = async (req, res) => {
  const reqbody = req.body;
  const user = new User(reqbody);
  bcrypt.genSalt(15, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      user.save((err, user) => {
        if (err?.keyPattern["email"] === 1) {
          return res.send({
            status: 400,
            message: "Email Adress is Already Exist !!!",
            attr: "email",
          });
        }
        if (user) {
          res.status(200).send({
            message: "ADDED",
            user: user,
            status: 200,
          });
        }
      });
    });
  });
};

exports.login = async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return res.send({
        status: 400,
        message: err,
      });
    }
    if (!user) {
      res.send({
        status: 401,
        message: "Authentification failed , Wrong Email.",
      });
    }
    if (user && !user.comparePassword(password)) {
      return res.send({
        status: 401,
        message: "Authentification fails , Invalid Password.",
      });
    }
    if (user && user.comparePassword(password)) {
      res.send({
        token: JWT.generateUserJWT(user),
        status: 200,
        user: user,
      });
    }
  });
};

exports.JWTLogin = (req, res) => {
  if (!req.user) {
    res.send({
      status: 301,
      message: "unauthorized",
    });
  }
  if (req.user) {
    User.findOne({ _id: req.user._id }, (err, user) => {
      if (err) {
        res.send({
          status: 404,
          message: err,
        });
      }
      if (user) {
        res.send({
          status: 200,
          user: user,
          token: JWT.generateUserJWT(user),
        });
      }
    });
  }
};
