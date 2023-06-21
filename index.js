"use strict";

const express = require("express");
const session = require("express-session");
const cors = require("cors");
const router = require("./routes/auth")

const app = express();
const PORT = "3001";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor listening on port ${PORT}`);
});
