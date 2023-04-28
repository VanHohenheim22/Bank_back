const express = require("express");
const userRoute = require("./routes/userRoutes.routes");
const transferRoute = require("./routes/transfers.routes");
const app = express();


app.use(express.json());

  app.use("/api/v1/users", userRoute)
  app.use("/api/v1/transfers", transferRoute)
  

module.exports = app;