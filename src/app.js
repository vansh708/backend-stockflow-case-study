const express = require('express');

console.log('APP.JS LOADED');

const app = express();

app.use(express.json());

// Debugging route
app.get('/', (req, res) => {
  res.send('Server is alive! Try /api/product');
});

// routes
const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);
app.use('/api/product', productRoutes);

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    error: "Route not found", 
    solution: "Try http://localhost:3000/api/products"
  });
});

module.exports = app;