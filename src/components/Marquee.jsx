import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaRocket, 
  FaGift, 
  FaBrain, 
  FaShieldAlt, 
  FaChartLine,
  FaUsers,
  FaTelegram,
  FaDiscord,
  FaTwitter,
  FaStar,
  FaFire,
  FaCrown,
  FaGem,
  FaCoins
} from 'react-icons/fa';

const MarqueeComponent = () => {
  const marqueeItems = [
    { text: "🚀 SOLANA AI TELEGRAM BOT LIVE NOW !!!", icon: FaRocket, color: "text-purple-400" },
    { text: "💎 VIP ACCESS - JOIN THE ELITE !!!", icon: FaCrown, color: "text-yellow-400" },
    { text: "💰 REWARD SYSTEM - EARN PASSIVE INCOME !!!", icon: FaCoins, color: "text-green-400" },
    { text: "🔥 HOT AIRDROPS DAILY - DON'T MISS OUT !!!", icon: FaFire, color: "text-red-400" },
    { text: "⚡ 24/7 AI SCANNING - BE FIRST TO KNOW !!!", icon: FaBrain, color: "text-blue-400" },
    { text: "🎁 1000+ VERIFIED AIRDROPS - START EARNING !!!", icon: FaGift, color: "text-pink-400" },
    { text: "👑 DIAMOND HANDS REWARDS - VIP BENEFITS !!!", icon: FaGem, color: "text-cyan-400" },
    { text: "📈 PREMIUM REWARDS SYSTEM - MAXIMIZE PROFITS !!!", icon: FaChartLine, color: "text-orange-400" },
    { text: "🛡️ 99% SCAM PROTECTION - SAFE & SECURE !!!", icon: FaShieldAlt, color: "text-emerald-400" },
    { text: "👥 AI SISTERHOOD - JOIN THE COMMUNITY !!!", icon: FaUsers, color: "text-indigo-400" },
    { text: "🔗 MULTI-CHAIN SUPPORT - SOLANA FOCUSED !!!", icon: FaStar, color: "text-purple-500" },
    { text: "📱 TELEGRAM BOT READY - INSTANT NOTIFICATIONS !!!", icon: FaTelegram, color: "text-blue-500" },
    { text: "🎯 EARLY ACCESS ALPHA - LIMITED SPOTS !!!", icon: FaStar, color: "text-red-500" },
    { text: "🔥 HOT AIRDROPS DAILY - FOMO ALERT !!!", icon: FaFire, color: "text-yellow-500" },
    { text: "💎 DIAMOND HANDS REWARDS - VIP ACCESS !!!", icon: FaGem, color: "text-cyan-500" },
  ];

  const MarqueeItem = ({ item }) => (
    <div className="flex items-center space-x-3 mx-6 whitespace-nowrap">
      <item.icon className={`text-lg ${item.color} drop-shadow-lg`} />
      <span className="text-sm font-bold text-white drop-shadow-lg font-quantico">{item.text}</span>
      <div className="w-1 h-1 bg-silver rounded-full opacity-60"></div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 py-3 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
      
      {/* Single Marquee Row */}
      <div className="relative z-20">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="py-2"
        >
          {marqueeItems.map((item, index) => (
            <MarqueeItem key={index} item={item} />
          ))}
        </Marquee>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-2 left-1/4 text-purple-400/20 text-sm">
        <FaStar />
      </div>
      <div className="absolute bottom-2 right-1/3 text-blue-400/20 text-sm">
        <FaGem />
      </div>
      <div className="absolute top-1/2 left-1/2 text-green-400/20 text-sm">
        <FaCrown />
      </div>
    </div>
  );
};

export default MarqueeComponent;