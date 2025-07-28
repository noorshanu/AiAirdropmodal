import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaTelegram, 
  FaDiscord, 
  FaTwitter,
  FaGift,
  FaCrown,
  FaStar,
  FaFire,
  FaGem,
  FaUsers,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';

const CTA = () => {
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

  const leftSlideVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightSlideVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
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
    <section className="relative py-20 bg-gradient-to-br my-4 from-gray-900 via-black to-gray-800 overflow-hidden container mx-auto rounded-xl border-2 border-[#222222]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-10 left-10 text-purple-400/30 text-4xl"
        variants={floatingVariants}
        animate="animate"
      >
        <FaRocket />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-blue-400/30 text-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCrown />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-green-400/30 text-2xl"
        variants={pulseVariants}
        animate="animate"
      >
        <FaStar />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Content */}
          <motion.div 
            variants={leftSlideVariants}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Join the
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl"> AI Revolution?</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl lg:text-2xl text-silver/90 leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Don't miss out on the future of airdrops. Join thousands of users already earning with AI-powered discovery.
              </motion.p>
            </div>

            {/* Features Grid */}
       

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="text-xl" />
                Join AI Sisterhood
              </motion.button>
              
              <motion.button
                className="border-2 border-silver text-silver px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-silver hover:text-black transition-all duration-300 drop-shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram className="text-xl" />
                Join Telegram
              </motion.button>
            </motion.div>

            {/* Social Links */}
      
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={rightSlideVariants}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/aisol.png" 
                alt="AI Airdrop Platform" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Elements on Image */}
              <motion.div
                className="absolute top-6 right-6 text-white/90 text-2xl"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaStar />
              </motion.div>
              
              <motion.div
                className="absolute bottom-6 left-6 text-white/90 text-xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaGem />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 text-3xl"
                variants={pulseVariants}
                animate="animate"
              >
                <FaFire />
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

   
      </div>
    </section>
  );
};

export default CTA;