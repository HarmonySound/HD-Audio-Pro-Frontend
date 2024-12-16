import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent! Thank you for contacting us.');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-details">
                    <h3>Contact Details</h3>
                    <p><FontAwesomeIcon icon={faPhone} /> 0720361935</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> info@harmonysounds.co.ke</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> North Airport Road, Behind Even Business Park, Nairobi, Kenya</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
