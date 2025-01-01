import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { setProducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';
import '../Styles/Style.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    // Simulate fetching data from a local JSON file
    const data = {
      products: [
        {
          id: "1",
          name: "Canson",
          description: "Canson Format Raisin (Lot de 10 feuilles) 150g/m²",
          price: 60,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/canson.png`]
        },
        {
          id: "2",
          name: "Canson A3",
          description: "Paquet Canson A3 (180g/m²) Papier Dessin Blanc",
          price: 40,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/cansona3.png`]
        },
        {
          id: "3",
          name: "Mines",
          description: "Mines FABER-CASTEL 0.5mm",
          price: 30,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/minesfaber.png`]
        },
        {
          id: "4",
          name: "Mines",
          description: "Mines FABER-CASTEL 0.35mm",
          price: 30,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/mines0.35.png`]
        },
        {
          id: "5",
          name: "Pencil",
          description: "Apollo Mechanical pencil (FABER-CASTEL) 0.5mm",
          price: 30,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/pencil0.5.png`]
        },
        {
          id: "6",
          name: "Pencil",
          description: "Mechanical pencil (FABER-CASTEL) 0.35mm",
          price: 30,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/pencil0.35.png`]
        },
        {
          id: "7",
          name: "Aquarelle",
          description: "Aquarelle (LEFRANC BOURGEOIS) Etude/Studio",
          price: 190,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/aquarelle.png`]
        },
        {
          id: "8",
          name: "Adhesive",
          description: "TESA RLX Adhesive Masquage Tape 50x19",
          price: 13,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/adhesive.png`]
        },
        {
          id: "9",
          name: "Carton plume",
          description: "Carton plume 5mm x 50cm x 70cm",
          price: 70,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/cartonplume.png`]
        },
        {
          id: "10",
          name: "UHU",
          description: "Colle Tube UHU Pommade N 13 / 35g",
          price: 16,
          category: "",
          images: [`${process.env.PUBLIC_URL}/images/uhu.png`]
        }
      ]
    };
    dispatch(setProducts(data.products));
  }, [dispatch]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product, 1));
  };

  return (
    <>
      <Navbar />
      <div className="animate__animated animate__fadeInUp products-container">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <div className="product-card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart <i className="bi bi-cart-plus"></i></button>
              <Link to={`/product/${product.id}`}>
                <button>Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="animate__animated animate__fadeInUp pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Products;