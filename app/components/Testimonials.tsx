"use client"

import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <div className="bg-white py-16 px-5 md:px-10 lg:px-16" id="testimonials">

            <h1 className="flex justify-center items-center space-x-1" data-aos="fade-up" data-aos-delay="100">
                <img src="/Header-img.png" alt="header" />
                <span className="text-[#170E46] font-medium text-lg">
                    Testimonials
                </span>
            </h1>

            <div className="mt-3" data-aos="fade-up" data-aos-delay="200">   
                <h1 className="text-[#170E46] font-medium text-lg md:text-4xl text-center">
                    What Our Users Say
                </h1>

                <h6 className="text-[#170E46] mt-2 text-sm md:text-lg text-center">
                    Real experiences from users enjoying seamless, 
                    <br className="hidden md:block" />
                    secure, and stress-free global payments with Tazro.
                </h6>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-7">

                {/* Testimonial 1 */}
                <div className="space-y-5 p-8 border-b md:border-b border-r border-gray-100" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        Tazro made it so easy to send money to
                        <br className="hidden md:block" />
                        my family abroad without stress.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="Aminat" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            Aminat - Nigeria
                        </h2>
                    </div>
                </div>


                {/* Testimonial 2 */}
                <div className="space-y-5 p-8 border-b md:border-b border-r border-gray-100" data-aos="zoom-in" data-aos-delay="200">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        Reliable, secure, and easy to use, exactly
                        <br className="hidden md:block" />
                        what I need from a finance app.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="Kwame" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            Kwame - Ghana
                        </h2>
                    </div>
                </div>


                {/* Testimonial 3 */}
                <div className="space-y-5 p-8 border-b lg:border-r-0 border-gray-100" data-aos="zoom-in" data-aos-delay="300">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        The exchange rates are competitive,
                        <br className="hidden md:block" />
                        and transactions are always reliable.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="Sarah" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            Sarah - Kenya
                        </h2>
                    </div>
                </div>


                {/* Testimonial 4 */}
                <div className="space-y-5 p-8 border-b md:border-r border-gray-100" data-aos="zoom-in" data-aos-delay="400">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        Sending money internationally now feels
                        <br className="hidden md:block" />
                        smooth and stress-free with Tazro.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="Chinedu" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            Chinedu - Nigeria
                        </h2>
                    </div>
                </div>


                {/* Testimonial 5 */}
                <div className="space-y-5 p-8 border-b md:border-r-0 border-gray-100" data-aos="zoom-in" data-aos-delay="500">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        Tazro made it so easy to send money to
                        <br className="hidden md:block" />
                        my family abroad without stress.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="David" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            David - Nigeria
                        </h2>
                    </div>
                </div>


                {/* Testimonial 6 */}
                <div className="space-y-5 p-8" data-aos="zoom-in" data-aos-delay="600">
                    <div className="flex space-x-2 items-center">
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                        <FaStar className="text-[#8070FE]" />
                    </div>

                    <h2 className="text-[#170E46] text-md md:text-lg font-medium">
                        I can easily convert currencies and pay
                        <br className="hidden md:block" />
                        for services all in one place.
                    </h2>

                    <div className="flex space-x-3 items-center">
                        <img src="/Wealth-img.jpg" alt="Michael" className="rounded-full w-10 h-10 object-cover" />

                        <h2 className="text-[#170E46] text-md md:text-xl">
                            Michael - Rwanda
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;