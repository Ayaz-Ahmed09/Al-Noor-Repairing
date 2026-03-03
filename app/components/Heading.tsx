"use client"
import React from 'react'
import { motion } from 'motion/react'
import { FlipWords } from './ui/flip-words'
import { LampContainer } from './ui/Lamp';

const Heading = () => {
        const words = ["H-VAC", "Chiller", "Split AC", "Window-Ac"];
        return (
                <LampContainer>
                        <motion.div initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                        delay: 0.3,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                }}
                                className="flex flex-col items-center justify-center text-center mt-20"
                        >
                                <span
                                        className="mb-6 inline-flex items-center gap-2 rounded-full
                                        border border-white/20 bg-white/5 px-4 py-1.5
                                        text-[10px] font-bold uppercase tracking-[0.3em]
                                        text-white/80 sm:text-xs backdrop-blur-md"
                                >
                                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-400" />
                                        General Services
                                </span>

                                <h2
                                        className="font-syne mt-4 text-[2rem] font-extrabold leading-[1.1]
                                        tracking-tighter text-white sm:text-4xl md:text-5xl
                                        lg:text-6xl drop-shadow-xl max-w-4xl"
                                >
                                        WELCOME TO OUR <br className="hidden sm:block" />
                                        <span className="italic text-neutral-400/80">GENERAL SERVICES</span>
                                </h2>

                                <div className="mt-6 flex flex-col items-center justify-center gap-3 w-full">
                                        <p
                                                className="mx-auto max-w-[280px] text-sm leading-relaxed
                                                text-white/90 sm:max-w-md sm:text-base
                                                md:max-w-xl md:text-lg drop-shadow"
                                        >
                                                WE PROVIDE EXPERT SOLUTIONS FOR ALL TYPES OF AC SYSTEMS
                                        </p>
                                        <FlipWords words={words} duration={2000} className='text-3xl sm:text-4xl font-extrabold text-blue-400 font-syne mt-2' />
                                </div>
                        </motion.div>
                </LampContainer>
        )
}

export default Heading