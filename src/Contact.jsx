import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_4s5ztbn';
const TEMPLATE_ID = 'template_vuyq2fm';
const PUBLIC_KEY = 'JdjTf5zW0LCckjY_s';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setResult(null);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (response) => {
          setResult({ success: true, message: 'Message sent successfully!' });
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          setResult({ success: false, message: 'Failed to send message. Please try again.' });
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block mx-auto px-8" style={{ display: 'inline-block' }}>
          CONTACT
        </h2>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
          Let's work together to bring your ideas to life
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 min-h-[600px]">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8 h-full flex flex-col"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 flex-1 flex flex-col justify-between">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get in Touch
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="p-3 rounded-full bg-purple-500/20 border border-purple-400/30">
                  <FaEnvelope className="text-2xl text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <a href="mailto:anubhav06cd@gmail.com" className="text-xl text-white hover:text-purple-400 transition-colors">
                    anubhav06cd@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="p-3 rounded-full bg-blue-500/20 border border-blue-400/30">
                  <FaPhone className="text-2xl text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Phone</p>
                  <a href="tel:+917032534877" className="text-xl text-white hover:text-blue-400 transition-colors">
                    +91 7032534877
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="p-3 rounded-full bg-green-500/20 border border-green-400/30">
                  <FaMapMarkerAlt className="text-2xl text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Location</p>
                  <p className="text-xl text-white">India</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-12">
              <p className="text-lg text-gray-300 mb-6">Connect with me on social platforms:</p>
              <div className="flex gap-6">
                <motion.a
                  href="mailto:anubhav06cd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="text-3xl text-purple-400" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/anubhav-pandey-b9054b229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-3xl text-blue-400" />
                </motion.a>
                <motion.a
                  href="https://github.com/Anubhav0103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/10 border border-white/20 hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-3xl text-gray-400" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-full flex flex-col"
        >
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-12 space-y-8 flex-1 flex flex-col justify-between"
            onSubmit={sendEmail}
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-2xl px-8 py-6 text-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition-all duration-300 border border-white/10"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-2xl px-8 py-6 text-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition-all duration-300 border border-white/10"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={8}
                className="w-full rounded-2xl px-8 py-6 text-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition-all duration-300 border border-white/10 resize-none"
                required
              />
            </div>
            {result && (
              <div className={`text-lg font-semibold text-center ${result.success ? 'text-green-400' : 'text-red-400'}`}>{result.message}</div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-2xl font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/25"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 