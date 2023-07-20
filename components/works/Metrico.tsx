import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Metrico = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> Field Test Engineer
                <span className='text-textGreen tracking-wide'> @ Metrico Wireless</span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 4/2009 to 3/2011</p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Worked on Metrico tools like Nomad, Muse, Datum PC, Datum Mobile, UDM Key, I-Merger, Curl to execute different test cases to verify handset quality of various phone Models launched by MetroPCS , AT&T & T-Mobile.
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Worked on QPST, QXDM, and Datum PC to Perform Benchmarking Data Device test to compare Qualcomm Gobi1 chipset and other data modules for VRZ & AT&T Mobile broadband Service in Seattle, WA.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Worked on Apple Tools like Artemis & Mobile Analyzer & Agilent Tool E6474A-X Collect Logs & upload them in Apple Radar Server, To Analyze I-Phone Behavior in long call state in Urban and Dense Route in NYC,NY.
                </li>
            </ul>



        </motion.div>
    )
}

export default Metrico
