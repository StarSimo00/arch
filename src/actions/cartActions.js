export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { ...product, quantity },
  });
  
  export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: { id },
  });
  
  export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  });