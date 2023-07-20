"use client"
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"
import { SlSocialFacebook } from "react-icons/sl"
import { SlSocialInstagram } from "react-icons/sl"
import { SlSocialTwitter } from "react-icons/sl"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react';
import Experience from './Experience';
import Contact from './Contact';
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {

    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false);
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.match(/#[^\s]+/)![0]; // Extract targetId correctly
        const elem = document.getElementById(targetId.slice(1)); // Remove the leading '#'
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
            });
            const links = document.querySelectorAll(".nav-link");
            links?.forEach((link) => {
                link.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
        }
    };

    function handleClick(e: any) {
        if (e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] top-0 z-50 px-4'>
            <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image className='w-20' src="/assets/images/logo.jpg" width={100} height={100} alt="logo" />
                </motion.div>
                <div className='hidden mdl:inline-flex items-center gap-7'>
                    <ul className='flex text-[13px] gap-7 ml-auto'>
                        <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            <Link
                                onClick={handleScroll}
                                href="#home" className='flex  py-2 items-center gap-1 font-medium cursor-pointer duration-300 text-textDark hover:text-textGreen nav-link'>
                                Home
                            </Link>
                        </motion.li>


                        <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                        >
                            <Link onClick={handleScroll} href="#About" className='flex py-2  items-center  text-textDark hover:text-textGreen gap-1 font-medium cursor-pointer duration-300 nav-link'>
                                <span> 01. </span>
                                About
                            </Link>
                        </motion.li>


                        <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                        >
                            <Link onClick={handleScroll} href="#Experience" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                <span> 02. </span>
                                Experience
                            </Link>
                        </motion.li>


                        <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                        >
                            <Link onClick={handleScroll} href="#Projects" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                <span> 03. </span>
                                Projects
                            </Link>
                        </motion.li>

                        <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.5 }}
                        >
                            <Link onClick={handleScroll} href="#Contact" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                <span> 04. </span>
                                Contact
                            </Link>
                        </motion.li>

                    </ul>
                    <a href="/assets/Awais Khalil_RF Performance & Integration Engineer.docx" target="_blank">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}

                            className='px-4 py-2 rounded-md text-[13px] border duration-300 border-textGreen hover:bg-hoverColor  text-textDark'
                        > Resume </motion.button>
                    </a>
                </div>

                <div onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>

                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all ease-in-out duration-300'> </span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-0 group-hover:translate-x-2 transition-all ease-in-out duration-300'> </span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-2 transition-all ease-in-out duration-300'> </span>

                </div>

                {
                    showMenu && (
                        <div ref={(node) => (ref.current = node)}
                            onClick={handleClick}
                            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}

                                className='w-[80%] h-full overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative bg-[#112240]'
                            >
                                <MdOutlineClose
                                    onClick={() => setShowMenu(false)}
                                    className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />

                                <div className='flex flex-col items-center gap-7'>
                                    <ul className='flex flex-col text-base gap-7'>
                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                                        >
                                            <Link
                                                onClick={handleScroll}
                                                href="#home" className='flex  py-2 items-center gap-1 font-medium cursor-pointer duration-300 text-textDark hover:text-textGreen nav-link'>
                                                Home
                                            </Link>
                                        </motion.li>


                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                                        >
                                            <Link onClick={handleScroll} href="#About" className='flex py-2  items-center  text-textDark hover:text-textGreen gap-1 font-medium cursor-pointer duration-300 nav-link'>
                                                <span> 01. </span>
                                                About
                                            </Link>
                                        </motion.li>


                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                                        >
                                            <Link onClick={handleScroll} href="#Experience" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                                <span> 02. </span>
                                                Experience
                                            </Link>
                                        </motion.li>


                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                                        >
                                            <Link onClick={handleScroll} href="#Projects" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                                <span> 03. </span>
                                                Projects
                                            </Link>
                                        </motion.li>

                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                                        >
                                            <Link onClick={handleScroll} href="#Contact" className='flex py-2 nav-link text-textDark hover:text-textGreen items-center gap-1 font-medium cursor-pointer duration-300'>
                                                <span> 04. </span>
                                                Contact
                                            </Link>
                                        </motion.li>
                                    </ul>

                                    <a href="/assets/Awais Khalil_RF Performance & Integration Engineer.docx" target="_blank">
                                        <motion.button
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}

                                            className='px-4 py-2 rounded-md text-[13px] border duration-300 border-textGreen hover:bg-hoverColor  text-textDark'
                                        > Resume </motion.button>
                                    </a>


                                    <div className="flex gap-2">

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

                                    <motion.a

                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1, ease: "easeIn" }}

                                        href="mailto:awaiskhalil@gmail.com">
                                        <p className='text-sm flex justify-center  w-10 tracking-wide text-textGreen'> awaiskhalil@gmail.com </p>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;
