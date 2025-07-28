import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaCoins, 
  FaRocket, 
  FaShieldAlt,
  FaChartLine,
  FaGift,
  FaFire,
  FaCrown,
  FaStar,
  FaGem,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    {
      icon: FaFire,
      number: 24,
      suffix: "/7",
      label: "AI Scanning",
      color: "text-silver",
      bgColor: "bg-black/20",
      borderColor: "border-silver/30"
    },
    {
      icon: FaGift,
      number: 1000,
      suffix: "+",
      label: "Airdrops Found",
      color: "text-silver",
      bgColor: "bg-black/20",
      borderColor: "border-silver/30"
    },
    {
      icon: FaShieldAlt,
      number: 99,
      suffix: "%",
      label: "Scam Filtered",
      color: "text-silver",
      bgColor: "bg-black/20",
      borderColor: "border-silver/30"
    },
    {
      icon: FaCoins,
      number: "AIAIR",
      prefix: "$",
      label: "Token",
      color: "text-silver",
      bgColor: "bg-black/20",
      borderColor: "border-silver/30"
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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
    <section className="relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-purple-400/20 text-3xl"
        variants={floatingVariants}
        animate="animate"
      >
        <FaStar />
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
        <FaGem />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-quantico">
              Platform Stats
            </span>
          </h2>
          <p className="text-xl text-silver/80 max-w-2xl mx-auto drop-shadow-lg font-quantico">
            Real-time AI-powered airdrop discovery and protection
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className={`p-3 rounded-full ${stat.bgColor} ${stat.borderColor} border-2`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`text-3xl ${stat.color} drop-shadow-lg`} />
                </motion.div>
              </div>

              {/* Number */}
              <div className="text-center mb-2">
                <motion.div
                  className={`text-3xl lg:text-4xl font-bold font-quantico ${stat.color} drop-shadow-lg`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.prefix || ""}
                  {typeof stat.number === 'string' ? stat.number : stat.number.toLocaleString()}
                  {stat.suffix || ""}
                </motion.div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-silver/80 text-sm font-medium drop-shadow-lg font-quantico">
                  {stat.label}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;