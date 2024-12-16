import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Products.css';
import config from '../config/config'; // Ensure you have the correct import for the config

function Products() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/categories/`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        
        // Log the full data to inspect its structure
        console.log('Fetched categories:', data);

        // Assuming data has a 'data' property containing the list of categories
        setCategories(data.data); // Accessing the 'data' property that contains categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (path) => {
    navigate(`/products/${path}`);
  };

  return (
    <div className="products-container">
      <Breadcrumb />
      <div className="category-grid">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <div 
              key={category.id} 
              className="category-card" 
              onClick={() => handleCategoryClick(category.id.toString())} // Ensure category id is passed as string
              role="button" // Add role for accessibility
              tabIndex={0} // Make it focusable for keyboard navigation
              onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category.id.toString())} // Handle keyboard navigation
            >
              <img 
                src={category.cat_image} 
                alt={`${category.name} - ${category.description}`} // More descriptive alt text
                className="category-image" 
              />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))
        ) : (
          <p>No categories available</p> // Handle case when categories are empty or not an array
        )}
      </div>
    </div>
  );
}

export default Products;
