"use client"

import { Star, StarCheck, StarIcon } from "lucide-react";
import { LuEye, LuRepeat, LuShieldCheck } from "react-icons/lu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trust = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <div className="bg-[#F8F8F8] px-5 lg:px-16 py-12" id="wealth">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                <div data-aos="zoom-in" data-aos-delay="100">
                    {/* Mountain image */}
                    <img src="/Trust-img.jpg" alt="Tarzo"/>
                </div>

                <div className="bg-white px-10 py-10 md:py-20" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-[#170E46] pb-3 text-lg lg:text-2xl font-medium">
                        Trusted Financial Transactions
                        <br className="hidden md:block" />
                        Across Borders Made Simple
                    </h2>
                    <h6 className="text-[#170E46] text-sm tracking-wide leading-loose">
                        Tazro is designed to simplify how people send, receive, and manage money 
                        across different countries. From international transfers and bill payments 
                        to instant currency conversion, the platform delivers a fast, secure, and 
                        stress-free financial experience tailored for modern users. With trusted 
                        payment systems, transparent processes, competitive exchange rates, 
                        and secure escrow protection, Tazro helps individuals and businesses 
                        move money confidently while staying connected globally without 
                        limitations or complexity.
                    </h6>
                </div>
            </div>

            {/* 2nd grid */}
            <div className="grid md:grid-cols-2 pt-20 md:pt-28 gap-10 md:gap-20 items-center">
                <div data-aos="fade-up" data-aos-delay="100">
                    <h1 className="flex items-center space-x-1">
                        <img src="/Header-img.png" alt="header" />
                        <span className="text-[#170E46] font-medium text-lg">Build Around You</span>
                    </h1>
                    <h1 className="text-[#170E46] font-semibold text-lg py-2">
                        Your Wealth. Your Rules.
                    </h1>
                    <h6 className="text-[#170E46] text-sm">
                        Just one smart platform that learns, adapts, <br />and grows alongside you.
                    </h6>
                    <div className="mt-6 space-y-3">
                        <div className="bg-white w-full rounded-xl py-4 px-4 border border-[#8070FE2B]">
                            <div className="flex space-x-2.5 items-center">
                                <div className="bg-[#8070FE] px-3 py-1.5 rounded-lg shadow-2xl">
                                    <LuEye className="text-white" />
                                </div>
                                <span className="text-[#170E46] font-semibold">Total Financial Visibility</span>
                            </div>
                            <h6 className="text-[#170E46] text-sm font-medium mt-1 ms-13">
                                Track your spending, transfers, and balances <br /> in real time with a clear overview of your finances.
                            </h6>
                        </div>
                        <div className="bg-white w-full rounded-xl py-4 px-4 border border-[#8070FE2B]">
                            <div className="flex space-x-2.5 items-center">
                                <div className="bg-[#8070FE] px-3 py-1.5 rounded-lg shadow-2xl">
                                    <LuShieldCheck className="text-white" />
                                </div>
                                <span className="text-[#170E46] font-semibold">Secure Money Management</span>
                            </div>
                        </div>
                        <div className="bg-white w-full rounded-xl py-4 px-4 border border-[#8070FE2B]">
                            <div className="flex space-x-2.5 items-center">
                                <div className="bg-[#8070FE] px-3 py-1.5 rounded-lg shadow-2xl">
                                    <LuRepeat className="text-white" />
                                </div>
                                <span className="text-[#170E46] font-semibold">Seamless Currency Exchange</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="100">
                    <img src="/Wealth-img.jpg" alt="Tarzo" />
                </div>
            </div>
        </div>
    );
}
 
export default Trust;