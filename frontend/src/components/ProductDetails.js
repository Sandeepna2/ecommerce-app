import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addItem } = useCart();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/api/products/' + id)
      .then(r => r.json())
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const addToCart = () => {
    addItem({ productId: product._id, name: product.name, price: product.price, qty: Number(qty) });
    navigate('/cart');
  };

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ width: 300 }}>
        <img src={product.image || 'https://via.placeholder.com/300'} alt={product.name} style={{ width: '100%' }} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>₹{product.price}</p>
        <p>In stock: {product.countInStock}</p>
        <div>
          <label>Qty: </label>
          <input type="number" value={qty} min="1" max={product.countInStock} onChange={e => setQty(e.target.value)} />
        </div>
        <button onClick={addToCart} style={{ marginTop: 10 }}>Add to cart</button>
      </div>
    </div>
  );
}
