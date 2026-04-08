const mongoose = require('mongoose');

const psSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
});

module.exports = mongoose.model('ProductSupplier', psSchema);