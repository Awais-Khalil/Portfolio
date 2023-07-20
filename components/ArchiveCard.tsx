import React from 'react'
import { FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"

interface Props {

    title: string,
    des: string,
    listitem: string[],
    link: string
}

const ArchiveCard = ({ title, des, listitem, link }: Props) => {
    return (

        <a href={link} target='_blank'>
            <div className='w-full h-auto rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
                <div className='flex justify-between items-center'>
                    <FaRegFolder className='text-4xl text-textGreen' />
                    <RxOpenInNewWindow className='text-4xl hover:text-textGreen' />
                </div>
                <div>
                    <h2 className='text-xl font-titleFont text-textDark font-semibold tracking-wide group-hover:text-textGreen'> {title}</h2>
                    <p className='text-sm mt-3 text-textDark'> {des}</p>
                </div>
                <ul className='text-textDark'>
                    {listitem.map((item, i) => (
                        <li key={i}> {item} </li>
                    )
                    )}
                </ul>
            </div>
        </a>
    )
}

export default ArchiveCard
