import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Sparkles, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]); // Reduced rotation for better readability
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 px-4 relative z-20 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Behind The Edits</h2>
        <p className="text-white/50 text-lg">Passionate about storytelling and motion.</p>
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group w-full max-w-4xl perspective-1000" 
      >
        <GlassCard className="w-full p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center bg-gradient-to-br from-neutral-900 to-black border-white/10 relative">
          
          {/* Holographic Shine Effect */}
          <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-40 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transition-opacity duration-500 transform translate-z-20" />

          {/* Active Status Indicator - Moved to Top Right Corner */}
          <div className="absolute top-8 right-8 md:top-10 md:right-10 flex items-center gap-2 z-10">
             <span className="relative flex h-4 w-4">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></span>
             </span>
          </div>

          {/* Avatar Side */}
          <div className="flex-shrink-0 relative">
             <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/id/64/400/400" alt="Profile" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Info Side */}
          <div className="flex-1 text-center md:text-left space-y-6">
             <div>
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Md. Nihad Jim</h3>
               <p className="text-blue-400 font-medium text-lg">Professional Video Editor</p>
             </div>

             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
               {['Visuals', 'Motion', 'Sound', 'Story'].map(tag => (
                 <span key={tag} className="text-sm bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-white/70">
                   {tag}
                 </span>
               ))}
             </div>

             <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
               I help creators and brands stop the scroll. With a focus on retention-based editing, I craft visuals that don't just look good—they perform.
             </p>

             <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all mx-auto md:mx-0">
               <span>Read More</span>
               <ArrowRight size={18} />
             </button>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default About;