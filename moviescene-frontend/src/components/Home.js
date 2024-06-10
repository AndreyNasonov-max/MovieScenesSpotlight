import React from 'react';
import { motion } from 'framer-motion';

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
  );
}

export default Home;
