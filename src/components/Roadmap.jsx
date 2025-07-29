import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaBrain, 
  FaUsers, 
  FaChartLine,
  FaTelegram,
  FaMobile,
  FaGlobe,
  FaCrown,
  FaGem,
  FaShieldAlt,
  FaNetworkWired,
  FaMicrochip,
  FaSatellite,
  FaCog,
  FaStar
} from 'react-icons/fa';

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  const roadmapData = [
    {
      phase: "Q3 2025",
      title: "Launch & Foundation",
      subtitle: "The Beginning of AI Sisterhood",
      icon: FaRocket,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      items: [
        "Launch AI AIRDROP MODEL Telegram bot (v1)",
        "Early airdrop campaigns begin (manual + semi-AI filtered)",
        "AIAIR token generation & community airdrop",
        "KOL partnerships + first 5,000 user milestone"
      ],
      status: "completed"
    },
    {
      phase: "Q4 2025",
      title: "Smart Discovery",
      subtitle: "AI-Powered Intelligence",
      icon: FaBrain,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      items: [
        "Launch full AI discovery engine (NLP + project scraping)",
        "Token staking + premium filter rollout",
        "In-bot wallet integration",
        "Launch of multi-tier referral program"
      ],
      status: "current"
    },
    {
      phase: "Q1 2026",
      title: "Scaling & Gamification",
      subtitle: "Community Growth & Rewards",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      items: [
        "Quest-based reward system",
        "Leaderboard of top earners/referrers",
        "Cross-chain airdrop support (ETH, BSC, Solana)",
        "Mobile app beta for Android + iOS"
      ],
      status: "upcoming"
    },
    {
      phase: "Q2 2026",
      title: "Ecosystem Expansion",
      subtitle: "Global AI Sisterhood",
      icon: FaGlobe,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      items: [
        "Governance module for $AIAIR holders",
        "Partner dashboard for project submissions",
        "Paid AI signal-as-a-service API for airdrop partners",
        "Global ambassador program expansion"
      ],
      status: "upcoming"
    }
  ];

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

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden" id="roadmap">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg font-quantico"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">Roadmap</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-silver/90 max-w-3xl mx-auto drop-shadow-lg font-quantico"
            variants={itemVariants}
          >
            Our journey to become the #1 AI-powered airdrop discovery engine in crypto
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-orange-500 transform lg:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="relative z-20 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <phase.icon className="text-white text-2xl drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Status Indicator */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'current' ? 'bg-yellow-500 animate-pulse' :
                    'bg-gray-500'
                  } flex items-center justify-center`}>
                    {phase.status === 'completed' && <FaStar className="text-white text-xs" />}
                    {phase.status === 'current' && <FaCrown className="text-white text-xs" />}
                    {phase.status === 'upcoming' && <FaGem className="text-white text-xs" />}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ${phase.bgColor} ${phase.borderColor} border rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-2xl max-w-lg lg:max-w-md`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="space-y-4">
                    {/* Phase Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-silver/80 uppercase tracking-wider">
                          {phase.phase}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          phase.status === 'completed' ? 'bg-green-500' :
                          phase.status === 'current' ? 'bg-yellow-500 animate-pulse' :
                          'bg-gray-500'
                        }`}></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg font-quantico">
                        {phase.title}
                      </h3>
                      <p className="text-silver/80 italic font-quantico">
                        {phase.subtitle}
                      </p>
                    </div>

                    {/* Phase Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-3 text-silver/90 text-sm leading-relaxed font-quantico"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${phase.color}`}></div>
                          <span className="drop-shadow-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Status Badge */}
                    <div className="pt-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        phase.status === 'current' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {phase.status === 'completed' && <FaStar className="text-xs" />}
                        {phase.status === 'current' && <FaCrown className="text-xs" />}
                        {phase.status === 'upcoming' && <FaGem className="text-xs" />}
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'current' ? 'In Progress' :
                         'Upcoming'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 drop-shadow-lg font-quantico   "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="text-xl" />
              Join the Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;