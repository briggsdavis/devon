import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { DeBlurText } from '../components/DeBlurText';
import { TextReveal } from '../components/TextReveal';
import { cn } from '../lib/utils';

const categories = ['ALL', 'VIDEO', 'PHOTO', 'GRAPHIC'];

const generateProjects = () => {
  const baseProjects = [
    { title: 'Steel Structure', category: 'PHOTO', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Iron Pulse', category: 'VIDEO', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Concrete Logic', category: 'GRAPHIC', img: 'https://images.unsplash.com/photo-1518005020250-675f0f0fd13b?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Glass Void', category: 'PHOTO', img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Mechanical Soul', category: 'VIDEO', img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Brutalist Type', category: 'GRAPHIC', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000' },
  ];

  const extended = [];
  for (let i = 0; i < 30; i++) {
    const base = baseProjects[i % baseProjects.length];
    extended.push({
      ...base,
      id: i + 1,
      title: `${base.title} ${Math.floor(i / baseProjects.length) + 1}`,
      img: `${base.img}&sig=${i}`,
      description: "A deep dive into industrial brutalism, exploring the relationship between raw materials and digital precision. This project focuses on the structural honesty of the subject matter."
    });
  }
  return extended;
};

const projects = generateProjects();

export const Portfolio = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <div className="pt-40 px-8 pb-32 min-h-screen">
      <div className="text-center mb-24 mix-blend-difference">
        <DeBlurText className="text-[12vw] leading-none">Portfolio</DeBlurText>
      </div>

      <div className="flex justify-center gap-4 mb-24 border-b border-white/10 pb-8 mix-blend-difference">
        {categories.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "btn-industrial",
              filter === f && "btn-industrial-active"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.img
                layoutId={`img-${project.id}`}
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[10px] uppercase tracking-widest text-neon-pink font-bold">{project.category}</span>
                <h3 className="text-3xl massive-text mt-4">{project.title}</h3>
                <div className="mt-6 w-12 h-[1px] bg-white/40" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail View Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[5000] bg-black flex items-center justify-center p-4 md:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 text-white/40 hover:text-white transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold">Close [ESC]</span>
              </button>

              <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="w-full aspect-[4/5] max-h-[80vh] overflow-hidden bg-white/5 relative">
                    <motion.img
                      layoutId={`img-${selectedProject.id}`}
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 pr-8">
                  <div>
                    <motion.span 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-neon-pink text-xs uppercase tracking-[0.3em] font-bold"
                    >
                      {selectedProject.category}
                    </motion.span>
                    <TextReveal 
                      text={selectedProject.title} 
                      className="text-6xl md:text-8xl massive-text mt-4 leading-none text-white" 
                    />
                  </div>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/60 text-lg leading-relaxed max-w-xl"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pt-12 flex gap-8 items-center"
                  >
                    <button 
                      onClick={handleNext}
                      className="btn-industrial"
                    >
                      Next Project
                    </button>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
                    >
                      Back to Grid
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
