const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    await Product.deleteMany({});
    const sample = [
      { name: 'Clean Code', description: 'A Handbook of Agile Software Craftsmanship', price: 299, image: '', countInStock: 5 },
      { name: 'You Don’t Know JS', description: 'Book Series on JS', price: 199, image: '', countInStock: 8 },
      { name: 'Eloquent JavaScript', description: 'Modern introduction to programming', price: 249, image: '', countInStock: 6 }
    ];
    const created = await Product.insertMany(sample);
    res.json({ created });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
