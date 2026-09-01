"use client"

import React, { useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
    {
        id: 1,
        question: "How does Tazro work?",
        answer:
            "Tazro simplifies international payments by enabling fast cross-border transfers, currency exchanges, and bill payments from a single dashboard.",
    },
    {
        id: 2,
        question: "Does Tazro support bill payments?",
        answer:
            "Yes, users can conveniently pay bills and manage everyday payments through the platform.",
    },
    {
        id: 3,
        question: "How do I track my transactions?",
        answer:
            "You can track all incoming and outgoing payments in real-time under the Activity tab in your dashboard.",
    },
    {
        id: 4,
        question: "Is Tazro secure?",
        answer:
            "We use bank-grade encryption and multi-factor authentication to ensure your funds and financial data are always protected.",
    },
    {
        id: 5,
        question: "Are there hidden charges on Tazro?",
        answer:
            "No, Tazro operates with complete transparency. All exchange rates and transfer fees are displayed upfront before you confirm.",
    },
    {
        id: 6,
        question: "Can I receive money through Tazro?",
        answer:
            "Yes, you can generate virtual account details to receive payments directly from supported international countries.",
    },
    {
        id: 7,
        question: "How fast are transfers on Tazro?",
        answer:
            "Most transactions are processed instantly or completed within a few minutes, depending on the destination currency.",
    },
    {
        id: 8,
        question: "Can businesses use Tazro?",
        answer:
            "Yes, we offer business accounts tailored for freelancers, remote teams, and global enterprises to handle payroll and invoices.",
    },
    {
        id: 9,
        question: "How do I contact support?",
        answer:
            "Our customer support team is available 24/7 via live in-app chat or email at support@tazro.com.",
    },
    {
        id: 10,
        question: "Can I convert currencies instantly?",
        answer:
            "Yes, instant multi-currency conversions are available directly within your wallet balance.",
    },
    {
        id: 11,
        question: "What currencies are currently supported?",
        answer:
            "We support major global currencies including USD, EUR, GBP, NGN, KES, GHS, and RWF.",
    },
    {
        id: 12,
        question: "Are transfers customizable?",
        answer:
            "You can schedule recurring payments and set auto-conversions based on target exchange rates.",
    },
];

const Faq = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section className="bg-white py-16 px-5 md:px-10 lg:px-16" id="faq">

            {/* Header */}
            <div className="flex justify-center items-center space-x-1" data-aos="fade-up">
                <img src="/Header-img.png" alt="header" />
                <span className="text-[#170E46] font-medium text-lg">
                    FAQs
                </span>
            </div>

            {/* Heading */}
            <div className="mt-3" data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-[#170E46] font-medium text-lg md:text-4xl text-center">
                    Most Asked Questions
                </h1>

                <p className="text-[#170E46] mt-2 text-sm md:text-lg text-center">
                    Find quick answers to common questions about payments,
                    <br className="hidden md:block" />
                    transfers, currency conversion, security, and how Tazro works.
                </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start mt-10">

                {faqData.map((faq) => {
                    const isOpen = openId === faq.id;

                    return (
                        <div
                            key={faq.id}
                            onClick={() => toggleFAQ(faq.id)}
                            data-aos="fade-up"
                            data-aos-delay={faq.id * 100}
                            className={`cursor-pointer transition-all duration-200 p-6 rounded-2xl border ${
                                isOpen
                                ? "bg-[#F5F4FA] border-gray-200 shadow-sm"
                                : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
                            }`}>
                            {/* Question */}
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-[#170E46] font-medium text-base md:text-md leading-snug">
                                    {faq.question}
                                </h3>

                                <button type="button" aria-label={ isOpen ? "Close question" : "Open question" } className="text-gray-700 hover:text-black shrink-0" >
                                    {isOpen ? (
                                        <HiX size={20} />
                                    ) : (
                                        <HiPlus size={20} />
                                    )}
                                </button>

                            </div>

                            {/* Answer */}
                            {isOpen && (
                                <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t border-gray-200/50 pt-3">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Faq;