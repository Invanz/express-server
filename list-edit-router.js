const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hola")
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Se actualizará la tarea con ID No. ${id}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Se eliminará la tarea con ID No. ${id}`);
});

router.post("/", (req, res) => {
  res.send("se recibe en el body la nueva tarea");
});

module.exports = router;
