"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Banner = () => {
    return (
        <section id="home" className='max-w-contentContainer mx-auto py-10 mdl:py-24  flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>

            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='text-lg font-titleFont tracking-wide text-textGreen'>
                Hi, My name is
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-2xl text-textDark  lgl:text-3xl font-titleFont font-semibold flex flex-col'
            >Awais Khalil
                <span className='text-textDark mt-2 lgl:mt-4'> Telecommuncation Executive with more than a decade experience</span> </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='text-textDark font-medium text-base md:max-w-[650px] flex flex-col'
            >
                I am a telecommunication engineer with more than a decade experience especially in Radio Network Planning & Optimization.
                My extensive experience in the subject field in general with working experience on different vendors equipment such as samsung,huawei,ericsson{""}

                <a href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target='_blank'>
                    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'> Learn More </span>
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'> </span>

                </a>
            </motion.p>
            <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}

                className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md hover:bg-hoverColor duration-300 tracking-wide'> Check out my projects

            </motion.button>

        </section>
    )
}

export default Banner 
