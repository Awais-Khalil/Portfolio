import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"
import { SlSocialFacebook } from "react-icons/sl"
import { SlSocialInstagram } from "react-icons/sl"
import { SlSocialTwitter } from "react-icons/sl"


import React from "react"

const LeftSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight ">

            <div className="flex flex-col gap-3">
                <a href="https://github.com/Awais-Khalil" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>

                <a href="https://www.linkedin.com/in/awais-khalil-9a815a5/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
                </a>

                <a href="https://www.facebook.com/awais.khalil.921/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialFacebook />
                    </span>
                </a>

                <a href="https://twitter.com/awais_khalil1" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialTwitter />
                    </span>
                </a>

                <a href="https://www.instagram.com/awaiskhalil123/?hl=en" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialInstagram />
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-textDark">
            </div>
        </div>
    )
}

export default LeftSide
