"use client"
import React from 'react'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"
import { SlSocialFacebook } from "react-icons/sl"
import { SlSocialInstagram } from "react-icons/sl"
import { SlSocialTwitter } from "react-icons/sl"
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='hidden mdl:inline-flex items-center justify-center w-full py-6 gap-4'>


            <div className="flex gap-3">
                <motion.a

                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}

                    href="https://github.com/Awais-Khalil" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </motion.a>

                <motion.a

                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
                </motion.a>

                <motion.a


                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.facebook.com/awais.khalil.921/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialFacebook />
                    </span>
                </motion.a>

                <motion.a


                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://twitter.com/awais_khalil1" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialTwitter />
                    </span>
                </motion.a>

                <motion.a


                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/awaiskhalil123/?hl=en" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialInstagram />
                    </span>
                </motion.a>
            </div>
            <div className="w-[2px] h-32 bg-textDark">
            </div>


        </div>
    )
}

export default Footer
