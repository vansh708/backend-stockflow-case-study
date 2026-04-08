const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  quantity: { type: Number, default: 0 }
});

module.exports = mongoose.model('Inventory', inventorySchema);
