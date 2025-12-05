import React, { useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Fixed Navbar with controlled state */}
      <Navbar isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Section 1: Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Section 2: Portfolio Grid */}
      <section id="work" className="relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <Portfolio />
      </section>

      {/* Section 3: About Me */}
      <section id="about">
        <About />
      </section>

      {/* Spacer for the fixed contact bar */}
      <div className="h-32" />

      {/* Fixed UI Elements */}
      {/* Moved animation logic inside Contact for better coordination with menu state */}
      <Contact isMenuOpen={isMenuOpen} />

      {/* Global Gradient Overlay for cinematic feel */}
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none z-0" />
    </main>
  );
};

export default App;