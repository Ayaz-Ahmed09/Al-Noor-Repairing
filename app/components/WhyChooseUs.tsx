"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
        const count = useMotionValue(from);
        const rounded = useTransform(count, (latest) => Math.round(latest));
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

        useEffect(() => {
                if (inView) {
                        animate(count, to, { duration });
                }
        }, [count, inView, to, duration]);

        return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function WhyChooseUs() {
        return (
                <section className="relative min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden border-t border-white/5 w-full bg-black py-20 lg:py-0">
                        {/* Background */}
                        <div className="absolute inset-0 z-0 bg-black">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,1)_100%)]" />
                        </div>

                        <div className="relative z-10 w-full px-4 max-w-7xl mx-auto flex flex-col h-full justify-center items-center">
                                {/* Title Area */}
                                <div className="w-full text-center mb-8 mt-16 lg:mt-0">
                                        <div className="inline-flex items-center gap-4 mb-4">
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Why Choose Us</span>
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                        </div>
                                        <h4 className="text-3xl font-syne sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-center">
                                                Experience the Best in <br className="hidden md:block" />
                                                <span className="text-white/60">AC Maintenance & Repair</span>
                                        </h4>
                                </div>

                                {/* Content */}
                                <div className="w-full max-w-3xl text-center mb-16">
                                        <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                                                We pride ourselves on delivering premium, reliable, and swift services. With a team of certified professionals, we ensure your comfort is never compromised. Let our track record speak for itself.
                                        </p>
                                </div>

                                {/* Counters Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
                                        <div className="flex flex-col items-center justify-center p-6 border border-white/20 bg-black/40 backdrop-blur-md rounded-3xl hover:border-white/50 transition-all duration-500 hover:-translate-y-2 group">
                                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-syne flex items-center">
                                                        <Counter from={0} to={15} />
                                                        <span className="text-white/70 ml-1">+</span>
                                                </div>
                                                <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium text-center mt-2">Years Experience</div>
                                                <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <div className="flex flex-col items-center justify-center p-6 border border-white/20 bg-black/40 backdrop-blur-md rounded-3xl hover:border-white/50 transition-all duration-500 hover:-translate-y-2 group">
                                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-syne flex items-center">
                                                        <Counter from={0} to={5000} />
                                                        <span className="text-white/70 ml-1">+</span>
                                                </div>
                                                <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium text-center mt-2">Happy Clients</div>
                                                <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <div className="flex flex-col items-center justify-center p-6 border border-white/20 bg-black/40 backdrop-blur-md rounded-3xl hover:border-white/50 transition-all duration-500 hover:-translate-y-2 group">
                                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-syne flex items-center">
                                                        <Counter from={0} to={50} />
                                                        <span className="text-white/70 ml-1">+</span>
                                                </div>
                                                <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium text-center mt-2">Expert Techs</div>
                                                <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        <div className="flex flex-col items-center justify-center p-6 border border-white/20 bg-black/40 backdrop-blur-md rounded-3xl hover:border-white/50 transition-all duration-500 hover:-translate-y-2 group">
                                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-syne flex items-center">
                                                        <Counter from={0} to={100} />
                                                        <span className="text-white/70 ml-1">%</span>
                                                </div>
                                                <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium text-center mt-2">Satisfaction</div>
                                                <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
