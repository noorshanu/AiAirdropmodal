/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaRocket, 
  FaGift, 
  FaTelegram, 
  FaDiscord, 
  FaTwitter,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaSearch,
  FaCog,
  FaNetworkWired,
  FaMicrochip,
  FaSatellite
} from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,192,192,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(192,192,192,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(192,192,192,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-l from-blue-500/30 to-transparent rounded-full blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/3 left-1/4 text-purple-400/40 text-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCog />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 text-blue-400/40 text-xl"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaMicrochip />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-silver/30 text-3xl"
        animate={{
          x: [-30, 30, -30],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaNetworkWired />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 text-purple-400/30 text-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaSatellite />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg font-quantico"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent drop-shadow-2xl">AI AIRDROP</span>
              <br />
              <span className="text-white drop-shadow-2xl">MODEL</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-silver mb-8 font-light drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your AI Sister for Early Airdrop Rewards
            </motion.p>
          </motion.div>

          {/* Enhanced AI Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div 
              className="glass p-6 rounded-2xl border border-silver/30 bg-black/40 backdrop-blur-sm shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl text-purple-400 mb-4 flex justify-center drop-shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <FaBrain />
              </motion.div>
              <h3 className="text-xl  text-white mb-2 drop-shadow-lg font-quantico font-bold">AI-Powered Discovery</h3>
              <p className="text-silver/90 drop-shadow-lg">24/7 scanning for high-quality airdrops with neural network filtering</p>
            </motion.div>

            <motion.div 
              className="glass p-6 rounded-2xl border border-silver/30 bg-black/40 backdrop-blur-sm shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl text-blue-400 mb-4 flex justify-center drop-shadow-lg"
                variants={pulseVariants}
                animate="animate"
              >
                <FaShieldAlt />
              </motion.div>
              <h3 className="text-xl  text-white mb-2 drop-shadow-lg font-quantico font-bold">Scam Protection</h3>
              <p className="text-silver/90 drop-shadow-lg">Advanced fraud detection systems built by ex-Tencent AI experts</p>
            </motion.div>

            <motion.div 
              className="glass p-6 rounded-2xl border border-silver/30 bg-black/40 backdrop-blur-sm shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-4xl text-green-400 mb-4 flex justify-center drop-shadow-lg"
                variants={floatingVariants}
                animate="animate"
              >
                <FaChartLine />
              </motion.div>
              <h3 className="text-xl  text-white mb-2 drop-shadow-lg font-quantico font-bold">Premium Rewards</h3>
              <p className="text-silver/90 drop-shadow-lg">Tiered rewards system with exclusive access to verified airdrops</p>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="font-quantico bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="text-xl" />
              Join AI Sisterhood
            </motion.button>
            
            <motion.button
              className="border-2 font-quantico border-silver text-silver px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-silver hover:text-white transition-all duration-300 drop-shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch className="text-xl" />
              Explore Airdrops
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6 mb-8"
          >
            <motion.a
              href="#"
              className="text-silver hover:text-purple-400 transition-colors duration-300 drop-shadow-lg font-quantico"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram className="text-3xl" />
            </motion.a>
            <motion.a
              href="#"
              className="text-silver hover:text-blue-400 transition-colors duration-300 drop-shadow-lg font-quantico"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDiscord className="text-3xl" />
            </motion.a>
            <motion.a
              href="#"
              className="text-silver hover:text-blue-500 transition-colors duration-300 drop-shadow-lg font-quantico"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-3xl" />
            </motion.a>
          </motion.div>

          {/* Enhanced Stats */}
      
        </motion.div>
      </div>

      {/* Enhanced Floating AI Elements */}
      <motion.div
        className="absolute top-1/4 right-10 text-purple-400/40 text-6xl drop-shadow-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaRobot />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-10 text-blue-400/30 text-4xl drop-shadow-lg"
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaGift />
      </motion.div>
    </section>
  );
};

export default Hero;