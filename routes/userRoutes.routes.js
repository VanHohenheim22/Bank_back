const express = require("express")

const userRoute = express.Router();

const userController = require("../controllers/user.controllers")

userRoute
.route("/signup")
.post(userController.createUser)

userRoute
.route("/login")
.post(userController.login)

userRoute
.route("/id/history")
.get(userController.history)


module.exports = userRoute