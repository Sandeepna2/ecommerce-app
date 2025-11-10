🛍️ E-Commerce App

A full-stack  (MongoDB, Express.js, React.js, Node.js) e-commerce web application that allows users to browse products, view details, manage a shopping cart, and handle cart state management with React Context.

🚀 Features
🧭 Frontend

Built with React.js

React Router for navigation

Responsive UI design

State management for cart (Context API)

Dynamic product listing and details page

⚙️ Backend

Express.js REST API

MongoDB Atlas as a cloud database

Product data handling and seeding

Error handling & CORS setup

Environment variable configuration via .env



🧱 Tech Stack
Layer	Technology Used
Frontend	React.js, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas (Cloud DB)
State Mgmt.	React Context API
Environment	dotenv
🗂️ Project Structure
ecommerce-app/
├── backend/
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   ├── products.js
│   │   └── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductCard.js
    │   │   ├── ProductList.js
    │   │   ├── ProductDetails.js
    │   │   └── CartPage.js
    │   ├── context/
    │   │   └── CartContext.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env

⚙️ Backend Setup
1️⃣ Navigate to backend folder
cd ecommerce-app/backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Inside backend/, create a .env file:

PORT=5000
MONGO_URI=mongodb+srv://ecom_user:MyStrongPass123@cluster0.9zrxy.mongodb.net/ecommerce?retryWrites=true&w=majority


(Replace username, password, and cluster with your actual Atlas credentials.)

4️⃣ Run the server
npm run dev


Expected output:

✅ MongoDB Atlas connected successfully!
🚀 Server running on port 5000

⚙️ Frontend Setup
1️⃣ Navigate to frontend folder
cd ecommerce-app/frontend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Inside frontend/, create:

REACT_APP_API_URL=http://localhost:5000

4️⃣ Run the frontend
npm start


Then open:
👉 http://localhost:3000

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/seed	Seed sample products to DB
🧩 Sample Product Schema
{
  name: "Clean Code",
  description: "A Handbook of Agile Software Craftsmanship",
  price: 299,
  image: "https://via.placeholder.com/150",
  countInStock: 5
}

💻 Scripts
Command	Description
npm run dev	Start backend with Nodemon
npm start	Start frontend React app
npm install	Install dependencies
🧠 Common Issues & Fixes
❌ MongoDB “ENOTFOUND” error

If you see:

Error: querySrv ENOTFOUND _mongodb._tcp.cluster0...


➡ Fix:

Change DNS to Google DNS (8.8.8.8, 8.8.4.4)

Or use non-SRV URI (mongodb://... format)

⚠️ CORS errors

Add this line in server.js:

app.use(cors());

📦 Future Enhancements

🔐 User authentication (JWT)

🛒 Persistent cart using MongoDB

🧾 Order management

💳 Payment gateway integration (Stripe)

🧑‍💻 Admin panel for adding products

👨‍💻 Author

Project Name: ecommerce-app
Developer: [Your Name]
Stack: MERN (MongoDB, Express.js, React.js, Node.js)
Database: MongoDB Atlas

🏁 Quick Start Summary
# Backend
cd ecommerce-app/backend
npm install
npm run dev

# Frontend
cd ecommerce-app/frontend
npm install
npm start


Open your browser → http://localhost:3000
