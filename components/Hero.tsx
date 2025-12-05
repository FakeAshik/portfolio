import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_TAGLINE, HERO_SUBTEXT, SKILLS } from '../constants';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms for background and text
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Split skills into two rows for the "Left-Right" linear movement
  const row1Skills = SKILLS.slice(0, 2);
  const row2Skills = SKILLS.slice(2, 4);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Aurora Background - Promoted to GPU Layer */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </motion.div>

      {/* Fade to black gradient at the bottom for smooth transition */}
      <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center mt-16">
        
        {/* Row 1: Linear Movement LEFT <-> RIGHT */}
        <div className="absolute top-[10%] w-full flex justify-center pointer-events-none">
          <motion.div 
            className="flex gap-32"
            animate={{ x: ["-15vw", "15vw"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "mirror", 
              ease: "linear" 
            }}
          >
            {row1Skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
              >
                <skill.icon size={20} className="text-white/90" />
                <span className="text-xs font-medium text-white/90 hidden md:inline">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Linear Movement RIGHT <-> LEFT */}
        <div className="absolute bottom-[20%] w-full flex justify-center pointer-events-none">
          <motion.div 
             className="flex gap-48"
             animate={{ x: ["15vw", "-15vw"] }}
             transition={{ 
               duration: 25, 
               repeat: Infinity, 
               repeatType: "mirror", 
               ease: "linear" 
             }}
          >
            {row2Skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
              >
                <skill.icon size={20} className="text-white/90" />
                <span className="text-xs font-medium text-white/90 hidden md:inline">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* Central Avatar/Subject */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="mb-8 relative group cursor-pointer"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-[40px] overflow-hidden border-2 border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative transform transition-transform duration-500 hover:scale-105 will-change-transform">
             <img 
               src="https://picsum.photos/id/64/400/400" 
               alt="Nihad Jim" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <Play className="text-white fill-white" size={32} />
             </div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-black shadow-lg"
          >
            PRO
          </motion.div>
        </motion.div>

        {/* Main Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 drop-shadow-2xl">
            {HERO_TAGLINE}
          </h1>
          <motion.p 
            className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {HERO_SUBTEXT}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
          }}
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