const UserRouter = require("express").Router();
const UserController = require("../Controllers/UserController");
const JWT = require("../Helpers/JWT");
UserRouter.route("/register").post(UserController.register);
UserRouter.route("/login/:email/:password").get(UserController.login);
UserRouter.route("/getUser").get(JWT.JWTChecker, UserController.JWTLogin);

module.exports = UserRouter;
