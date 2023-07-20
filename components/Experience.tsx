"use client"
import React, { useState } from 'react'
import Sectiontitle from './Sectiontitle'
import Huawei from './works/Huawei'
import Samsung from './works/Samsung'
import Celcite from './works/Celcite'
import Metrico from './works/Metrico'
import Mobilink from './works/Mobilink'
import Tmobile from './works/Tmobile'


const Experience = () => {

    const [workHuawei, setWorkHuawei] = useState(true);
    const [workSamsung, setWorkSamsung] = useState(false);
    const [workCelcite, setWorkCelcite] = useState(false);
    const [workMetrico, setWorkMetrico] = useState(false);
    const [workTmobile, setWorkTmobile] = useState(false);
    const [workJazz, setWorkJazz] = useState(false);

    const handleHuawei = () => {

        setWorkHuawei(true);
        setWorkSamsung(false);
        setWorkCelcite(false);
        setWorkMetrico(false);
        setWorkTmobile(false);
        setWorkJazz(false);
    };

    const handleSamsung = () => {

        setWorkHuawei(false);
        setWorkSamsung(true);
        setWorkCelcite(false);
        setWorkMetrico(false);
        setWorkTmobile(false);
        setWorkJazz(false);
    };

    const handleCelcite = () => {

        setWorkHuawei(false);
        setWorkSamsung(false);
        setWorkCelcite(true);
        setWorkMetrico(false);
        setWorkTmobile(false);
        setWorkJazz(false);
    };


    const handleMetrico = () => {

        setWorkHuawei(false);
        setWorkSamsung(false);
        setWorkCelcite(false);
        setWorkMetrico(true);
        setWorkTmobile(false);
        setWorkJazz(false);
    };

    const handleTmobile = () => {

        setWorkHuawei(false);
        setWorkSamsung(false);
        setWorkCelcite(false);
        setWorkMetrico(false);
        setWorkTmobile(true);
        setWorkJazz(false);
    };

    const handleJazz = () => {

        setWorkHuawei(false);
        setWorkSamsung(false);
        setWorkCelcite(false);
        setWorkMetrico(false);
        setWorkTmobile(false);
        setWorkJazz(true);
    };

    return (
        <section id="Experience" className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <Sectiontitle title="Places where i have worked" titleNo="02" />

            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='flex flex-col md:w-32'>
                    <li onClick={handleHuawei} className={`${workHuawei ? "border-l-hoverColor   text-textGreen" : "text-textDark border-l-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Huawei
                    </li>
                    <li onClick={handleSamsung} className={`${workSamsung ? "border-l-hoverColor text-textGreen" : "text-textDark border-l-textDark"} border-l-2   bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Samsung
                    </li>
                    <li onClick={handleCelcite} className={`${workCelcite ? "border-l-hoverColor text-textGreen" : "text-textDark border-l-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Celcite Management Solutions
                    </li>
                    <li onClick={handleMetrico} className={`${workMetrico ? "border-l-hoverColor text-textGreen" : "text-textDark border-l-textDark"} border-l-2    bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Metrico Wireless
                    </li>
                    <li onClick={handleTmobile} className={`${workTmobile ? "border-l-hoverColor text-textGreen" : "text-textDark border-l-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        T-mobile
                    </li>
                    <li onClick={handleJazz} className={`${workJazz ? "border-l-hoverColor text-textGreen" : "text-textDark border-l-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Mobilink-Jazzawaiskhalil@gmail.com
                    </li>
                </ul>

                {workHuawei && <Huawei />}
                {workSamsung && <Samsung />}
                {workMetrico && <Metrico />}
                {workTmobile && <Tmobile />}
                {workJazz && <Mobilink />}
                {workCelcite && <Celcite />}

            </div>
        </section>

    )
}

export default Experience
