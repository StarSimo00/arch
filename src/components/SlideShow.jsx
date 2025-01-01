import React, { useState, useEffect } from 'react';
import '../Styles/Style.css';

const products = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/img-1.jpg`,
    price: '$10.00'
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/img-2.jpg`,
    price: '$20.00'
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/img-3.jpg` ,
    price: '$30.00'
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate__animated animate__fadeInUp slideshow-container">
      {products.map((product, index) => (
        <div key={product.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={product.image} alt={`Product ${product.id}`} />
          <div className="slide-content">
            <p>{product.price}</p>
            <button>Add to Cart <i className="bi bi-bag-plus-fill m-1 p-1"></i></button>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;