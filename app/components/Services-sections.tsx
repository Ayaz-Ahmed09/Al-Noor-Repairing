"use client"
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, MessageCircle, Calendar, Star } from "lucide-react";

interface ServiceSectionProps {
        id: string;
        title: string;
        subtitle: string;
        description: string;
        href?: string;
        iconName?: string;
        src: string;
        glowColor?: string;
        accentColor?: string;
        whatsappNumber?: string;
        phoneNumber?: string;
}

interface GlowingButtonProps {
        href: string;
        label: string;
        icon?: React.ElementType;
        accentColor?: string;
        glowColor?: string;
        className?: string;
}

const GlowingButton = ({ href, label, icon: Icon, className }: GlowingButtonProps) => (
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

const FallbackIconMap: Record<string, React.ElementType> = {
        default: Star,
        calendar: Calendar,
        phone: PhoneCall,
        message: MessageCircle
};

export function ServicesSection({
        title,
        subtitle,
        description,
        href,
        iconName = "default",
        src,
        accentColor = "#ffffff",
        whatsappNumber = "+971000000000",
        phoneNumber = "+971000000000"
}: ServiceSectionProps) {
        const Icon = FallbackIconMap[iconName] || Star;
        const ref = useRef<HTMLElement>(null);

        return (
                <section
                        ref={ref}
                        className="relative h-dvh flex items-center justify-center overflow-hidden border-t border-white/5 w-full bg-black"
                >
                        {/* Background Image Container - True Full Screen & Responsive */}
                        <div className="absolute inset-0 z-0">
                                <Image
                                        src={src}
                                        alt={title}
                                        fill
                                        priority
                                        quality={85}
                                        sizes="100vw"
                                        className="object-cover object-center"
                                />
                                {/* Simple single dark overlay for readability */}
                                <div className="absolute inset-0 bg-black/50" />
                        </div>

                        {/* Content Container - No opacity/scale animations, instant load on scroll */}
                        <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                                <div className="w-full">
                                        <div className="mb-4 md:mb-8">
                                                <Icon
                                                        className="w-12 h-12 md:w-20 md:h-20 mx-auto"
                                                        style={{ color: accentColor }}
                                                />
                                        </div>

                                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 drop-shadow-xl text-white tracking-tight">
                                                {title}
                                        </h2>

                                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-medium drop-shadow-md">
                                                {subtitle}
                                        </p>

                                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed font-normal drop-shadow line-clamp-4 md:line-clamp-none">
                                                {description}
                                        </p>

                                        {/* Action Buttons Container */}
                                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
                                                {/* View Details - Conditionally rendered if href exists */}
                                                {href && (
                                                        <GlowingButton
                                                                href={href}
                                                                label="View Details"
                                                                icon={ArrowRight}
                                                                className=""
                                                        />
                                                )}

                                                {/* Desktop Only Buttons */}
                                                <GlowingButton
                                                        href="/book"
                                                        label="Book Now"
                                                        icon={Calendar}
                                                        className="hidden md:block"
                                                />
                                                <GlowingButton
                                                        href={`https://wa.me/${whatsappNumber}`}
                                                        label="WhatsApp Call"
                                                        icon={MessageCircle}
                                                        className="hidden md:block"
                                                />

                                                {/* Mobile Only Buttons */}
                                                <GlowingButton
                                                        href={`https://wa.me/${whatsappNumber}`}
                                                        label="WhatsApp"
                                                        icon={MessageCircle}
                                                        className="block md:hidden w-full max-w-[280px]"
                                                />
                                                <GlowingButton
                                                        href={`tel:${phoneNumber}`}
                                                        label="Mobile Call"
                                                        icon={PhoneCall}
                                                        className="block md:hidden w-full max-w-[280px]"
                                                />
                                        </div>
                                </div>
                        </div>
                </section>
        );
}