const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  name: String,
  companyId: String
});

module.exports = mongoose.model('Warehouse', warehouseSchema);