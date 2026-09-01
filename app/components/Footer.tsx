"use client"

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (
        <footer className="bg-[#FAFAFA] px-6 md:px-10 lg:px-16 py-10 md:py-16" data-aos="fade-up" id="footer">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">

                {/* Brand / Description */}
                <div>
                    <h1 className="text-[#170E46] font-semibold text-md md:text-2xl">
                        Tazro
                    </h1>

                    <p className="text-[#170E46] pt-3 text-sm leading-6">
                        Tazro is a modern finance platform designed to
                        <br className="hidden md:block" />
                        simplify global payments, currency conversion,
                        <br className="hidden md:block" />
                        and everyday financial transactions. Built for
                        speed, security, and convenience.
                    </p>

                    <p className="text-[#170E46] pt-8 text-sm">
                        © 2025 Tazro. All rights reserved.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row gap-8 md:gap-16">

                    {/* Platform */}
                    <div className="space-y-3">
                        <h2 className="text-[#170E46] font-semibold text-md">
                            Platform
                        </h2>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Why Tazro?
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Pricing
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                FAQ
                            </a>
                        </p>
                    </div>


                    {/* Legal & Support */}
                    <div className="space-y-3">
                        <h2 className="text-[#170E46] font-semibold text-md">
                            Legal & Support
                        </h2>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Contact Us
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Privacy Policy
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Terms & Conditions
                            </a>
                        </p>
                    </div>


                    {/* Links */}
                    <div className="space-y-3">
                        <h2 className="text-[#170E46] font-semibold text-md">
                            Links
                        </h2>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Features
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                About Us
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                How it Works
                            </a>
                        </p>

                        <p>
                            <a href="#" className="text-[#170E46] text-sm hover:text-[#8070FE] transition-colors">
                                Packages
                            </a>
                        </p>

                        {/* Social Media */}
                        <div className="flex lg:justify-end pt-3 items-start gap-3">
                            {/* LinkedIn */}
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="bg-[#170E46] text-white p-2 rounded-lg hover:bg-[#8070FE] transition-colors">
                                <FaLinkedin size={15} />
                            </a>

                            {/* X */}
                            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="bg-[#170E46] text-white p-2 rounded-lg hover:bg-[#8070FE] transition-colors">
                                <FaXTwitter size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;