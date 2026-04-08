const Product = require('../models/Product');
const Inventory = require('../models/Inventory');

exports.createProduct = async (req, res) => {
  try {
    const { name, sku, price, warehouseId, initialQuantity } = req.body;

    // ✅ Validation
    if (!name || !sku || !price || !warehouseId || !initialQuantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Check SKU uniqueness
    const existing = await Product.findOne({ sku });
    if (existing) {
      return res.status(400).json({ error: "SKU already exists" });
    }

    // ✅ Create product
    const product = await Product.create({
      name,
      sku,
      price
    });

    // ✅ Create inventory
    await Inventory.create({
      productId: product._id,
      warehouseId,
      quantity: initialQuantity
    });

    res.status(201).json({
      message: "Product created",
      productId: product._id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};