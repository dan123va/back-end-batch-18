"use strict";

// DEPENDENCIAS
const express = require("express");
const session = require("express-session");
const cors = require("cors");

// RUTAS
const auth = require("./src/routes/auth");
const users = require("./src/routes/users");

// DB
const db = require("./config/dbConnection");

const dbMiddleware = (req, res, next) => {
  req.db = db;
  next();
};

const app = express();
const PORT = "3001";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

app.use(dbMiddleware);
app.use(auth);
app.use(users);


app.listen(PORT, () => {
  console.log(`Servidor listening on port ${PORT}`);
});
