import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  isMenuOpen?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isMenuOpen = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Trigger entrance animation after a delay (simulating cinematic intro)
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Determine if the element should be hidden (during initial load or when menu is open)
  const isHidden = !hasLoaded || isMenuOpen;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-black/80 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden pointer-events-auto"
        initial={{ 
          borderRadius: 32, 
          width: 200, 
          y: 200, // Start off-screen
          opacity: 0 
        }}
        animate={{ 
          width: isHovered ? 380 : 200,
          borderRadius: 32,
          y: isHidden ? 200 : 0,
          opacity: isHidden ? 0 : 1
        }}
        transition={{ 
          // Dynamic transition: Slow and cinematic for entrance, Snappy and fluid for interactions
          type: "spring",
          stiffness: hasLoaded ? 280 : 80, // Slower entrance, faster toggle
          damping: hasLoaded ? 30 : 20,
          mass: 1
        }}
      >
        <div className="h-16 flex items-center justify-between px-2 relative">
           
           {/* Default State: Call to Action */}
           <motion.div 
             className="absolute inset-0 flex items-center justify-center gap-2 cursor-pointer"
             animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 20 : 0 }}
           >
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="font-semibold text-white">Let's Create</span>
           </motion.div>

           {/* Expanded State: Social Links */}
           <motion.div 
              className="w-full flex items-center justify-around px-4"
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
           >
             <a href="mailto:nihadjim@hotmail.com" className="p-3 rounded-full hover:bg-white/20 text-white transition-colors">
               <Mail size={20} />
             </a>
             <a href="#" className="p-3 rounded-full hover:bg-white/20 text-white transition-colors">
               <Instagram size={20} />
             </a>
             <a href="#" className="p-3 rounded-full hover:bg-white/20 text-white transition-colors">
               <Linkedin size={20} />
             </a>
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors">
               Hire Me <Send size={14} />
             </button>
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;