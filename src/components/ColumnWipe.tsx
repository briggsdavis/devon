import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

const COLUMNS = 6;

export const ColumnWipe = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const columnVariants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999] flex">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-white origin-top"
            style={{ width: `${100 / COLUMNS}%` }}
            initial="initial"
            animate={isTransitioning ? "animate" : "initial"}
            variants={{
              initial: { scaleY: 0, originY: 0 },
              animate: { 
                scaleY: 1, 
                originY: 0,
                transition: {
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }
              },
              exit: { 
                scaleY: 0, 
                originY: 1,
                transition: {
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          />
        ))}
      </div>
      
      {/* Second pass for the outward wipe effect when content changes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Outward wipe overlay */}
      {!isTransitioning && (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex">
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <motion.div
              key={i}
              className="h-full bg-white origin-bottom"
              style={{ width: `${100 / COLUMNS}%` }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
