import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-8 py-6 flex justify-between items-center mix-blend-difference">
      <Link to="/" className="text-2xl font-black tracking-tighter massive-text text-white group">
        DEVON <span className="text-neon-pink group-hover:text-white transition-colors">COLEBANK</span>
      </Link>

      <div className="hidden md:flex items-center gap-12">
        {['About', 'Services', 'Portfolio'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <Link
        to="/contact"
        className="btn-industrial"
      >
        Contact
      </Link>
    </nav>
  );
};
