/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTelegram, 
  FaTwitter, 
  FaDiscord, 
  FaBars, 
  FaTimes,
  FaRocket,
  FaGift,
  FaUsers,
  FaChartLine
} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: FaRocket },
    { name: 'About', href: '#about', icon: FaGift },
    { name: 'Roadmap', href: '#roadmap', icon: FaUsers },
    { name: 'Tokenomics', href: '#tokenomics', icon: FaChartLine },

  ]

  const socialLinks = [
    { name: 'Telegram', href: '#', icon: FaTelegram, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', href: 'https://x.com/airdropmodels?s=21', icon: FaTwitter, color: 'text-sky-400 hover:text-sky-300' },
    
    // { name: 'Discord', href: '#', icon: FaDiscord, color: 'text-purple-400 hover:text-purple-300' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-silver/20 shadow-2xl' 
          : 'backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <a href="/" className="w-20 h-20 bg-gradient-to-br from-silver to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
               <img src="/logo.png" alt="logo" className="w-20 h-20 rounded-xl" />
              </a>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-silver to-gray-300 bg-clip-text text-transparent drop-shadow-lg font-quantico">
                AI AIRDROP
              </h1>
              <p className="text-xs text-silver/90 drop-shadow-lg font-quantico">$AIAIR</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 text-white hover:text-silver transition-colors duration-200 group relative drop-shadow-lg"
              >
                <item.icon className="text-lg group-hover:scale-110 transition-transform duration-200 drop-shadow-lg" />
                <span className="font-medium drop-shadow-lg">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-silver to-gray-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 transition-all duration-200 ${social.color} drop-shadow-lg`}
                title={social.name}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
            
            {/* <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-silver to-gray-300 text-black font-semibold rounded-lg hover:from-gray-300 hover:to-silver transition-all duration-200 shadow-lg hover:shadow-xl drop-shadow-lg"
            >
              Connect Wallet
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/70 text-white hover:text-silver transition-colors duration-200 drop-shadow-lg"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-silver/20 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-white hover:text-silver transition-colors duration-200 py-3 border-b border-silver/20 last:border-b-0 drop-shadow-lg"
                >
                  <item.icon className="text-lg drop-shadow-lg" />
                  <span className="font-medium drop-shadow-lg">{item.name}</span>
                </motion.a>
              ))}
              
              <div className="pt-4 border-t border-silver/20">
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg bg-gray-800/70 ${social.color} drop-shadow-lg`}
                      title={social.name}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
                
                {/* <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-silver to-gray-300 text-black font-semibold rounded-lg hover:from-gray-300 hover:to-silver transition-all duration-200 drop-shadow-lg"
                >
                  Connect Wallet
                </motion.button> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar