// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Sermons from './pages/Sermons';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Sermons />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
