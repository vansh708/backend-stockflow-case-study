const Inventory = require('../models/Inventory');
const Product = require('../models/Product');
const Warehouse = require('../models/Warehouse');
const ProductSupplier = require('../models/ProductSupplier');
const Supplier = require('../models/Supplier');
const InventoryLog = require('../models/InventoryLog');

exports.getLowStockAlerts = async (req, res) => {
  try {
    const { companyId } = req.params;
    const threshold = 20; // assumption
    const days = 30;

    const warehouses = await Warehouse.find({ companyId });

    const alerts = [];

    for (let wh of warehouses) {
      const inventories = await Inventory.find({ warehouseId: wh._id });

      for (let inv of inventories) {

        const product = await Product.findById(inv.productId);

        // recent activity check
        const recentLogs = await InventoryLog.find({
          productId: product._id,
          createdAt: { $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) }
        });

        if (inv.quantity < threshold && recentLogs.length > 0) {

          const ps = await ProductSupplier.findOne({ productId: product._id });

          let supplierData = null;
          if (ps) {
            const sup = await Supplier.findById(ps.supplierId);
            supplierData = {
              id: sup._id,
              name: sup.name,
              contactEmail: sup.contactEmail
            };
          }

          alerts.push({
            product_id: product._id,
            product_name: product.name,
            sku: product.sku,
            warehouse_id: wh._id,
            warehouse_name: wh.name,
            current_stock: inv.quantity,
            threshold,
            days_until_stockout: 10, // assumption
            supplier: supplierData
          });
        }
      }
    }

    res.json({
      alerts,
      total_alerts: alerts.length
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};