import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative py-32 px-8 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <h2 className="text-6xl massive-text leading-none">
            Devon<br />Colebank
          </h2>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            Visual engineer specializing in industrial brutalism and spatial logic. 
            Building digital structures that command attention.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-pink">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-xl font-medium hover:text-neon-pink transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-pink">Social</h4>
          <ul className="space-y-4">
            {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((item) => (
              <li key={item}>
                <a href="#" className="text-xl font-medium hover:text-neon-pink transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neon-pink">Contact</h4>
          <p className="text-xl font-medium">hello@colebank.design</p>
          <p className="text-white/40 text-sm">Berlin, Germany</p>
          <button className="mt-4 btn-industrial">
            Start a Project
          </button>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          © 2024 Devon Colebank — All Rights Reserved
        </p>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
          <a href="https://www.briggsdavis.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-neon-pink transition-colors">Made by BriggsDavis</a>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute -bottom-20 -right-20 text-[30vw] font-black massive-text text-white/[0.02] pointer-events-none select-none">
        COLEBANK
      </div>
    </footer>
  );
};
