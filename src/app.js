const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
const alertRoutes = require('./routes/alertRoutes');

app.use('/api/products', productRoutes);
app.use('/api/companies', alertRoutes);

module.exports = app;