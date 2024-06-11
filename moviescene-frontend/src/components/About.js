import React from 'react';
import '../componentcss/About.css'; // Adjust the import path according to your structure

function About() {
  console.log('About component rendered');
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-content">This is the about page.</p>
    </div>
  );
}

export default About;
