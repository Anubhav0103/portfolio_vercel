import { motion } from 'framer-motion';
import profileImg from './assets/profile.png';

const About = () => (
  <section id="about" className="py-32 px-4 flex justify-center items-center bg-transparent">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-6xl w-full bg-white/5 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center p-16 gap-16"
    >
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>
        <img
          src={profileImg}
          alt="Anubhav Pandey"
          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-purple-500/50 shadow-2xl object-cover"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 space-y-8"
      >
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            ABOUT
          </span>
        </h2>
        
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
            I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with a unique blend of engineering background and modern web development expertise.
          </p>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-2 mb-2">
            Open to new opportunities and collaborations!
          </p>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            With 6 months of professional experience at <span className="text-blue-400 font-semibold">Societe Generale</span>, I've developed a deep understanding of building scalable web applications using the MERN stack.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            My journey from Electrical Engineering to software development has given me a unique perspective on problem-solving and system design. I love creating seamless user experiences and robust backend systems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-6 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 font-medium">
              MERN Stack
            </span>
            <span className="px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium">
              AWS Cloud
            </span>
            <span className="px-6 py-3 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 font-medium">
              Full Stack
            </span>
            <span className="px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 font-medium">
              Problem Solver
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default About; 