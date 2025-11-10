import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import { useCart } from './context/CartContext';

function App() {
  const { cart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1><Link to="/">My E-Shop</Link></h1>
        <nav>
          <Link to="/cart">Cart ({cart.reduce((s, i) => s + i.qty, 0)})</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
