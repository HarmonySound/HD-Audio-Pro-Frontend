import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu
  const [isTransparent, setIsTransparent] = useState(false);
  const { cartItems } = useCart(); // Get cart items from CartContext

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', (e) => {
      if (isOpen && !e.target.closest('nav') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <header className={isTransparent ? 'transparent' : ''}>
      <h1>HD AUDIO PRO</h1>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li>
            <Link to="/cart" className="cart-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} Cart
            </Link>
          </li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
