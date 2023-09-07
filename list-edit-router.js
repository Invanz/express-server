const express = require("express");

    const router = express.Router();

    router.get("/get", (req, res) => {
        res.send("hola")
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  res.send("Se actualizará la tarea con ID No.", id);
});

router.delete("/delete", (req, res) => {
  console.log("hola")
  res.send("Se eliminará la tarea con ID No.");
});

router.post("/", (req, res) => {
  res.send("se recibe en el body la nueva tarea");
});



module.exports = router;
