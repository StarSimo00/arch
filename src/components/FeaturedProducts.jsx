import React from 'react';
import '../Styles/Style.css';

const featuredProducts = [
  {
    id: 1,
    image: '../images/img-1.jpg',
    price: '$10.00',
    description: 'This is a great product.'
  },
  {
    id: 2,
    image: '../images/img-2.jpg',
    price: '$20.00',
    description: 'This product is even better.'
  },
  {
    id: 3,
    image: '../images/img-3.jpg',
    price: '$30.00',
    description: 'The best product of all.'
  }
];

const FeaturedProducts = () => {
  return (
    <div className="animate__animated animate__fadeInUp featured-products">
      <h3>Featured Products</h3> {/* Smaller header */}
      <div className="featured-products-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featured-product">
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="featured-product-content">
              <p>{product.price}</p>
              <p>{product.description}</p> {/* Added description */}
              <button>Add to Cart <i className="bi bi-cart-plus"></i></button> {/* Added cart icon */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;