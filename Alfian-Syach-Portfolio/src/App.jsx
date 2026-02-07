import React from 'react'
import Home from '@/components/pages/Home'
import Skills from '@/components/sections/Skills'
import Navbar from '@/components/layout/Navbar'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import CustomCursor from '@/components/utils/CursorAnimation'

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

