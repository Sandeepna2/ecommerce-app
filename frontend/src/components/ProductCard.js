import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <div style={{ height: 140, background: '#f7f7f7', marginBottom: 8, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src={product.image || 'https://via.placeholder.com/120'} alt={product.name} style={{ maxHeight: '100%' }} />
      </div>
      <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
      <p style={{ margin: '0 0 8px' }}>₹{product.price}</p>
      <Link to={`/products/${product._id}`}>View</Link>
    </div>
  );
}
