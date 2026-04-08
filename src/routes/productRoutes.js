const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "List of products (dummy data)" });
});

router.post('/', (req, res) => {
  res.json({ message: "Product created (dummy)" });
});

module.exports = router;