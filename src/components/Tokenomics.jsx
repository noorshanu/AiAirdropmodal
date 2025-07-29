import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCoins, 
  FaUsers, 
  FaChartPie, 
  FaRocket,
  FaGift,
  FaShieldAlt,
  FaCrown,
  FaGem,
  FaStar,
  FaFire,
  FaNetworkWired,
  FaMicrochip,
  FaCog,
  FaSatellite
} from 'react-icons/fa';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      category: "Community Airdrop",
      percentage: 12,
      allocation: "12%",
      description: "Distributed to early users, KOLs, and campaign participants",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      icon: FaGift
    },
    {
      category: "Ecosystem & Rewards",
      percentage: 25,
      allocation: "25%",
      description: "Spin-to-earn, referral, and staking rewards",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      icon: FaCoins
    },
    {
      category: "Staking Pool",
      percentage: 15,
      allocation: "15%",
      description: "Incentives for long-term holders",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      icon: FaCrown
    },
    {
      category: "Liquidity",
      percentage: 15,
      allocation: "15%",
      description: "CEX/DEX liquidity provision and market making",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      icon: FaChartPie
    },
    {
      category: "Team",
      percentage: 15,
      allocation: "15%",
      description: "Vested over 18 months. Transparent unlocks",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
      icon: FaUsers
    },
    {
      category: "Marketing & KOLs",
      percentage: 10,
      allocation: "10%",
      description: "Partnered promos, influencers, AMAs",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30",
      icon: FaRocket
    },
    {
      category: "Treasury",
      percentage: 8,
      allocation: "8%",
      description: "Future hires, development, unforeseen ops",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/20",
      borderColor: "border-teal-500/30",
      icon: FaShieldAlt
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  const topSlideVariants = {
    hidden: { y: -100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const bottomSlideVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rotateSlideVariants = {
    hidden: { rotate: -180, opacity: 0, scale: 0.5 },
    visible: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
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

  return (
    <section className="relative py-20  overflow-hidden" id="tokenomics">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-10 left-10 text-purple-400/20 text-3xl"
        variants={floatingVariants}
        animate="animate"
      >
        <FaMicrochip />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-blue-400/20 text-2xl"
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
        className="absolute top-1/2 left-1/4 text-green-400/20 text-xl"
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            variants={topSlideVariants}
          >
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">Tokenomics</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-silver/90 max-w-3xl mx-auto drop-shadow-lg"
            variants={bottomSlideVariants}
          >
            $AIAIR Token Distribution - Building the Future of AI-Powered Airdrops
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Token Info & Image */}
          <motion.div 
            variants={leftSlideVariants}
            className="space-y-6"
          >
            {/* Hero Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/hero.png" 
                alt="AI Airdrop Platform" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Elements on Image */}
              <motion.div
                className="absolute top-4 right-4 text-white/80 text-xl"
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
                className="absolute bottom-4 left-4 text-white/80 text-lg"
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

            {/* Total Supply Info */}
            <motion.div
              className="glass p-6 rounded-2xl border border-silver/20 bg-black/40 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-white drop-shadow-lg">100,000,000</div>
                <div className="text-silver/80">Total Supply</div>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="text-green-400">● Circulating</div>
                  <div className="text-blue-400">● Locked</div>
                  <div className="text-purple-400">● Vested</div>
                </div>
              </div>
            </motion.div>

            {/* Vesting Info */}
            <motion.div
              className="glass p-6 rounded-2xl border border-silver/20 bg-black/40 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">Vesting Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-silver/80">Team & Advisors</span>
                  <span className="text-white font-semibold">18-month linear vesting</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver/80">Community Airdrop</span>
                  <span className="text-white font-semibold">Immediate unlock</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver/80">Ecosystem Rewards</span>
                  <span className="text-white font-semibold">Monthly distribution</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center - Distribution Cards */}
          <motion.div 
            variants={topSlideVariants}
            className="space-y-4"
          >
            {tokenomicsData.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                className={`${item.bgColor} ${item.borderColor} border rounded-xl p-4 backdrop-blur-sm cursor-pointer`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-white drop-shadow-lg">{item.category}</div>
                    <div className="text-2xl font-bold text-silver drop-shadow-lg">{item.allocation}</div>
                  </div>
                </div>
                <p className="text-silver/80 text-sm leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - More Distribution Cards */}
          <motion.div 
            variants={rightSlideVariants}
            className="space-y-4"
          >
            {tokenomicsData.slice(4, 7).map((item, index) => (
              <motion.div
                key={index + 4}
                className={`${item.bgColor} ${item.borderColor} border rounded-xl p-4 backdrop-blur-sm cursor-pointer`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-white drop-shadow-lg">{item.category}</div>
                    <div className="text-2xl font-bold text-silver drop-shadow-lg">{item.allocation}</div>
                  </div>
                </div>
                <p className="text-silver/80 text-sm leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              className="glass p-6 rounded-2xl border border-silver/20 bg-black/40 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">Token Utility</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-silver/80">Premium airdrop access</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCrown className="text-purple-400" />
                  <span className="text-silver/80">Governance voting rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCoins className="text-green-400" />
                  <span className="text-silver/80">Staking rewards</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGift className="text-blue-400" />
                  <span className="text-silver/80">Referral bonuses</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCoins className="text-xl" />
            Get $AIAIR Tokens
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;