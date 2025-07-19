import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (el) {
      const navbar = document.querySelector('nav') || document.querySelector('nav, .fixed.top-0');
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px if not found
      const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y + 60, behavior: 'smooth' });
    }
    setActive(id); // Immediately update active section
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl shadow-2xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo - smaller on mobile */}
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer select-none tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          ANUBHAV
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {sections.map(sec => (
            <motion.button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-base lg:text-xl font-semibold transition-all duration-300 px-3 lg:px-4 py-2 rounded-xl focus:outline-none ${
                active === sec.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {sec.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-purple-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/5 backdrop-blur-xl border-t border-white/10"
      >
        <div className="flex flex-col py-4">
          {sections.map(sec => (
            <motion.button
              key={sec.id}
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => scrollToSection(sec.id), 200);
              }}
              whileTap={{ scale: 0.95 }}
              className={`text-lg font-semibold transition-all duration-300 px-6 py-3 text-left focus:outline-none ${
                active === sec.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {sec.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 