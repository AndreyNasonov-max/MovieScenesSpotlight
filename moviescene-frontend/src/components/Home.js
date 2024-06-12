import React from 'react';
import '../componentcss/Home.css';
import ProfileWidget from './TikTokSimiliarWebpage'; // Adjust the path if needed

function Home() {
  return (
    <>
     <div className="home-container">
      <header className="home-header">
        <h1>Welcome to MovieSceneSpotlight</h1>
        <p className="break-words">Your ultimate source for movie scenes and highlights.</p>
      </header>
      <section className="home-content">
        <h2>Featured Scenes</h2>
        <p>Explore our curated selection of iconic movie scenes.</p>
        <div className="home-scenes">
          <img src="/path-to-your-image1.jpg" alt="Scene 1" className="scene-image" />
          <img src="/path-to-your-image2.jpg" alt="Scene 2" className="scene-image" />
          <img src="/path-to-your-image3.jpg" alt="Scene 3" className="scene-image" />
        </div>
      </section>

      <ProfileWidget />
      <footer className="home-footer">
        <p>© 2024 MovieSceneSpotlight. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default Home;
