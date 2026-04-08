const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');


router.get('/', (req, res) => {
  res.json({ message: "List of products (dummy data)" });
});

router.post('/', (req, res) => {
  res.json({ message: "Product created (dummy)" });
});

router.post('/', createProduct);

module.exports = router;