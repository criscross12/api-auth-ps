const express = require("express");
const userSchema = require("../models/user.model");

const router = express.Router();

router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.get("/users", async (req, res) => {
  try {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { ...data } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
