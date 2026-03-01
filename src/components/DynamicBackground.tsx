import { motion, useScroll, useTransform } from 'motion/react';

export const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Background transition: quick from black to light gray, then slow to white
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['#0a0a0a', '#e5e5e5', '#ffffff']
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="fixed inset-0 -z-20 transition-colors duration-300"
    />
  );
};
