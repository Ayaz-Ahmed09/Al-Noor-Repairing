import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle, Calendar } from "lucide-react";

interface HeroProps {
        title?: React.ReactNode;
        subtitle?: string;
        imageSrc?: string;
        whatsappNumber?: string;
        phoneNumber?: string;
}

export default function StylishHero({
        title = (
                <>
                        A/C <span className="italic text-white/60">REPAIR</span>
                        <br />
                        SERVICES
                </>
        ),
        subtitle = "We provide expert solutions for all types of AC systems",
        imageSrc = "/images/ac-hero-1.png",
        whatsappNumber = "+971000000000",
        phoneNumber = "+971000000000"
}: HeroProps) {
        return (
                <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
                        {/* Background Image Container */}
                        <div className="absolute inset-0 z-0">
                                <Image
                                        src={imageSrc}
                                        alt="Hero background visual"
                                        fill
                                        priority
                                        quality={90}
                                        sizes="100vw"
                                        className="object-cover object-center"
                                        placeholder="blur"
                                        blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JYgCdAEO/hepgAAA/vxbP//YOf/0t//LJ///kf/+oB///Uf/2n4AAA=="
                                />
                                {/* Premium Gradient Overlay to maintain text readability */}
                                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />
                        </div>

                        {/* Content Container (zero box layout, elements float on background) */}
                        <div className="relative z-10 w-full px-4 text-center max-w-5xl mx-auto">
                                {/* EYEBROW */}
                                <span
                                        className="mb-6 inline-flex items-center gap-2 rounded-full
                                        border border-white/20 bg-white/5 px-4 py-1.5
                                        text-[10px] font-bold uppercase tracking-[0.3em]
                                        text-white/80 sm:text-xs backdrop-blur-md"
                                >
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                                        Book Your Ac Servicing While Staying At Home
                                </span>

                                {/* HEADLINE (Keeping original typography structure) */}
                                <h1
                                        className="font-syne mt-4 text-[2rem] font-extrabold leading-[0.9]
                                        tracking-tighter text-white sm:text-4xl md:text-5xl
                                        lg:text-6xl drop-shadow-xl"
                                >
                                        {title}
                                </h1>

                                {/* DESCRIPTION */}
                                <p
                                        className="mx-auto mt-6 max-w-[280px] text-sm leading-relaxed
                                        text-white/90 sm:mt-8 sm:max-w-md sm:text-base
                                        md:max-w-lg md:text-lg drop-shadow"
                                >
                                        {subtitle}
                                </p>

                                {/* CTA BUTTONS */}
                                <div
                                        className="mt-8 flex flex-col items-center gap-3
                                        sm:mt-12 sm:flex-row sm:justify-center sm:gap-4"
                                >
                                        {/* Desktop Only: Book Now & WhatsApp */}
                                        <Link
                                                href="/book"
                                                className="hidden sm:inline-flex w-full items-center justify-center gap-2
                                                rounded-full bg-white px-8 py-3.5 text-sm font-black
                                                uppercase tracking-tight text-black transition-all
                                                duration-300 hover:scale-[1.03]
                                                hover:shadow-[0_0_30px_rgba(255,255,255,.3)]
                                                active:scale-95 sm:w-auto sm:px-12 sm:py-4"
                                        >
                                                <Calendar className="w-5 h-5" />
                                                Book Now
                                        </Link>

                                        <Link
                                                href={`https://wa.me/${whatsappNumber}`}
                                                className="hidden sm:inline-flex w-full items-center justify-center gap-2 rounded-full
                                                border border-white/30 bg-black/30 px-8 py-3.5
                                                text-sm font-bold uppercase tracking-tight text-white
                                                backdrop-blur-md transition-all duration-300 hover:border-white/60
                                                hover:bg-white/15 active:scale-95 sm:w-auto sm:px-10 sm:py-4"
                                        >
                                                <MessageCircle className="w-5 h-5" />
                                                WhatsApp
                                        </Link>

                                        {/* Mobile Only: Call */}
                                        <Link
                                                href={`tel:${phoneNumber}`}
                                                className="sm:hidden inline-flex w-full items-center justify-center gap-2
                                                rounded-full bg-white px-8 py-3.5 text-sm font-black
                                                uppercase tracking-tight text-black transition-all
                                                duration-300 hover:scale-[1.03]
                                                hover:shadow-[0_0_30px_rgba(255,255,255,.3)]
                                                active:scale-95"
                                        >
                                                <PhoneCall className="w-5 h-5" />
                                                Call Now
                                        </Link>
                                </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div
                                className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2
                                flex-col items-center gap-1.5 animate-bounce sm:bottom-10"
                        >
                                <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/60">
                                        Scroll
                                </span>
                                <svg
                                        className="h-4 w-4 text-white/60"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                >
                                        <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                </svg>
                        </div>
                </section>
        );
}