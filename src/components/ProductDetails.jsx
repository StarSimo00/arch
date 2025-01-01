import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { addToCart } from '../actions/cartActions';
import '../Styles/Style.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.products.find((product) => product.id === id));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product, quantity));
  };

  return (
    <>
      <Navbar />
      {product && (
        <div className="animate__animated animate__fadeInUp product-details">
          <img src={product.images[0]} alt={product.name} />
          <div className="product-details-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="product-details-actions">
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <button onClick={decreaseQuantity}>-</button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button onClick={handleAddToCart}>Add to Cart <i className="bi bi-cart-plus"></i></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;