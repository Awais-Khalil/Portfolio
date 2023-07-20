"use client"
import React from 'react'
import ArchiveCard from './ArchiveCard'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='max-w-contentContainer mx-auto px-4 py-18 '>

            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-titleFont font-semibold text-white'> Other Notworthy Certifications & Trainings</h2>
                <p className='text-sm font-titleFont text-textGreen'>Below are my trainings and certifications</p>

            </div>
            <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard

                    title="PMP Certification"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                    listitem={["PMBOK", "Lahore Chapture", "Offical member"]}
                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                />

                <ArchiveCard

                    title="Internet of things"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                    listitem={["Rust", "Embedded Rust", "STM32F303"]}
                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                />
                <ArchiveCard

                    title="HCIP-LTE RNP&RNO"
                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                    listitem={["LTE", "4G", "Optimization"]}
                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                />


                {
                    showMore && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}>
                                <ArchiveCard
                                    title="MDT Activities"
                                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                                    listitem={["PMBOK", "Lahore Chapture", "Offical member"]}
                                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}>
                                <ArchiveCard
                                    title="MIMO Technologies"
                                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                                    listitem={["PMBOK", "Lahore Chapture", "Offical member"]}
                                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}>
                                <ArchiveCard
                                    title="LTE CA Troubleshooting"
                                    des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores sapiente minus ut voluptatibus unde quod optio necessitatibus officia. Sint accusamus optio expedita illo nesciunt explicabo nihil unde quaerat neque."
                                    listitem={["PMBOK", "Lahore Chapture", "Offical member"]}
                                    link="https://www.linkedin.com/in/awais-khalil-9a815a5/"
                                />
                            </motion.div>
                        </>
                    )
                }

            </div>
            <div className='mt-12 flex items-center justify-center'>

                {showMore ? <button onClick={() => setShowMore(false)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'> Show Less</button>
                    : <button onClick={() => setShowMore(true)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor dura'> Show More</button>

                }
            </div>

        </div>
    )
}

export default Certifications
