import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
// import SongsSection from './components/SongsSection/SongsSection';
// import NewAlbumsSection from './components/NewAlbumsSection/NewAlbumsSection';
// import FAQ from './components/Faq/FAQ';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HeroSection />
      {/* <NewAlbumsSection />
      <SongsSection />
      <FAQ/> */}
    </div>
  );
}

export default App;
