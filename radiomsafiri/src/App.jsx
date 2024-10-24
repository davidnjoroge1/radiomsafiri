import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';
import Sermons from './pages/Sermons';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route with all sections */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <About />
                <Services />
                <Sermons />
                <Team />
                <Contact />
              </>
            } 
          />
          
          {/* Support page route */}
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;