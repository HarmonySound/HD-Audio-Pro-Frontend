import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
        >
          <div>
            <img src="/assets/images/amp3.png" alt="Hero 1" />
          </div>
          <div>
            <img src="/assets/images/mic1.jpg" alt="Hero 2" />
          </div>
          <div>
            <img src="/assets/images/amp4.png" alt="Hero 3" />
          </div>
        </Carousel>
        <div className="hero-content">
          <h1>Welcome to <span>hd audio pro</span> Store</h1>
          <p>Your one-stop shop for all audio equipment and accessories.</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <div className="category">
          <img src="/assets/images/speaker1.jpg" alt="Speakers" />
          <h2>Speakers</h2>
          <p>High-quality speakers for your audio needs.</p>
        </div>
        <div className="category">
          <img src="/assets/images/amp2.jpg" alt="Amplifiers" />
          <h2>Amplifiers</h2>
          <p>Powerful amplifiers to boost your sound.</p>
        </div>
        <div className="category">
          <img src="/assets/images/mic1.jpg" alt="Microphones" />
          <h2>Microphones</h2>
          <p>Professional microphones for clear audio.</p>
        </div>
        {/* View More Button */}
        <div className="view-more">
          <Link to="/products">
            <button className="view-more-button">View More</button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          interval={4000}  // Set interval for carousel transition
        >
          <div className='testimonial-card'>
            <p>"This store offers the best audio equipment I've ever used! The speakers are incredible, and my sound system has never been better!"</p>
            <p>- John Doe</p>
          </div>
          <div className='testimonial-card'>
            <p>"I can't believe the quality of the amplifiers I purchased. Definitely worth every penny! Highly recommend."</p>
            <p>- Jane Smith</p>
          </div>
          <div className='testimonial-card'>
            <p>"The microphones here are top-notch. Perfect for my recording studio. The sound clarity is amazing."</p>
            <p>- Mike Johnson</p>
          </div>
        </Carousel>
      </div>

      
    </div>
  );
}

export default Home;
