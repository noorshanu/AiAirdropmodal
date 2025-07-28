import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTelegram, 
  FaTwitter, 
  FaDiscord, 
  FaGithub,
  FaRocket,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'Telegram', href: '#', icon: FaTelegram, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: FaTwitter, color: 'hover:text-sky-400' },
    { name: 'Discord', href: '#', icon: FaDiscord, color: 'hover:text-purple-400' },
    { name: 'GitHub', href: '#', icon: FaGithub, color: 'hover:text-gray-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 border-t border-silver/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Brand */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-silver to-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <FaRocket className="text-black text-sm" />
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-silver to-gray-300 bg-clip-text text-transparent">
                AI AIRDROP
              </h3>
              <p className="text-xs text-silver/60">$AIAIR</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-silver/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-silver/60 ${social.color} transition-all duration-200 p-2 rounded-lg hover:bg-silver/10`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-6 mt-6 border-t border-silver/10 space-y-2 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-silver/60 text-sm">
            © 2025 AI AIRDROP MODEL. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-silver/60 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>by AI Sisterhood</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;