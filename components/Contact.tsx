"use client"
import React from 'react'

const Contact = () => {
    return (
        <section id='Contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'> 04. What's Next?</p>
            <h2 className='font-titleFont text-4xl font-semibold text-white'>Get in Touch </h2>
            <p className='max-w-[600px] text-center text-textDark'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nam. Odio, perspiciatis eius placeat reprehenderit tempora incidunt saepe esse, sequi sunt accusantium aspernatur iste harum nam dolore repellendus hic a. </p>

            <a href='mailto:awaiskhalil@gmail.com'>
                <button className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Hello</button>
            </a>


        </section>
    )
}

export default Contact
