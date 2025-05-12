const mongoose = require('mongoose');

const SnapSchema = new mongoose.Schema({
  name: String,
  description: String,
  snapCategory: String,
  type: String,
  docLink: String,
  snapImage: String
});

const SnapPackSchema = new mongoose.Schema({
  snapPack: String,
  type: String,
  snapPricingCategory: String,
  docLink: String,
  noOfSnaps: Number,
  snapVersion: String,
  sourceVersion: String,
  lastEnhanceMade: String,
  AhaBacklogLink: String,
  currentWorkItems: String,
  snaps: [SnapSchema]
});

module.exports = mongoose.model('SnapPack', SnapPackSchema);