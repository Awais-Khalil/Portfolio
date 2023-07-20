import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Tmobile = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> Associate RF Engineer
                <span className='text-textGreen tracking-wide'> @ T-Mobile – NJ, USA</span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 01/2008 to 12/2008</p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Validating drive test data log files, uploading data into TMO server for Actix post processing, Homer work orders for post processing. Verification for any swap sector issues, Best Server Relations & Missing Neighbors from Actix processed report and recommending necessary changes for cluster optimization
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Assisted teams with troubleshooting, training, Scheduling , kit setup, assign site assignments to individual drive testers, and compare data for any correction before submitting to Nokia and Ericsson Lead RF Engineer.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Provided On call Support for Software/Hardware tools like TEMS Investigation & TEMS Route Planner, Agilent-E6474A, MapInfo, Delorme Street Atlas, Microsoft Excel, PowerPoint, Word, and Outlook.
                </li>
            </ul>



        </motion.div>
    )
}

export default Tmobile
