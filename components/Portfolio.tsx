import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { GlassCard } from './ui/GlassCard';
import { X, PlayCircle, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 px-4 min-h-screen relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* iOS Style Segmented Control */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-xl p-1 rounded-full inline-flex border border-white/10">
            {Object.values(ProjectCategory).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 z-10
                  ${activeFilter === category ? 'text-black' : 'text-white/70 hover:text-white'}
                `}
              >
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer group ${project.category === ProjectCategory.REELS || project.category === ProjectCategory.SHORTS ? 'row-span-2' : 'row-span-1'}`}
              >
                <GlassCard 
                  className="h-full w-full overflow-hidden hover:scale-[1.02] transition-transform duration-300" 
                  hoverEffect
                >
                  <div className="relative w-full h-full aspect-video group-hover:opacity-90 transition-opacity">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/60 text-sm line-clamp-1">{project.description}</p>
                      </div>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                        <PlayCircle className="text-white w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Modal (App Open Animation) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-3xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={selectedProject.id}
              className="w-full max-w-5xl bg-[#111] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div className={`relative ${selectedProject.category === ProjectCategory.REELS || selectedProject.category === ProjectCategory.SHORTS ? 'md:w-1/3 w-full bg-black flex items-center justify-center' : 'md:w-2/3 w-full'}`}>
                 <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <PlayCircle className="w-20 h-20 text-white/50" />
                 </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-neutral-900/50">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-3 border border-blue-500/30">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-white/50 text-lg">
                      Client: {selectedProject.client}
                    </p>
                  </div>

                  <div className="h-px bg-white/10 w-full" />

                  <p className="text-white/80 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex items-center gap-4">
                     <div className="p-3 bg-green-500/20 rounded-full text-green-400">
                       <Clock size={24} />
                     </div>
                     <div>
                       <p className="text-sm text-white/50">Engagement Stats</p>
                       <p className="text-xl font-bold text-white">{selectedProject.stats || 'High Retention'}</p>
                     </div>
                  </div>

                  <button className="w-full py-4 bg-white text-black font-bold rounded-2xl text-lg hover:bg-neutral-200 transition-colors">
                    Watch Full Video
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;