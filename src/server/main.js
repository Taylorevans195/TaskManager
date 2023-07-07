const express = require("express");
const cors = require('cors')
const ViteExpress = require("vite-express");
const { login, register } = require("./controllers/auth");
const db = require('./util/database')
const {User} = require('./util/models')

const app = express();
app.use(express.json())

app.post('/login',login)
app.post('/register',register)

db.sync();
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
