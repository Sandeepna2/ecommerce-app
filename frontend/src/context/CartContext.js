import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [] // { productId, name, price, qty }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload;
      const exist = state.cart.find(i => i.productId === item.productId);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map(i => i.productId === item.productId ? { ...i, qty: i.qty + item.qty } : i)
        };
      }
      return { ...state, cart: [...state.cart, item] };
    }
    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter(i => i.productId !== action.payload) };
    case 'UPDATE_QTY':
      return {
        ...state,
        cart: state.cart.map(i => i.productId === action.payload.id ? { ...i, qty: action.payload.qty } : i)
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    cart: state.cart,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' })
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
