import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';
import necklace from '../assets/necklace.jpg';
import ring from '../assets/ring.jpeg';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Diago Neckalce', price: '$1200', img: necklace },
    { id: 2, name: 'Siold Ring', price: '$2500', img: ring },
    // Add more products
  ];

  return (
    <div>
      <Navbar />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
