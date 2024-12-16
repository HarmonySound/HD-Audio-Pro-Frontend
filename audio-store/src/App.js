// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Receipt from './pages/Receipt';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Activation from './pages/Activation';
import { CartProvider } from './context/CartContext';
import Products from './pages/Products'; // Make sure this is imported

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/receipt" component={Receipt} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/activation" element={<Activation />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
