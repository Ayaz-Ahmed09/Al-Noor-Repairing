"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
        {
                question: "What is the purpose of this website?",
                answer:
                        "We provide premium and professional air conditioning services, including cleaning, repairing, maintenance, and installation for residential, commercial, and industrial clients in Dubai.",
        },
        {
                question: "How do I contact support?",
                answer:
                        "You can contact our support team through the Contact Us section using the provided phone number, WhatsApp link, or by filling out the online inquiry form.",
        },
        {
                question: "Do you offer emergency AC repair services?",
                answer:
                        "Yes, we offer 24/7 emergency AC repair services across Dubai to ensure your comfort is not compromised.",
        },
        {
                question: "What types of AC units do you service?",
                answer:
                        "We service all types of AC units including split, window, centralized HVAC systems, and industrial chillers.",
        },
        {
                question: "Are your technicians certified?",
                answer:
                        "Absolutely. All our technicians are certified, highly trained, and experienced in handling a wide range of AC-related issues.",
        },
];

export function FaqSection() {
        const [openIndex, setOpenIndex] = useState<number | null>(null);

        const toggleFaq = (index: number) => {
                setOpenIndex(openIndex === index ? null : index);
        };

        return (
                <div className="w-full h-full min-h-screen bg-[#111111] text-white py-16 px-6 md:px-16 flex items-center justify-center">
                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                                {/* Left Side: Heading */}
                                <div className="pt-4 lg:sticky lg:top-1/4">
                                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                                                Frequently asked<br />questions
                                        </h2>
                                </div>

                                {/* Right Side: Accordion */}
                                <div className="w-full">
                                        {" "}  {/* Removed divide-y completely */}
                                        {faqs.map((faq, index) => {
                                                const isOpen = openIndex === index;
                                                return (
                                                        <div key={index} className="border-b border-zinc-800 last:border-b-0 py-6">
                                                                <button
                                                                        onClick={() => toggleFaq(index)}
                                                                        className="w-full flex items-center text-left focus:outline-none group gap-4"
                                                                >
                                                                        <span className="text-blue-500 font-bold shrink-0">
                                                                                {isOpen ? (
                                                                                        <Minus className="h-6 w-6 stroke-[2.5]" />
                                                                                ) : (
                                                                                        <Plus className="h-6 w-6 stroke-[2.5]" />
                                                                                )}
                                                                        </span>
                                                                        <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                                                                {faq.question}
                                                                        </span>
                                                                </button>
                                                                <AnimatePresence initial={false}>
                                                                        {isOpen && (
                                                                                <motion.div
                                                                                        initial={{ height: 0, opacity: 0 }}
                                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                                        exit={{ height: 0, opacity: 0 }}
                                                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                                        className="overflow-hidden"
                                                                                >
                                                                                        <div className="pt-4 pb-2 text-gray-400 pl-10 text-base md:text-lg">
                                                                                                {faq.answer}
                                                                                        </div>
                                                                                </motion.div>
                                                                        )}
                                                                </AnimatePresence>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>
                </div>
        );
}
