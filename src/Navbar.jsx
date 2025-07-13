import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(sec => {
        const el = document.getElementById(sec.id);
        return el ? el.offsetTop : 0;
      });
      const scrollY = window.scrollY + 100;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl shadow-2xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <motion.div
          className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer select-none tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          ANUBHAV
        </motion.div>
        <div className="flex gap-8">
          {sections.map(sec => (
            <motion.button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-lg md:text-xl font-semibold transition-all duration-300 px-4 py-2 rounded-xl focus:outline-none ${
                active === sec.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {sec.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 