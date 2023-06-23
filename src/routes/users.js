const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../process/users");

router.post("/user", async (req, res) => {
  const { body, db } = req;

  const response = await createUser(body, db);
  
  res.send(response);
});

router.get("/user", async (req, res) => {
  const { body, db } = req;

  const response = await getUsers(body, db);
  res.send(response);
});

router.post('/userValidation', async (req, res) => {
  const { body, db } = req;
  // const response = await userValidation(body, db);
  res.send(response);
});

module.exports = router;
