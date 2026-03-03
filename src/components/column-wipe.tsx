import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"

const COLUMNS = 6

export const ColumnWipe = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 1500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[9999] flex">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full origin-top bg-white"
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
                  ease: [0.22, 1, 0.36, 1],
                },
              },
              exit: {
                scaleY: 0,
                originY: 1,
                transition: {
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
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
        <div className="pointer-events-none fixed inset-0 z-[9999] flex">
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <motion.div
              key={i}
              className="h-full origin-bottom bg-white"
              style={{ width: `${100 / COLUMNS}%` }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}
