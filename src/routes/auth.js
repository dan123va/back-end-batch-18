const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  req.session.user = { id: 1, username: "John Doe" };
  console.log('Inicio de sesion exitoso!');
  res.json({ message: "Inicio de sesion exitoso!" });
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  console.log('esion cerrada exitosamente!');
  res.json({ message: "Sesion cerrada exitosamente!" });
});

module.exports = router;
