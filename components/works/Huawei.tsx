import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Huawei = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> LTE RF Planning & Optimization Engineer
                <span className='text-textGreen tracking-wide'> @ Huawei Telecommunication Pakistan</span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 04/2018 to 01/2023</p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Main POC for MDT (Maintenance down time) related RF rollout Activities for different projects such as 4G7, WBB, Aspiration, NEOM, 5G2, 5G3,5G4 for STC operator & Sofia for Zain operator in KSA remotely from RSC, Pakistan.
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Main responsibilities are RF script preparation, script execution, error checking & audit, initial checklist after activation of new layers & sites for all technologies 2G/3G/4G/5G.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>

                    Responsible for initial tuning and solving all basic issues required for customer acceptance after integration & activation of any layer for all technologies 2G/3G/4G/5G.
                </li>
            </ul>



        </motion.div>
    )
}

export default Huawei
