import React from 'react'
import Sectiontitle from './Sectiontitle'
import Image from 'next/image'
import { sprintnv, tmobile, tmobile1 } from '../public/assets'
import { huawei } from '../public/assets'
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"
import { SlSocialFacebook } from "react-icons/sl"
import Huawei from './works/Huawei'
import metrico from "./images/metrico.jpeg";



const Projects = () => {
    return (
        <section id="Projects" className='max-w-container mx-auto lgl:px-20 py-20'>
            <Sectiontitle title="Projects : where I have worked in detail" titleNo='03' />

            <div className='w-full flex flex-col items-center justify-betwen gap-28 mt-8 '>


                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group mx-auto' href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target="_blank">
                            <div>
                                <Image className='w-full h-full object-contain'
                                    src={sprintnv}
                                    alt="sprint"
                                />
                            </div>
                        </a>

                        <div className='w-full flex-auto xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'> Featured project </p>
                            <h3 className='text-2xl font-bold text-white'> Sprint Network Vision</h3>
                            <p className='text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md'> Worked on Sprint’s Network Vision Project as an LTE/CDMA RF Engineer in a Regional Engineering Team in the North East for Samsung Telecommunications America. This project includes an LTE Launch and CDMA Network Modernization upgrade.</p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>XCAP </li>
                                <li>XCAL </li>
                                <li>MapInfo </li>
                                <li>SiteInfo </li>
                                <li>Excel </li>
                            </ul>

                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <TbBrandGithub />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialFacebook />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialLinkedin />
                                </a>



                            </div>


                        </div>
                    </div>


                </div>


                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group mx-auto' href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target="_blank">
                            <div>
                                <Image className='w-full h-full object-contain'
                                    src={huawei}
                                    alt="huawei"
                                />
                            </div>
                        </a>

                        <div className='w-full flex-auto xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'> Featured project </p>
                            <h3 className='text-2xl font-bold text-white'> Sprint Network Vision</h3>
                            <p className='xl:-mr-16  text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md'>
                                Main POC for MDT (Maintenance down time) related RF rollout Activities for different projects such as 4G7, WBB, Aspiration, NEOM, 5G2, 5G3,5G4 for STC operator & Sofia for Zain operator in KSA remotely from RSC, Pakistan.
                            </p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>CME </li>
                                <li>U2020 </li>
                                <li>FMA </li>
                                <li>OMSTAR </li>
                                <li>Excel </li>
                            </ul>

                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <TbBrandGithub />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialFacebook />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialLinkedin />
                                </a>



                            </div>


                        </div>
                    </div>


                </div>



                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a className='w-full xl:w-1/2 h-auto relative group mx-auto' href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target="_blank">
                            <div>
                                <Image className='w-full h-full object-contain'
                                    src={tmobile1}
                                    alt="sprint"
                                />
                            </div>
                        </a>

                        <div className='w-full flex-auto xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'> Featured project </p>
                            <h3 className='text-2xl font-bold text-white'> 3G UMTS Deployment</h3>
                            <p className='text-sm bg-[#112240] md:text-base p-2 md:p-6 rounded-md'>

                                Responsible for UMTS Pre-Launch RF Optimization and Scheduling of Drive Testing in Atlanta, GA & Tampa, FL.
                                Provided On call Support for Software/Hardware tools like TEMS Investigation & TEMS Route Planner, Agilent-E6474A, MapInfo, Delorme Street Atlas, Microsoft Excel, PowerPoint, Word, and Outlook.
                            </p>

                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>XCAP </li>
                                <li>XCAL </li>
                                <li>MapInfo </li>
                                <li>SiteInfo </li>
                                <li>Excel </li>
                            </ul>

                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <TbBrandGithub />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialFacebook />
                                </a>

                                <a className='hover:text-textGreen duration-300 '
                                    href="https://github.com/Awais-Khalil" target='_blank'>
                                    <SlSocialLinkedin />
                                </a>



                            </div>
                        </div>
                    </div>
                </div>



            </div>






        </section>
    )
}

export default Projects
