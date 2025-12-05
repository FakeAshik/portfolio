import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background ambient noise/grain could go here */}
      
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Portfolio Grid */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <Portfolio />
      </div>

      {/* Section 3: About Me */}
      <About />

      {/* Spacer for the fixed contact bar */}
      <div className="h-32" />

      {/* Fixed UI Elements */}
      <Contact />

      {/* Global Gradient Overlay for cinematic feel */}
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none z-0" />
    </main>
  );
};

export default App;