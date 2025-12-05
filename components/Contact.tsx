import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
      <motion.div
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-black/80 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden"
        initial={{ borderRadius: 32, width: "auto" }}
        animate={{ 
          width: isHovered ? 380 : 200,
          borderRadius: 32
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
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