import React from 'react'
import Sectiontitle from './Sectiontitle'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
import { profilee } from '../public/assets';
import { profile } from '../public/assets';

const About = () => {
    return (
        <section id='About' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
            <Sectiontitle title="About me" titleNo="01" />

            <div className='flex flex-col lgl:flex-row gap-16'>


                <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>

                    <p>
                        My Name is Awais Khalil and have extensive experience as Telecom/RF Engineer in USA,UAE & Pakistan for 10+ years.  I am currently living in Pakistan and looking for remote opportunities .
                        Please consider me for a suitable remote opportunity for below mentioned roles.
                        My last position was {" "}
                        <span className='text-textGreen'>
                            5G/LTE RNP&RNO Consultant (Middle East Remote Delivery Centre) at Huawei Technologies.
                        </span>
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim veniam magnam? Molestiae numquam, quo consectetur vel temporibus aliquid voluptate iste rem architecto ab voluptates, repudiandae nesciunt inventore amet placeat.</p>

                    <p> Here are few roles I have been looking for recently: </p>
                    <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-x-10 mt-6'>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> DT Coordinator
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> RF optimization Engineer
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> Performance RF Monitoring Engineer
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> RF Integration Engineer
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> RF Deployment Engineer
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> RFDS & SSV Report preparation
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='text-textGreen'> <AiFillThunderbolt /></span> RF Rollout Engineer
                        </li>
                    </ul>
                </div>


                <div className='w-full lgl:w-1/3 h-80 relative group'>
                    <div className='w-full absolute h-80 -left-6 -top-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                            <Image className='rounded-lg h-full object-cover'
                                src={profile}
                                alt="profileeimg"
                            />
                            <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300 '> </div>
                        </div>
                    </div>
                    <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 '> </div>


                </div>
            </div>

        </section>
    )
}

export default About
