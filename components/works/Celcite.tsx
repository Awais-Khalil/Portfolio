import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const Celcite = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'
        >
            <h3 className='flex gap-1 font-medium text-sm font-tileFont text-textDark'> GSM RF Engineer
                <span className='text-textGreen tracking-wide'> @ Celcite Management Solutions </span> </h3>
            <p className='text-sm font-medium text-textDark mt-1'> 4/2011 to 9/2012 </p>

            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Regular recording of Measurement Results Recording (MRR) to identify hardware snags and cell’s foot print Using PDF & CDF distribution at cell & channel group level; PMR tools for Cell & Mobile Traffic Recording (CTR/MTR) to troubleshoot degraded cells using cell and IMSI level recorded events.
                </li>

                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Feature Trials and Parameter strategies on Flexible MAIO, Multi-band Cell, Dual BCCH, Dynamic OL/UL Sub-cells, Dynamic Half Rate Allocation and Mode Adaptation, Transmit Coherent Combining, Hierarchical Cell Structure, Cell Load Sharing, and Assignment to other cells, extended range, Locating, Power Control, CHAP, Intra-cell handover, GPRS and EDGE.
                </li>
                <li className='text-base flex gap-2 text-textDark'> <span className='text-textGreen mt-1'> <TiArrowForward /></span>
                    Played key role in Network acceptance (cluster by cluster), Dual-BCCH and AMR implementations, EDGE trials; Transcoder Pool reconfiguration, designing of upcoming roll-out sites & 1800MHz band model tuning using TEMS Investigation and TCPU.

                </li>
            </ul>



        </motion.div>
    )
}

export default Celcite