import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import '../componentcss/Home.css'; // Adjust the import path according to your structure

function Home() {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>Welcome to MovieSceneSpotlight</h1>
      <p className='contact-content'>This is the home page.</p>
    </div>
=======

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to MovieSceneSpotlight</h1>
      <p>This is the home page.</p>
    </motion.div>
>>>>>>> 04d2616a3ad109ac22b15c75d8ee9360346d05b4
  );
}

export default Home;
