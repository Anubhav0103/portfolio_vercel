import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImg from './assets/profile.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  const texts = [
    'Full Stack Developer',
    'MERN Stack',
    'AWS',
    'Open to Opportunities'
  ];

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [currentText, currentIndex, isDeleting, texts]);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 -mt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
    <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
    <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full pt-36">
      <motion.h1
          className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-none mb-0 px-8 inline-block mx-auto select-none"
          initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ display: 'inline-block' }}
      >
          ANUBHAV
      </motion.h1>
        <motion.h2
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mt-0 mb-12 px-8 inline-block mx-auto select-none"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          style={{ display: 'inline-block' }}
        >
          PANDEY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-16"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences with <span className="text-purple-400 font-semibold">modern web technologies</span>
          </p>
          <div className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto h-8 flex items-center justify-center">
            <span className="mr-2">•</span>
            <span className="text-purple-400 font-semibold">{currentText}</span>
            <motion.span
              className="ml-1 w-0.5 h-6 bg-purple-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <span className="ml-2">•</span>
          </div>
        </motion.div>

        {/* Profile image and social links */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-8 text-4xl md:text-5xl">
            <motion.a
              href="mailto:anubhav06cd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-purple-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/anubhav-pandey-b9054b229"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-blue-400" />
            </motion.a>
            <motion.a
              href="https://github.com/Anubhav0103"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-gray-400" />
            </motion.a>
          </div>
          <div className="flex flex-row gap-6 mt-2">
            <a
              href="https://linkedin.com/in/anubhav-pandey-b9054b229"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-2xl font-bold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
            >
              Hire Me
            </a>
            <a
              href="./src/assets/anubhav_pandey_resume.pdf"
              download
              className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold shadow-lg hover:from-purple-500 hover:to-pink-500 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - shows/hides based on scroll position */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? 0 : 20
        }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <FaArrowDown className="text-xl" />
        </motion.div>
    </motion.div>
  </section>
);
};

export default Hero; 