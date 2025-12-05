import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Instagram, Mail, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', sub: '01' },
  { label: 'Work', href: '#work', sub: '02' },
  { label: 'About', href: '#about', sub: '03' },
];

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onToggle }) => {
  
  const scrollToSection = (href: string) => {
    onToggle(); // Close menu
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait for menu close animation
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none"
      >
        {/* Logo - NJ */}
        <div 
          className="pointer-events-auto cursor-pointer group relative z-50"
          onClick={() => { if(isOpen) onToggle(); scrollToSection('#home'); }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2 shadow-lg transition-transform duration-300 group-hover:scale-105 active:scale-95">
            <span className="font-black text-xl tracking-tighter text-white">NJ</span>
          </div>
        </div>

        {/* Menu Button */}
        <div 
          className="pointer-events-auto cursor-pointer group relative z-50"
          onClick={onToggle}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-3 shadow-lg transition-all duration-300 group-hover:bg-white/20 active:scale-95">
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="text-white w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="text-white w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Glass Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.32, 0, 0.24, 1] }} // Smooth easing
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-3xl"
          >
            {/* Background Texture/Noise could go here */}
            
            <div className="w-full max-w-lg px-6">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.1, 
                      duration: 0.5, 
                      ease: "easeOut" 
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="group w-full flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-white/40 border border-white/10 px-2 py-1 rounded-md">
                          {item.sub}
                        </span>
                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300 w-8 h-8" />
                    </button>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex justify-center gap-6"
              >
                 {/* Social Mini Links */}
                 {[Instagram, Mail, Linkedin].map((Icon, i) => (
                   <a 
                     key={i} 
                     href="#" 
                     className="p-4 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-110"
                   >
                     <Icon size={20} />
                   </a>
                 ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;