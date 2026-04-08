const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/stockflow')
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));