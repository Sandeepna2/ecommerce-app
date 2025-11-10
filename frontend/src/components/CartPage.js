import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeItem, updateQty, clearCart } = useCart();

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (cart.length === 0) return <div>
    <h2>Your cart is empty</h2>
    <Link to="/">Go shopping</Link>
  </div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li key={item.productId} style={{ borderBottom: '1px solid #eee', padding: 10, display:'flex', justifyContent:'space-between' }}>
            <div>
              <strong>{item.name}</strong>
              <div>₹{item.price} x {item.qty} = ₹{item.price * item.qty}</div>
            </div>
            <div>
              <input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item.productId, Number(e.target.value))} />
              <div style={{ marginTop: 8 }}>
                <button onClick={() => removeItem(item.productId)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total}</h3>
      <button onClick={() => alert('Checkout placeholder')}>Proceed to Checkout</button>
      <button onClick={clearCart} style={{ marginLeft: 10 }}>Clear Cart</button>
    </div>
  );
}
