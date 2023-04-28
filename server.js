require('dotenv').config();
const { db } = require("./database/config");
const app = require('./app');

const port = process.env.PORT;

db.authenticate()
.then(() => console.log("Si tienes base de datos"))
.catch(err => console.log(err))

db.sync()
.then(() => console.log("Me sincronicé ._ ."))
.catch(err => console.log(err))

app.listen(port, () => {
  console.log(
    `si cirvo, ando corriendo en: ${port} ._ .`
  );
});

