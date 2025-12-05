import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Sparkles, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Behind The Edits</h2>
        <p className="text-white/50 text-lg">Passionate about storytelling and motion.</p>
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group w-full max-w-md perspective-1000"
      >
        <GlassCard className="aspect-[4/5] md:aspect-[1.586/1] w-full p-8 flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-neutral-900 to-black border-white/10">
          
          {/* Holographic Shine Effect */}
          <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-40 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transition-opacity duration-500 transform translate-z-20" />

          {/* Avatar Side */}
          <div className="flex-shrink-0 relative">
             <div className="w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-black" />
          </div>

          {/* Info Side */}
          <div className="flex-1 text-center md:text-left space-y-4">
             <div>
               <h3 className="text-2xl font-bold text-white">Md. Nihad Jim</h3>
               <p className="text-blue-400 font-medium">Professional Video Editor</p>
             </div>

             <div className="flex flex-wrap gap-2 justify-center md:justify-start">
               {['Visuals', 'Motion', 'Sound', 'Story'].map(tag => (
                 <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/70">
                   {tag}
                 </span>
               ))}
             </div>

             <p className="text-sm text-white/50 leading-relaxed">
               I help creators and brands stop the scroll. With a focus on retention-based editing, I craft visuals that don't just look good—they perform.
             </p>

             <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
               <span>Read More</span>
               <ArrowRight size={16} />
             </button>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default About;