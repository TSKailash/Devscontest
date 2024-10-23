require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product'); // Ensure this path is correct
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
    app.get('/api/products', async (req, res) => {
        const { page = 1, limit = 10 } = req.query;
        console.log(`Fetching products: page=${page}, limit=${limit}`);
        try {
            const products = await Product.find().limit(limit * 1).skip((page - 1) * limit);
            const total = await Product.countDocuments();
            console.log(`Fetched ${products.length} products`);
            res.json({
                products,
                totalPages: Math.ceil(total / limit),
                currentPage: page
            });
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
