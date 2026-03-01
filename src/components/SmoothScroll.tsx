import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setContentHeight(scrollRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 20,
    stiffness: 80,
    mass: 1,
    restDelta: 0.001
  });

  const transform = useTransform(smoothY, (y) => -y);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={scrollRef}
        style={{ y: transform }}
        className="fixed top-0 left-0 w-full will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};
