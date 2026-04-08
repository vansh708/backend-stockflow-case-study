const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  change: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InventoryLog', logSchema);