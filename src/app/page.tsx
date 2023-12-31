"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import LeftSide from '../../components/LeftSide'
import RightSide from '../../components/RightSide'
import { motion } from 'framer-motion'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Projects from '../../components/Projects'
import Certifications from '../../components/Certifications'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFront overflow-x-hidden overflow-y-scroll bg-gray-900 scrollbar text-textLight  scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />


      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <LeftSide />
        </motion.div>


        <div className='h-[88vh] mx-auto p-4 w-full ml-32'>
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />







        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <RightSide />
        </motion.div>


      </div>
    </main>
  )
}
