// src/pages/ProductDetails.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetails.css';
import config from '../config/config';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/product-detail/${id}`);
        
        if (!response.ok) {
          throw new Error(`Product not found with ID: ${id}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log('Fetched product:', data); // Log product details
          setProduct(data);
        } else {
          const text = await response.text();
          console.error("Error: Expected JSON but got HTML:", text);
          throw new Error("Expected JSON but got HTML, possibly an error page.");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading product...</p>;
  }

  const price = parseFloat(product.price);
  const totalPrice = price * quantity;

  if (isNaN(price)) {
    return <p>Invalid product price.</p>;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      price,
      quantity,
    };
    console.log('Adding to cart:', productToAdd); // Log what is being added to the cart
    addToCart(productToAdd);
    alert(`${quantity} ${product.name}(s) have been added to your cart!`);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-details-info">
        <h2>{product.title}</h2>
        <p className="product-details-price">${price.toFixed(2)}</p>
        <p className="product-details-description">
          {product.description}
        </p>
        <div className="quantity-control">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p className="product-details-total-price">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to={-1} className="back-link">
          <h2>Go Back</h2>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
