import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Mobilink = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> GSM Transmissions Engineer
                <span className='text-textGreen tracking-wide'> @ Pakistan Mobile Communication Limited</span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 3/2005 to 7/2006</p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Responsible for Deployment of New NEC microwave links for upcoming cell sites, BSC’s and for MSC’s Links based on SDH & STM.
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Developed floating transmission plans for connectivity of cell sites in respective BSC’s, plans for Ater Traffic from BSC’s to XCDR to MSC’s, Inter MSC Links and also float plan for Microwave Offloading on OFJAN and NEC media.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Configure Lucent ATM Modules for signaling links coming from Switch going towards PSTN Networks, Configuration of Egress and Ingress as well.
                </li>
            </ul>



        </motion.div>
    )
}

export default Mobilink
