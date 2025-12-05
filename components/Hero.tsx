import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_TAGLINE, HERO_SUBTEXT, SKILLS } from '../constants';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const yCards = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const rotateCards = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Aurora Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </motion.div>

      {/* Fade to black gradient at the bottom for smooth transition */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center">
        
        {/* Floating Abstract Elements (Simulating 3D depth) */}
        <div className="absolute inset-0 pointer-events-none">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              style={{ y: yCards, rotate: rotateCards }}
              className={`absolute p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2
                ${index === 0 ? 'top-[15%] left-[10%]' : ''}
                ${index === 1 ? 'top-[20%] right-[15%]' : ''}
                ${index === 2 ? 'bottom-[25%] left-[15%]' : ''}
                ${index === 3 ? 'bottom-[15%] right-[20%]' : ''}
              `}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.6, scale: 1, y: [0, -20, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: index * 0.5,
                ease: "easeInOut" 
              }}
            >
              <skill.icon size={20} className="text-white/80" />
              <span className="text-xs font-medium text-white/80 hidden md:inline">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Central Avatar/Subject */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8 relative group cursor-pointer"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-[40px] overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative">
             <img 
               src="https://picsum.photos/id/64/400/400" 
               alt="Nihad Jim" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <Play className="text-white fill-white" size={32} />
             </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border border-black">
            PRO
          </div>
        </motion.div>

        {/* Main Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 drop-shadow-2xl">
            {HERO_TAGLINE}
          </h1>
          <p className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            {HERO_SUBTEXT}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: opacityText }}
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;