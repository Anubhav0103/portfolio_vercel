import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="relative bg-white/5 backdrop-blur-xl border-t border-white/10 mt-32">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1.5 }}
      className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full"
    />
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left mb-8 lg:mb-0"
      >
        <div className="text-2xl md:text-3xl font-bold text-white mb-2">
          Anubhav Pandey
        </div>
        <div className="text-lg text-gray-300 flex flex-col md:flex-row md:items-center gap-2">
          <span>© {new Date().getFullYear()} Anubhav Pandey</span>
          <span className="hidden md:inline">•</span>
          <span>Built with React</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex gap-8 text-3xl md:text-4xl"
      >
        <motion.a
          href="mailto:anubhav06cd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="text-purple-400" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/anubhav-pandey-b9054b229"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin className="text-blue-400" />
        </motion.a>
        <motion.a
          href="https://github.com/Anubhav0103"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-gray-400" />
        </motion.a>
      </motion.div>
    </div>
  </footer>
);

export default Footer; 