import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Societe Generale',
    role: 'Software Development Intern',
    period: 'March 2023 - August 2023',
    location: 'Bengaluru',
    details: [
      'Developed and maintained enterprise web applications using React, Node.js, and SQL',
      'Built robust REST APIs and seamlessly integrated them with frontend components',
      'Optimized backend logic and SQL queries, improving application performance',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-32 px-4 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-20"
    >
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block mx-auto px-8" style={{ display: 'inline-block' }}>
        EXPERIENCE
      </h2>
      <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
        My professional journey in software development
      </p>
    </motion.div>

    <div className="space-y-16">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: idx * 0.2, type: 'spring', stiffness: 100 }}
          className="group relative"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-12 hover:border-white/20 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center gap-4 mb-4 lg:mb-0">
                <div className="p-4 rounded-full bg-purple-500/20 border border-purple-400/30">
                  <FaBriefcase className="text-3xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
                    {exp.role}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-right">
                <div className="flex items-center justify-end gap-2 text-gray-300 text-lg">
                  <FaCalendarAlt className="text-purple-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center justify-end gap-2 text-gray-300 text-lg">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white mb-6">Key Achievements:</h4>
              <ul className="space-y-4">
                {exp.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 text-xl text-gray-300 leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience; 