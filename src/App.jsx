import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeComponent from './components/Marquee'
import Aboutus from './components/Aboutus'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import CTA from './components/CTA'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen pt-10 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Hero />
        <MarqueeComponent />
        <Aboutus />
        <Roadmap />
        <Stats />
        <Tokenomics />
        <CTA />
     
        <Footer />
      </div>
    </div>
  )
}

export default App
