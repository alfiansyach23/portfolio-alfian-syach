import React from 'react'
import Home from '@/components/pages/Home.jsx'
import Skills from '@/components/sections/Skills.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import About from '@/components/sections/About.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Projects from '@/components/sections/Projects.jsx'
import Contact from '@/components/sections/Contact.jsx'
import CustomCursor from '@/components/utils/CursorAnimation.jsx'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}


