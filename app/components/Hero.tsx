"use client"

import { FaApple, FaBars } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });
  }, []);
  return (
    <section className="overflow-hidden bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,#CFC8FF_0%,#E3E0FE_45%,#F2F1FF_70%,#EEEAFE_100%)]">

      {/* Navbar */}
      <div className="relative px-4 lg:px-10 pt-3 flex justify-between items-center gap-8">
        <a href="#" className="w-20 h-20 flex items-center justify-center overflow-visible">
          <Image
            src="/Logo-img.jpg"
            alt="Tazro"
            width={90}
            height={90}
            className="w-[90px] h-[90px] object-contain"
          />
        </a>

        <div className="space-x-3 hidden md:flex">
          <a href="#" className="bg-white rounded-3xl text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
            Company
          </a>

          <a href="#features" className="bg-white rounded-3xl text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
            Features
          </a>

          <a href="#wealth" className="bg-white rounded-3xl text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
            Converter
          </a>

          <a href="#testimonials" className="bg-white rounded-3xl text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
            Blog
          </a>

          <a href="#faq" className="bg-white rounded-3xl text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
            Faqs
          </a>
        </div>

        <a href="#footer">
          <button className="bg-[#8070FE] text-white cursor-pointer rounded-3xl px-3 py-1.5 h-9 hidden md:flex">
            Contact Us
          </button>
        </a>

        {/* Menu-icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <FaBars className="text-2xl text-[#8070FE] me-2" />
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-start pt-20">
          
          {/* Close button */}
          <button onClick={() => setOpen(false)} className="absolute top-10 right-5 text-[#8070FE] text-3xl">
            <HiX />
          </button>

          {/* Menu box */}
          <div className="bg-white w-[90%] h-auto max-w-md mt-7 rounded-xl p-6 space-y-5 transform transition duration-600">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
                Company
              </a>

              <a href="#features" className="text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
                Features
              </a>

              <a href="#wealth" className="text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
                Converter
              </a>

              <a href="#testimonials" className="text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
                Blog
              </a>

              <a href="#faq" className="text-[#170E46B2] font-medium hover:text-[#8070FE] text-sm px-3 py-1.5 h-8">
                Faqs
              </a>
            </div>

            <a href="#footer">
              <button className="bg-[#8070FE] text-white cursor-pointer rounded-3xl px-3 py-1.5 h-9 hidden md:flex">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="flex flex-col justify-center items-center mt-16 md:mt-20 relative px-5 md:px-0" data-aos="zoom-in">

        <h1 className="text-[#170E46] font-medium text-2xl md:text-4xl text-center tracking-wider">
          Your Everyday Finance App <br />for Global Payments
        </h1>

        <h6 className="text-[#170E46] mt-4 text-sm text-center">
          Easily send, receive, and convert currencies while enjoying fast,
          <br className="hidden md:block" />
          secure, and stress-free transactions anytime, anywhere.
        </h6>

        <div className="mt-6 flex justify-between space-x-2 items-center">
          <button className="bg-[#170E46] py-2.5 px-4 rounded-full text-white">
            <a href="#" className="flex space-x-1">
              <FaApple className="w-5 h-5" />
              <span className="text-sm font-medium">
                Get On A Store
              </span>
            </a>
          </button>

          <button className="bg-[#8070FE] py-2.5 px-4 rounded-full text-white">
            <a href="#" className="flex space-x-1">
              <IoLogoGooglePlaystore className="w-5 h-5" />
              <span className="text-sm font-medium">
                Get On Apple Store
              </span>
            </a>
          </button>
        </div>

        <div className="mt-15 h-[284px] overflow-hidden">
          <Image
            src="/Hero-img.jpg"
            alt="hero"
            width={270}
            height={450}
            className="h-[450px] w-[260px] md:w-[270px] [clip-path:inset(0_0_37%_0)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;