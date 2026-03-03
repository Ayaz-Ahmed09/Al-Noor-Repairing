import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MessageCircle, PhoneCall, ShieldCheck, Award, Wrench, Factory } from 'lucide-react';

const GlowingButton = ({ href, className = "", label, icon: Icon }: { href: string, className?: string, label: string, icon?: React.ElementType }) => (
        <Link href={href} className={`block ${className}`}>
                <div className="inline-block w-full transition-transform hover:scale-[1.03] active:scale-[0.97]">
                        <div className="relative px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center min-w-[160px] hover:border-white/60 hover:bg-white/10 group">
                                <span className="text-white font-medium tracking-wider text-xs md:text-sm flex items-center gap-2 whitespace-nowrap uppercase">
                                        {label}
                                        {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />}
                                </span>
                        </div>
                </div>
        </Link>
);

const TrustCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
        <div className="relative p-6 md:p-8 rounded-4xl border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-white/40 hover:bg-[rgba(255,255,255,0.08)] group h-full flex flex-col items-center text-center overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10 pointer-events-none transition-transform duration-500 group-hover:scale-150"></div>

                <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-wide">{title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">{description}</p>
        </div>
);

const AboutUs = () => {
        const phoneNumber = "+971555555555";
        const whatsappNumber = "+971555555555";

        return (
                <div className="relative min-h-screen w-full overflow-hidden bg-black font-syne pt-20">
                        {/* Background Image with Overlay */}
                        <div
                                className="absolute inset-0 z-0 bg-[url('/images/aboutus-bg.png')] bg-cover bg-center bg-fixed bg-no-repeat"
                        />
                        {/* Dark/Glassy Default Overlay for text readability */}
                        <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />


                        {/* Content Container */}
                        <div className="relative z-10 w-full px-4 max-w-[1440px] mx-auto flex flex-col items-center justify-center pb-20">

                                {/* --- Hero Section --- */}
                                <div className="w-full flex flex-col items-center justify-center pt-8 md:pt-16 pb-12">
                                        {/* Title Area */}
                                        <div className="w-full text-center mb-12 lg:mb-16">
                                                <div className="inline-flex items-center gap-4 mb-4">
                                                        <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                        <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Our Story</span>
                                                        <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                </div>
                                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                                                        Premium Tech Services <br className="hidden lg:block" />
                                                        <span className="text-white/60">in Dubai</span>
                                                </h1>
                                        </div>

                                        {/* Two Column Layout Container (Glassmorphism) */}
                                        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative">

                                                {/* Left Side - Image Container */}
                                                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                                        <div className="relative w-full max-w-lg aspect-square lg:aspect-4/3 rounded-4xl p-2 border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-white/40 hover:bg-white/10 group">
                                                                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                                                                        <Image
                                                                                src="/images/3.png"
                                                                                alt="About Our Premium Services"
                                                                                fill
                                                                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                                        />
                                                                        {/* Inner subtle rim light */}
                                                                        <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
                                                                </div>
                                                        </div>
                                                </div>

                                                {/* Right Side - Information and CTA */}
                                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                                        <div className="relative p-8 md:p-12 rounded-4xl border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 group w-full max-w-2xl overflow-hidden h-full flex flex-col justify-center">

                                                                {/* Decorative background glow */}
                                                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                                                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] -z-10 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>


                                                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight leading-tight">
                                                                        Delivering Excellence
                                                                </h2>

                                                                <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed font-light">
                                                                        Al-Noor Ac-Repair is a fully licensed and insured premier service provider. We are dedicated to delivering unparalleled quality, strict adherence to safety standards, and reliable solutions.
                                                                </p>

                                                                <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed font-light">
                                                                        Our commitment to excellence is what sets us apart in Dubai&apos;s demanding market. Whether repairing a residential A/C unit or servicing large-scale commercial equipment, our in-house certified technicians bring years of specialized expertise to every job.
                                                                </p>

                                                                {/* CTA Buttons */}
                                                                <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4 w-full mt-auto">
                                                                        {/* Desktop Only Buttons */}
                                                                        <GlowingButton
                                                                                href="/book"
                                                                                label="Book Now"
                                                                                icon={Calendar}
                                                                                className="hidden md:block flex-1 max-w-[200px]"
                                                                        />
                                                                        <GlowingButton
                                                                                href={`https://wa.me/${whatsappNumber}`}
                                                                                label="WhatsApp"
                                                                                icon={MessageCircle}
                                                                                className="hidden md:block flex-1 max-w-[200px]"
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
                                                        </div>
                                                </div>

                                        </div>
                                </div>

                                {/* --- Trust & Authority Section --- */}
                                <div className="w-full mt-24 mb-16">
                                        <div className="text-center mb-16">
                                                <div className="inline-flex items-center gap-4 mb-4">
                                                        <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                        <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Reliability</span>
                                                        <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                </div>
                                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                                                        Why Trust <span className="text-white/60">Us?</span>
                                                </h2>
                                                <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light">
                                                        We operate at the highest industry standards, ensuring your complete peace of mind through strict compliance, rigorous certification, and proven results.
                                                </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                                <TrustCard
                                                        icon={ShieldCheck}
                                                        title="Google Guaranteed"
                                                        description="We adhere strictly to Google's rigorous screening process and local service policies to ensure safety and verified trust."
                                                />
                                                <TrustCard
                                                        icon={Award}
                                                        title="Licensed Company"
                                                        description="Fully licensed and insured to operate across all sectors in Dubai, complying with all municipal regulations and safety codes."
                                                />
                                                <TrustCard
                                                        icon={Wrench}
                                                        title="Certified Teams"
                                                        description="Our technicians are fully certified professionals who undergo continuous training on the latest HVAC and industrial technologies."
                                                />
                                                <TrustCard
                                                        icon={Factory}
                                                        title="Industrial Experts"
                                                        description="Beyond residential work, we specialize in heavy-duty commercial and industrial equipment, managing large-scale infrastructure."
                                                />
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default AboutUs