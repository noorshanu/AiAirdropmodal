import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRocket, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine,
  FaMicrochip,
  FaNetworkWired,
  FaCog,
  FaStar,
  FaGem
} from 'react-icons/fa';

const Aboutus = () => {
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

  const features = [
    {
      icon: FaBrain,
      title: "AI-Powered Discovery",
      description: "Advanced neural networks scan the entire crypto landscape 24/7 to find the most promising airdrops before anyone else.",
      color: "text-purple-400"
    },
    {
      icon: FaShieldAlt,
      title: "Scam Protection",
      description: "Built-in fraud detection systems by ex-Tencent AI experts ensure you only get legitimate, high-quality airdrops.",
      color: "text-blue-400"
    },
    {
      icon: FaChartLine,
      title: "Premium Rewards",
      description: "Tiered reward system with exclusive access to verified airdrops and early bird bonuses.",
      color: "text-green-400"
    },
    {
      icon: FaUsers,
      title: "AI Sisterhood",
      description: "Join our global community of airdrop hunters and share alpha with fellow crypto enthusiasts.",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-20 left-10 text-purple-400/20 text-4xl"
        variants={floatingVariants}
        animate="animate"
      >
        <FaMicrochip />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-blue-400/20 text-3xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaCog />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-green-400/20 text-2xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaNetworkWired />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image Side */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/sol.png" 
                alt="AI Airdrop Platform" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Elements on Image */}
              <motion.div
                className="absolute top-4 right-4 text-white/80 text-2xl"
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
                className="absolute bottom-4 left-4 text-white/80 text-xl"
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
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg font-quantico"
                variants={itemVariants}
              >
                Your AI Sister for
                <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent drop-shadow-2xl"> Early Airdrops</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-silver/90 leading-relaxed drop-shadow-lg font-quantico"
                variants={itemVariants}
              >
                We're not just another airdrop platform. We're your AI-powered companion that works 24/7 to discover, 
                verify, and deliver the most promising airdrops before anyone else knows about them.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl border border-silver/20 bg-black/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`text-3xl mb-4 ${feature.color} drop-shadow-lg`}
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <feature.icon />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-lg font-quantico">
                    {feature.title}
                  </h3>
                  <p className="text-silver/80 text-sm leading-relaxed drop-shadow-lg font-quantico">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            {/* <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-purple-400 mb-1 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  24/7
                </motion.div>
                <p className="text-silver/70 text-sm drop-shadow-lg font-quantico">AI Scanning</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-blue-400 mb-1 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  1000+
                </motion.div>
                <p className="text-silver/70 text-sm drop-shadow-lg font-quantico">Airdrops Found</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-green-400 mb-1 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  99%
                </motion.div>
                <p className="text-silver/70 text-sm drop-shadow-lg font-quantico">Scam Filtered</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-silver mb-1 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  $AIAIR
                </motion.div>
                <p className="text-silver/70 text-sm drop-shadow-lg font-quantico">Token Rewards</p>
              </div>
            </motion.div> */}

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 drop-shadow-lg font-quantico "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="text-xl" />
                Join the AI Sisterhood
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;