import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Samsung = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> LTE/CDMA RF Engineer – Network Vision
                <span className='text-textGreen tracking-wide'> @ Samsung Telecommunication America</span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 11/2012 to 02/2014</p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Worked on Sprint’s Network Vision Project as an LTE/CDMA RF Engineer in a Regional Engineering Team in the North East for Samsung Telecommunications America. This project includes an LTE Launch and CDMA Network Modernization upgrade. Legacy equipment is being replaced with Samsung Network Infrastructure.
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Site Shake Downs & Single Site Verification. Checking Individual site for Radiating Sector Coverage i.e.; Good RSRP & SINR, Sector Swap, Proper Handover Definition and DL-UL Throughut according to Backhaul capacity.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Post process CTTP (Shakedown test) logs, Pre Cluster (legacy network) and CLA drives (M1), 4G ATP logs on XCAP, submit No Harm report, Check card count before M2.

                </li>
            </ul>



        </motion.div>
    )
}

export default Samsung
