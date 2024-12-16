import { useEffect, useState } from 'react';
import config from '../config/config'; // Ensure you have the correct import for the config

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/products/`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        // Get the response text to log it
        const responseText = await response.text();
        console.log('Fetched products response text:', responseText);

        // Attempt to parse the response as JSON
        const data = JSON.parse(responseText);

        // Log the full response data to inspect its structure
        console.log('Fetched products data:', data);

        setProducts(data.data); // Assuming the response has 'data' with the products
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
