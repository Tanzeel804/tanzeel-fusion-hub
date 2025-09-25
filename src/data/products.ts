import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  // Shoes
  {
    id: 1,
    name: "Air Max Revolution Pro",
    brand: "Nike",
    description: "Premium running shoes with advanced cushioning technology and breathable mesh upper for ultimate comfort.",
    price: 149.99,
    rating: 4.8,
    category: 'shoes',
    images: ['gradient-blue-purple', 'gradient-blue-purple']
  },
  {
    id: 2,
    name: "Ultra Boost Elite",
    brand: "Adidas",
    description: "Energy-returning midsole meets a flexible upper for a shoe that moves with you through every stride.",
    price: 179.99,
    rating: 4.7,
    category: 'shoes',
    images: ['gradient-green-blue', 'gradient-green-blue']
  },
  {
    id: 3,
    name: "Classic Leather Loafers",
    brand: "Cole Haan",
    description: "Timeless leather loafers crafted from premium materials. Perfect for business and casual wear.",
    price: 129.99,
    rating: 4.6,
    category: 'shoes',
    images: ['gradient-orange-red', 'gradient-orange-red']
  },
  {
    id: 4,
    name: "Trail Runner Pro",
    brand: "Merrell",
    description: "Rugged outdoor shoes built for adventures. Waterproof and durable with superior grip.",
    price: 119.99,
    rating: 4.5,
    category: 'shoes',
    images: ['gradient-purple-pink', 'gradient-purple-pink']
  },
  {
    id: 5,
    name: "Street Style Sneakers",
    brand: "Vans",
    description: "Classic streetwear sneakers with iconic design. Comfortable canvas upper and rubber sole.",
    price: 89.99,
    rating: 4.4,
    category: 'shoes',
    images: ['gradient-yellow-orange', 'gradient-yellow-orange']
  },

  // Bags  
  {
    id: 6,
    name: "Executive Laptop Bag",
    brand: "Samsonite",
    description: "Professional laptop bag with multiple compartments. Fits laptops up to 15.6 inches.",
    price: 89.99,
    rating: 4.7,
    category: 'bags',
    images: ['gradient-teal-cyan', 'gradient-teal-cyan']
  },
  {
    id: 7,
    name: "Urban Explorer Backpack",
    brand: "Herschel",
    description: "Stylish backpack perfect for daily adventures. Multiple pockets and comfortable straps.",
    price: 69.99,
    rating: 4.6,
    category: 'bags',
    images: ['gradient-indigo-purple', 'gradient-indigo-purple']
  },
  {
    id: 8,
    name: "Designer Handbag Elite",
    brand: "Michael Kors",
    description: "Elegant leather handbag with gold-tone hardware. Perfect for any occasion.",
    price: 199.99,
    rating: 4.8,
    category: 'bags',
    images: ['gradient-pink-rose', 'gradient-pink-rose']
  },
  {
    id: 9,
    name: "Travel Duffel Pro",
    brand: "North Face",
    description: "Spacious duffel bag for travel and sports. Durable materials and comfortable handles.",
    price: 79.99,
    rating: 4.5,
    category: 'bags',
    images: ['gradient-emerald-teal', 'gradient-emerald-teal']
  },
  {
    id: 10,
    name: "Minimalist Wallet",
    brand: "Ridge",
    description: "Slim wallet with RFID blocking technology. Holds up to 12 cards securely.",
    price: 39.99,
    rating: 4.3,
    category: 'bags',
    images: ['gradient-slate-gray', 'gradient-slate-gray']
  },

  // Clothes
  {
    id: 11,
    name: "Premium Cotton T-Shirt",
    brand: "Uniqlo",
    description: "Ultra-soft cotton t-shirt with perfect fit. Available in multiple colors.",
    price: 19.99,
    rating: 4.4,
    category: 'clothes',
    images: ['gradient-lime-green', 'gradient-lime-green']
  },
  {
    id: 12,
    name: "Denim Jacket Classic",
    brand: "Levi's",
    description: "Timeless denim jacket made from premium denim. A wardrobe essential.",
    price: 89.99,
    rating: 4.7,
    category: 'clothes',
    images: ['gradient-blue-indigo', 'gradient-blue-indigo']
  },
  {
    id: 13,
    name: "Formal Business Shirt",
    brand: "Hugo Boss",
    description: "Crisp white business shirt with modern fit. Perfect for professional settings.",
    price: 79.99,
    rating: 4.6,
    category: 'clothes',
    images: ['gradient-violet-purple', 'gradient-violet-purple']
  },
  {
    id: 14,
    name: "Cozy Knit Sweater", 
    brand: "Zara",
    description: "Comfortable knit sweater perfect for cooler weather. Soft and stylish.",
    price: 59.99,
    rating: 4.5,
    category: 'clothes',
    images: ['gradient-rose-pink', 'gradient-rose-pink']
  },
  {
    id: 15,
    name: "Athletic Performance Hoodie",
    brand: "Under Armour",
    description: "Moisture-wicking hoodie for workouts and casual wear. Breathable and comfortable.",
    price: 69.99,
    rating: 4.4,
    category: 'clothes',
    images: ['gradient-cyan-blue', 'gradient-cyan-blue']
  },

  // Tech
  {
    id: 16,
    name: "Wireless Noise Cancelling Headphones",
    brand: "Sony",
    description: "Premium headphones with industry-leading noise cancellation and 30-hour battery life.",
    price: 299.99,
    rating: 4.9,
    category: 'tech',
    images: ['gradient-amber-orange', 'gradient-amber-orange']
  },
  {
    id: 17,
    name: "Smartwatch Pro",
    brand: "Apple",
    description: "Advanced smartwatch with health monitoring, GPS, and cellular connectivity.",
    price: 399.99,
    rating: 4.8,
    category: 'tech',
    images: ['gradient-red-pink', 'gradient-red-pink']
  },
  {
    id: 18,
    name: "Wireless Charging Pad",
    brand: "Anker",
    description: "Fast wireless charging for compatible devices. Sleek design with LED indicator.",
    price: 29.99,
    rating: 4.5,
    category: 'tech',
    images: ['gradient-emerald-green', 'gradient-emerald-green']
  },
  {
    id: 19,
    name: "Bluetooth Speaker Ultra",
    brand: "JBL",
    description: "Portable Bluetooth speaker with powerful sound and waterproof design.",
    price: 89.99,
    rating: 4.6,
    category: 'tech',
    images: ['gradient-sky-blue', 'gradient-sky-blue']
  },
  {
    id: 20,
    name: "Gaming Mouse Elite",
    brand: "Razer",
    description: "High-precision gaming mouse with customizable RGB lighting and 16000 DPI sensor.",
    price: 79.99,
    rating: 4.7,
    category: 'tech',
    images: ['gradient-fuchsia-purple', 'gradient-fuchsia-purple']
  }
];