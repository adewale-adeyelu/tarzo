"use client"

import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <div className="bg-[#8070FE] py-10 md:py-16 px-4 md:px-10 lg:px-16 text-center" data-aos="zoom-in" data-aos-delay="100">
            <h1 className="text-white text-md md:text-3xl font-medium">
                Experience Tazro Finance on Mobile
            </h1>
            <p className="text-white pt-2 text-md md:text-sm font-medium">
                Download the Tzro Finance app to send, receive, and manage your money
            </p>
            <div className="mt-6 flex justify-center space-x-2 items-center">
                <button className="bg-white py-2.5 px-4 rounded-full text-[#170E46]">
                    <a href="#" className="flex space-x-1">
                        <FaApple className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            Get On A Store
                        </span>
                    </a>
                </button>
    
                <button className="bg-white py-2.5 px-4 rounded-full text-[#170E46]">
                    <a href="#" className="flex space-x-1">
                        <IoLogoGooglePlaystore className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            Get On Apple Store
                        </span>
                    </a>
                </button>
            </div>
        </div>
    );
}
 
export default Experience;