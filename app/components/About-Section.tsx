import Image from "next/image";
import { Calendar, MessageCircle, PhoneCall, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LampContainer } from "./ui/Lamp";



const GlowingButton = ({ href, className = "", label, icon: Icon }: { href: string, className?: string, label: string, icon?: LucideIcon | React.ElementType }) => (
        <Link href={href} className={`block ${className}`}>
                <div className="inline-block w-full transition-transform hover:scale-[1.03] active:scale-[0.97]">
                        <div className="relative px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center min-w-[160px] hover:border-white/60 hover:bg-white/10">
                                <span className="text-white font-medium tracking-wider text-xs md:text-sm flex items-center gap-2 whitespace-nowrap uppercase">
                                        {label}
                                        {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
                                </span>
                        </div>
                </div>
        </Link>
);

export function AboutSection() {
        const phoneNumber = "+971555555555";
        const whatsappNumber = "+971555555555";

        return (
                <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden border-t border-white/5 w-full bg-black py-20 lg:py-0">
                        {/* Static Dark Background */}
                        <div className="absolute inset-0 z-0 bg-black">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,1)_100%)]" />
                        </div>

                        <div className="relative z-10 w-full px-4 max-w-360 mx-auto flex flex-col h-full justify-center">
                                {/* Title Area (Top) */}
                                <div className="w-full text-center mb-10 mt-16 lg:mt-0">
                                        <div className="inline-flex items-center gap-4 mb-4">
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Our Story</span>
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                        </div>
                                        <h2 className="text-3xl font-syne sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight hidden lg:block">
                                                Premium Tech Services <span className="text-white/60">in Dubai</span>
                                        </h2>
                                </div>

                                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
                                        {/* Left Side - Image */}
                                        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                                                <div className="relative w-full max-w-md aspect-square lg:aspect-4/5 rounded-4xl p-2 border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-white/50 hover:bg-white/5 hover:-translate-y-2 group">
                                                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                                                                <Image
                                                                        src="/images/3.png"
                                                                        alt="About Us"
                                                                        fill
                                                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                        </div>
                                                        <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </div>
                                        </div>

                                        {/* Right Side - Text and Buttons */}
                                        <div className="w-full lg:w-[55%] flex flex-col justify-start lg:justify-center">

                                                <div className="relative p-8 md:p-10 rounded-4xl border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-white/50 hover:bg-white/5 hover:-translate-y-2 group w-full max-w-2xl">
                                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight lg:hidden">
                                                                Premium Tech <br />
                                                                <span className="text-white/60">Services in Dubai</span>
                                                        </h2>


                                                        <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed font-light">
                                                                We are a premier service provider dedicated to delivering unparalleled quality and reliability. With years of expertise in the industry, our certified professionals ensure that your systems operate at peak performance.
                                                        </p>

                                                        <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
                                                                From routine maintenance to complex repairs, we utilize the latest techniques and premium materials to guarantee your complete satisfaction and comfort round the clock.
                                                        </p>
                                                        {/* Buttons Layout exactly matching the text container style */}
                                                        <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4 w-full">
                                                                {/* Desktop Only Buttons */}
                                                                <GlowingButton
                                                                        href="/book"
                                                                        label="Book Now"
                                                                        icon={Calendar}
                                                                        className="hidden md:block w-fit"
                                                                />
                                                                <GlowingButton
                                                                        href={`https://wa.me/${whatsappNumber}`}
                                                                        label="WhatsApp"
                                                                        icon={MessageCircle}
                                                                        className="hidden md:block w-fit"
                                                                />

                                                                {/* Mobile Only Buttons */}
                                                                <GlowingButton
                                                                        href={`https://wa.me/${whatsappNumber}`}
                                                                        label="WhatsApp"
                                                                        icon={MessageCircle}
                                                                        className="block md:hidden w-full"
                                                                />
                                                                <GlowingButton
                                                                        href={`tel:${phoneNumber}`}
                                                                        label="Call Now"
                                                                        icon={PhoneCall}
                                                                        className="block md:hidden w-full"
                                                                />
                                                        </div>

                                                        {/* Decorative Glow */}
                                                        <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
