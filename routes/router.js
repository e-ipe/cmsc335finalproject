const express = require("express");
const Entry = require("../models/Entry");
const router = express.Router();

// home
router.get("/", async (req, res) => {
  const entries = await Entry.find();
  res.render("index", { entries });
});

// new dawg for a name
router.post("/entries", async (req, res) => {
  const entry = await Entry.create({ name: req.body.name });
  res.redirect(`/entries/${entry._id}`);
});

// clear
router.get("/entries/clear/all", async (req, res) => {
  await Entry.deleteMany({});
  res.redirect("/");
});

// show a name again
router.get("/entries/:id", async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
  const dogData = await dogResponse.json();

  res.render("result", { entry, dogImage: dogData.message });
});

module.exports = router;
