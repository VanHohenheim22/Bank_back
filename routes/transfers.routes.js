const express = require("express")

const transferRoute = express.Router();

const transfController = require("../controllers/transfers.controllers")

transferRoute
.route("/")
.post(transfController.makeTransfer)

module.exports = transferRoute