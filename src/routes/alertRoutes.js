const express = require('express');
const router = express.Router();
const { getLowStockAlerts } = require('../controllers/alertController');

router.get('/:companyId/alerts/low-stock', getLowStockAlerts);

module.exports = router;