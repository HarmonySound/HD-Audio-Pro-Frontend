import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useProducts from '../data/products'; // Ensure the import path is correct
import Breadcrumb from '../components/Breadcrumb';
import '../styles/ProductList.css';

function ProductList() {
  const { category } = useParams();
  const { products, loading, error } = useProducts(); // Fetch products using the custom hook
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Log the category to debug
  console.log('Category:', category);

  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => product.category.toString() === category);
      // Log the filtered products
      console.log('Filtered products:', filtered);
      setFilteredProducts(filtered);
    }
  }, [products, category]); // Re-run when products or category changes

  // Handle loading or error
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Redirect to a default category if category is undefined
  if (!category) {
    return <Navigate to="/products/speakers" />; // Redirect to a default category
  }

  return (
    <div className="product-list-container">
      <Breadcrumb />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.title}</h3>
              <p>${parseFloat(product.price).toFixed(2)}</p>
              <Link to={`/product/${product.id}`}>
                <button className="view-more-button">Buy Now</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
