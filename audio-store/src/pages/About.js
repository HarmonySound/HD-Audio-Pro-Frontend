import React from 'react';
import '../styles/About.css'; // Create this file for styling

function About() {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                Welcome to our store! We are dedicated to providing the best audio equipment and accessories to our customers. Our team is passionate about music and sound, and we strive to ensure that our products meet the highest standards of quality and performance.
            </p>
            <p>
                Thank you for choosing us as your go-to destination for all your audio needs!
            </p>

            <h2>Our Location</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.30745480262!2d36.85508235!3d-1.3196146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171f9f8e1fbf%3A0x8a7e0db0d8e8eb3a!2sNorth%20Airport%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637693837835!5m2!1sen!2ske"
                    width="800"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>
        </div>
    );
}

export default About;
