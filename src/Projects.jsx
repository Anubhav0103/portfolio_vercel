import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import groupChatImg from './assets/group-chat.jpeg';
import expenseTrackerImg from './assets/expense-tracker.jpeg';
import salonBookingImg from './assets/salon-booking.jpeg';

const projects = [
  {
    title: 'Group Chat App',
    image: groupChatImg,
    description: 'A real-time messaging platform with multimedia support, location sharing, and advanced user management. Built with Socket.io for instant communication.',
    technologies: ['Cron Job', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    liveLink: '#',
    githubLink: 'https://github.com/Anubhav0103/group_chat',
  },
  {
    title: 'Expense Tracker',
    image: expenseTrackerImg,
    description: 'Comprehensive financial management app with payment integration, analytics dashboard, and secure cloud deployment. Features Razorpay for seamless transactions.',
    technologies: ['JWT', 'Node.js', 'MySQL', 'Razorpay', 'AWS'],
    liveLink: '#',
    githubLink: 'https://github.com/Anubhav0103/expense_tracker_AWS',
  },
  {
    title: 'Salon Booking',
    image: salonBookingImg,
    description: 'Two-sided marketplace connecting customers with service providers. Features intelligent staff-service mapping and location-based discovery.',
    technologies: ['Leaflet.js', 'Node.js', 'MySQL', 'OpenStreetMap', 'JWT'],
    liveLink: '#',
    githubLink: 'https://github.com/Anubhav0103/salon',
  },
];

const Projects = () => (
  <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-20"
    >
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block mx-auto px-8" style={{ display: 'inline-block' }}>
        PROJECTS
      </h2>
      <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
        Showcasing my passion for building impactful digital solutions
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-12">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          className="group relative"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: idx * 0.2, type: 'spring', stiffness: 100 }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 h-[730px] flex flex-col">
            <div className="relative overflow-hidden">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                whileHover={{ scale: 1.15 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            <div className="p-8 space-y-6 flex-1 flex flex-col">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=anubhav06cd@gmail.com&su=Requesting Live Demo: ${encodeURIComponent(project.title)}&body=I would like to request a live demonstration of ${encodeURIComponent(project.title)}. Please let me know a suitable time.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  Request Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  Code
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects; 