const express = require('express');
const router = express.Router();

const SnapPack = require('../models/snappack');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newSnapPack = new SnapPack(req.body);
    const saved = await newSnapPack.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const all = await SnapPack.find();
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const one = await SnapPack.findById(req.params.id);
    if (!one) return res.status(404).json({ error: 'Not found' });
    res.json(one);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await SnapPack.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await SnapPack.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;