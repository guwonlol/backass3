const express = require("express");
const WorkItem = require("../models/WorkItem");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const item = await WorkItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const items = await WorkItem.find();
  res.json(items);
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const item = await WorkItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const item = await WorkItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const item = await WorkItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
});

module.exports = router;
