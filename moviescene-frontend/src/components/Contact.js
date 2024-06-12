import React from 'react';
import '../componentcss/Contact.css'; // Adjust the import path according to your structure

function Contact() {
  console.log('Contact component rendered');
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-content">This is the contact page.</p>
    </div>
  );
}

export default Contact;
