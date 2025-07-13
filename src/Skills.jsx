import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaAws, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiJenkins, SiExpress } from 'react-icons/si';

const skills = [
  {
    name: 'HTML & CSS',
    icon: (
      <span className="flex items-center gap-2">
        <FaHtml5 className="text-orange-500 text-6xl md:text-7xl" />
        <FaCss3Alt className="text-blue-400 text-6xl md:text-7xl" />
      </span>
    ),
    category: 'Frontend'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs className="text-yellow-400" />,
    category: 'Frontend'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript className="text-blue-500" />,
    category: 'Frontend'
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-cyan-400" />,
    category: 'Frontend'
  },
  { 
    name: 'Node.js & Express', 
    icon: <span className="flex items-center gap-2"><FaNodeJs className="text-green-500 text-6xl md:text-7xl" /><SiExpress className="text-gray-200 text-6xl md:text-7xl" /></span>,
    category: 'Backend'
  },
  { 
    name: 'Python & Flask', 
    icon: <span className="flex items-center gap-2"><FaPython className="text-yellow-500 text-6xl md:text-7xl" /><FaDatabase className="text-gray-300 text-6xl md:text-7xl" /></span>,
    category: 'Backend'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb className="text-green-600" />,
    category: 'Database'
  },
  { 
    name: 'MySQL', 
    icon: <SiMysql className="text-blue-400" />,
    category: 'Database'
  },
  { 
    name: 'Git & GitHub', 
    icon: <FaGitAlt className="text-orange-600" />,
    category: 'Tools'
  },
  { 
    name: 'AWS', 
    icon: <FaAws className="text-yellow-400" />,
    category: 'Cloud'
  },
  { 
    name: 'Jenkins', 
    icon: <SiJenkins className="text-red-400" />,
    category: 'Tools'
  },
];

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'Tools'];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 15 
    } 
  },
  whileHover: { 
    scale: 1.1, 
    y: -10,
    transition: { type: "spring", stiffness: 300 }
  },
};

const Skills = () => (
  <section id="skills" className="py-32 px-4 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-20"
    >
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block mx-auto px-8" style={{ display: 'inline-block' }}>
        SKILLS
      </h2>
      <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
        Technologies I work with to bring ideas to life
      </p>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-16"
    >
      {categories.map((category) => (
        <div key={category} className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            {category}
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover="whileHover"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center justify-center gap-4 p-4 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer min-h-[140px] h-44 md:h-52">
                    <div className="flex items-center justify-center w-full max-w-[110px] mx-auto text-7xl md:text-8xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      {skill.icon}
                    </div>
                    <span className="text-xl md:text-2xl text-gray-100 font-semibold tracking-wide text-center drop-shadow-lg">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Skills; 