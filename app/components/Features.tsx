"use client"

import { LuArrowLeftRight, LuReceipt, LuRefreshCcw } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <div className="bg-white py-16 px-5 md:px-10" id="features">
            <h1 className="flex justify-center items-center space-x-1" data-aos="fade-up" data-aos-delay="100">
                <Image 
                    src="/Header-img.png" 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                />
                <span className="text-[#170E46] font-medium text-lg">Features</span>
            </h1>

            <div className="mt-3" data-aos="fade-up" data-aos-delay="200">   
                <h1 className="text-[#170E46] font-medium text-lg md:text-3xl text-center tracking-wider">
                    Simplifying Payments Across Borders
                </h1>

                <h6 className="text-[#170E46] mt-2 text-xs md:text-sm text-center">
                    Send money internationally, pay bills effortlessly, and convert currencies
                    <br className="hidden md:block" />
                    instantly, all from one fast, secure, and reliable finance platform.
                </h6>
            </div>

            <div className="flex flex-col md:flex-row space-y-5 items-center justify-center mt-7 md:mt-10 lg:mt-4 space-x-4 lg:space-x-6" data-aos="fade-up" data-aos-delay="300">
                <div className="flex space-x-2 items-center">
                    <div className="bg-[#8070FE] px-3 py-1.5 rounded-lg shadow-2xl">
                        <LuArrowLeftRight size={18} className="text-[#FFFFFF]" />
                    </div>
                    <span className="text-[#170E46] text-sm">International Transfers</span>
                </div>
                <div className="border border-[#1414142E] h-6 hidden md:block"/>
                <div className="flex space-x-2 items-center">
                    <div className="bg-[#F1F1F1] px-3 py-1.5 rounded-lg shadow-2xl">
                        <LuReceipt size={18} className="text-[#000000]" />
                    </div>
                    <span className="text-[#170E46] text-sm">Bill Payments and Purchases</span>
                </div>
                <div className="border border-[#1414142E] h-6 hidden md:block"/>
                <div className="flex space-x-2 items-center">
                    <div className="bg-[#F1F1F1] px-3 py-1.5 rounded-lg shadow-2xl">
                        <LuRefreshCcw size={18} className="text-[#000000]"  />
                    </div>
                    <span className="text-[#170E46] text-sm">Currency Conversions</span>
                </div>
            </div>

            <div className="lg:px-6 mt-7">
                <div className="bg-[#F8F8F8] rounded-xl flex flex-col-reverse justify-between md:grid md:grid-cols-2 gap-8 items-center px-5 lg:px-10 py-8">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-[#170E46] text-lg lg:text-2xl font-medium">
                            Seamless International Transfers
                        </h2>
                        <h6 className="text-[#170E46] mt-3 text-sm">
                            Send and receive money instantly across 150+ 
                            <br className="hidden md:block" />
                            countries. No transfer fees, no waiting periods 
                            <br className="hidden md:block" />
                            just frictionless global finance.
                        </h6>
                    </div>
                    <div className="relative w-full max-w-[560px] h-[350px] overflow-hidden rounded-xl">

                        {/* Mountain image */}
                        {/* <img src="/Features-img.jpg" alt="Tarzo" className="w-full h-[350px] object-cover" data-aos="zoom-in" data-aos-delay="200" /> */}
                        <Image 
                            src="/Features-img.jpg" 
                            alt="Tarzo"
                            fill
                            className="object-cover"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        />

                        {/* Transfer card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[295px] rounded-lg bg-white py-5 px-4 shadow-lg" data-aos="zoom-in" data-aos-delay="100">
                            <p className="text-[10px] font-medium text-[#170E46] mb-2">
                                Transfer Method
                            </p>

                            <div className="flex rounded-md border border-gray-200 p-1 text-[9px]">
                                <button className="flex-1 py-2 text-gray-500">
                                    By Tag
                                </button>

                                <button className="flex-1 rounded-md bg-[#8070FE] py-2 text-white">
                                    By Account
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-3 mb-2">
                                <p className="text-[9px] text-[#170E46]">
                                    Currency Selection
                                </p>

                                <span className="text-[8px] text-[#8070FE]">
                                    See All
                                </span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="rounded-md flex items-center space-x-1 bg-[#FAFAFA] border boder-[#170E4614] w-48 px-2 py-1 text-[8px]">
                                    <img src="/Nigeria-img.png" alt="NGN" />
                                    <span className="text-[#1A1A1A] font-medium text-xs">NGN</span>
                                </div>
                                <div className="rounded-md flex items-center space-x-1 bg-[#FAFAFA] border boder-[#170E4614] w-48 px-2 py-1 text-[8px]">
                                    <img src="/USA-img.png" alt="USA" />
                                    <span className="text-[#1A1A1A] font-medium text-xs">USD</span>
                                </div>
                                <div className="rounded-md flex items-center space-x-1 bg-[#FAFAFA] border boder-[#170E4614] w-48 px-2 py-1 text-[8px]">
                                    <img src="/EUR-img.png" alt="eur" /> 
                                    <span className="text-[#1A1A1A] font-medium text-xs">EUR</span>
                                </div>
                                <div className="rounded-md flex items-center space-x-1 bg-[#FAFAFA] border boder-[#170E4614] w-48 px-2 py-1 text-[8px]">
                                    <img src="/GBP-img.png" alt="gbp" /> 
                                    <span className="text-[#1A1A1A] font-medium text-xs">GBP</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-5 md:px-0" data-aos="fade-up" data-aos-delay="200">
                <div className="flex justify-center">
                    <h1 className="text-[#170e46] font-medium text-lg">
                        Growing Everyday
                    </h1>
                </div>
                <div className="flex space-x-5 md:space-x-13 justify-center mt-8 items-center">
                    <div>
                        <h1 className="text-[#170E46] font-medium text-xl md:text-4xl">
                            320k+
                        </h1>
                        <h6 className="text-[#170E46] text-xs">
                            Active Users Worldwide
                        </h6>
                    </div>
                    <div className="border border-[#1414142E] h-10"/>
                    <div>
                        <h1 className="text-[#170E46] font-medium text-xl md:text-4xl">
                            80m+
                        </h1>
                        <h6 className="text-[#170E46] text-xs">
                            Transactions processed
                        </h6>
                    </div>
                    <div className="border border-[#1414142E] h-10"/>
                    <div>
                        <h1 className="text-[#170E46] font-medium text-xl md:text-4xl">
                            120+
                        </h1>
                        <h6 className="text-[#170E46] text-xs">
                            Countries Supported
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Features;