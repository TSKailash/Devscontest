require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
    .then(() => console.log('Connected to MongoDB for seeding'))
    .catch(err => console.error('MongoDB connection error:', err));
    const products = [
        {
            name: 'Canon-3245',
            description: 'A high-quality camera with advanced features.',
            price: 5040,
            stock: 20,
            images: [
                { url: '../Frontend/images/book-img.webp', altText: 'Canon-3245 camera image' }
            ],
            rating: 5
        },
        {
            name: 'Adidas-shoes',
            description: 'A shoe makes you feel the air...',
            price: 2500,
            stock: 15,
            images: [
                { url: '../Front-end/images/adidas-shoes.webp', altText: 'Front view of Laptop Z300' }
            ],
            rating: 5
        },
        {
            name: 'tata-coffee',
            description: 'You definitely need a coffee break.',
            price: 280,
            stock: 50,
            images: [
                { url: '../Frontend/images/book2-img.webp', altText: 'Smartwatch Pro image' }
            ],
            rating: 5
        },
        {
            name: 'G-Force Rtx-4050 Graphics Card',
            description: 'Enhance your gaming experience..',
            price: 72350,
            stock: 60,
            images: [
                { url: '../Frontend/images/graphics-card.webp', altText: 'Bluetooth Speaker X image' }
            ],
            rating: 4
        },
        {
            name: 'Oneplus-Airpods',
            description: 'Noise-cancelling wireless earbuds with a sleek design.',
            price: 800,
            stock: 80,
            images: [
                { url: '../Frontend/images/earbuds-img.png', altText: 'Wireless Earbuds Pro image' }
            ],
            rating: 5
        },
        {
            name: 'Sticky-notes',
            description: 'Do not skip any important notes.',
            price: 599,
            stock: 25,
            images: [
                { url: '../Frontend/images/sticky-notes.webp', altText: 'Canon DSLR X500 image' }
            ],
            rating: 5
        },
        {
            name: 'Louis Vuitton-Bag',
            description: 'A premium bag for a premium person.',
            price: 12280456,
            stock: 30,
            images: [
                { url: '../Frontend/images/handbag-img.webp', altText: 'Smart TV 55" 4K image' }
            ],
            rating: 4
        },
        {
            name: 'Gaming-system',
            description: 'Ergonomic gaming system with high precision.',
            price: 1200,
            stock: 120,
            images: [
                { url: '../Frontend/images/gaming-system.webp', altText: 'Gaming Mouse G502 image' }
            ],
            rating: 5
        },
        {
            name: 'Ice cream',
            description: 'Enjoy tasty icecream.',
            price: 340,
            stock: 40,
            images: [
                { url: '../Frontend/images/icecream-img.webp', altText: 'Home Security Camera image' }
            ],
            rating: 5
        },
        {
            name: 'Unibic-biscuits',
            description: 'Enjoy tasty biscuits from unibic.',
            price: 210,
            stock: 150,
            images: [
                { url: '../Frontend/images/unibic.webp', altText: 'Portable Charger 20000mAh image' }
            ],
            rating: 5
        },
        {
            name: 'Nike-Shoe',
            description: 'Get nike shoe and walk in air.',
            price: 2018,
            stock: 10,
            images: [
                { url: '../Frontend/images/nike-img.webp', altText: 'Gaming Laptop GX900 image' }
            ],
            rating: 5
        },
        {
            name: 'Mrbeast-Feastables',
            description: 'Enjoy chocolates from MR beast.',
            price: 499,
            stock: 200,
            images: [
                { url: '../Frontend/images/feastables.webp', altText: 'Fitness Tracker Z image' }
            ],
            rating: 4
        },
        {
            name: 'Tata-tea',
            description: 'Enjoy every sip of tea from TATA.',
            price: 450,
            stock: 35,
            images: [
                { url: '../Frontend/images/suitcase-img.webp', altText: 'Tablet Pro 10" image' }
            ],
            rating: 5
        },
        {
            name: 'Motorola-125',
            description: 'Fastest mobile from motorola.',
            price: 13450,
            stock: 90,
            images: [
                { url: '../Frontend/images/motorola.webp', altText: 'Wireless Charging Pad image' }
            ],
            rating: 4
        },
        {
            name: 'Iphone 15 Pro Max',
            description: 'The brand new Iphone 15 is here.',
            price: 145087,
            stock: 40,
            images: [
                { url: '../Frontend/images/iphone-img.jpeg', altText: 'Noise-Cancelling Headphones X image' }
            ],
            rating: 5
        },
        {
            name: 'Oreo',
            description: 'Tasty oreo is in full stock.',
            price: 350,
            stock: 15,
            images: [
                { url: '../Frontend/images/oreo-chocolate.webp', altText: 'Drone Pro X2 image' }
            ],
            rating: 5
        },
        {
            name: 'Jersey',
            description: 'Play with this jersey on and you will win every game.',
            price: 670,
            stock: 25,
            images: [
                { url: '../Frontend/images/messi-png.webp', altText: 'Gaming Console X500 image' }
            ],
            rating: 5
        },
        {
            name: 'Mrbeast-Tshirt',
            description: 'Get MR beast merchandise here.',
            price: 1999,
            stock: 80,
            images: [
                { url: '../Frontend/images/mrbeast-tshirt.webp', altText: 'Electric Kettle 1.7L image' }
            ],
            rating: 4
        },
        {
            name: 'Asus-TUF Gaming Laptop',
            description: 'A fast gaming laptop.',
            price: 58050,
            stock: 30,
            images: [
                { url: '../Frontend/images/lap-img.webp', altText: 'Smart Vacuum Cleaner image' }
            ],
            rating: 4
        },
        {
            name: 'Ps5 Console',
            description: 'Play your favourite games on ps5 console.',
            price: 30450,
            stock: 20,
            images: [
                { url: '../Frontend/images/ps5-img.webp', altText: 'Electric Scooter X500 image' }
            ],
            rating: 5
        },
        {
            name: 'Football',
            description: 'Play your game using our football.',
            price: 1060,
            stock: 60,
            images: [
                { url: '../Frontend/images/football-img.webp', altText: '4K Action Camera image' }
            ],
            rating: 4
        },
        {
            name: 'Kurta With Dupata',
            description: 'Get quality dresses from this site.',
            price: 799,
            stock: 45,
            images: [
                { url: '../Frontend/images/skirt-dupata.webp', altText: 'Digital Photo Frame image' }
            ],
            rating: 4
        },
        {
            name: 'Alexa',
            description: 'Make home automated using alexa.',
            price: 2350,
            stock: 100,
            images: [
                { url: '../Frontend/images/alexa-img.webp', altText: 'Smart Home Hub image' }
            ],
            rating: 5
        },
        {
            name: 'Redmi-tablet',
            description: 'High-performance tablet on low price.',
            price: 12950,
            stock: 20,
            images: [
                { url: '../Frontend/images/redmi-tablet.webp', altText: 'Fitness Bike Pro image' }
            ],
            rating: 5
        }
    ];
const seedDatabase = async () => {
    try {
        await Product.deleteMany({});
        console.log('Previous products deleted');

        await Product.insertMany(products);
        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();