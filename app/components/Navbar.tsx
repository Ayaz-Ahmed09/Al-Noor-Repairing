"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
        { name: "A/C Compressor Repair", href: "/book" },
        // { name: "A/C Repair", href: "#" },
        { name: "A/C Installation", href: "/book" },
        { name: "A/C Maintenance", href: "/book" },
        { name: "A/C Gas Charging", href: "/book" },
        { name: "A/C Gas Refilling", href: "/book" },
];

const Navbar = () => {
        const [mobileOpen, setMobileOpen] = useState(false);
        const [servicesOpen, setServicesOpen] = useState(false);
        const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        // Track scroll
        useEffect(() => {
                const onScroll = () => setScrolled(window.scrollY > 10);
                window.addEventListener("scroll", onScroll);
                return () => window.removeEventListener("scroll", onScroll);
        }, []);

        // Close desktop dropdown on outside click
        useEffect(() => {
                const handler = (e: MouseEvent) => {
                        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                                setServicesOpen(false);
                        }
                };
                document.addEventListener("mousedown", handler);
                return () => document.removeEventListener("mousedown", handler);
        }, []);

        // Lock body scroll when mobile menu is open
        useEffect(() => {
                document.body.style.overflow = mobileOpen ? "hidden" : "";
                return () => { document.body.style.overflow = ""; };
        }, [mobileOpen]);

        // Close mobile menu on resize to desktop
        useEffect(() => {
                const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
                window.addEventListener("resize", handler);
                return () => window.removeEventListener("resize", handler);
        }, []);

        const closeMobile = () => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
        };

        return (
                <>
                        {/* ─── TOP BAR ─── */}
                        <header
                                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                                        ? "bg-black/50 shadow-[0_8px_32px_rgba(0,0,0,.45)] border-b border-white/40"
                                        : "bg-black/20 border-b border-white/20"
                                        } backdrop-blur-2xl backdrop-saturate-150`}
                        >
                                <div className="mx-auto flex   items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8 font-syne">
                                        {/* ── Logo ── */}
                                        <Link href="/" className="relative z-50 h-20 ml-1 flex items-center gap-2.5 group">
                                                <Image src="/images/new-logo.png" alt="Logo" width={80} height={80} className="w-12 h-12 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px] object-contain" />
                                        </Link>

                                        {/* ── Desktop Nav ── */}
                                        <nav className="hidden lg:flex items-center gap-0.5 font-bold">
                                                <NavLink href="/">Home</NavLink>
                                                <NavLink href="/about">About Us</NavLink>

                                                {/* Services dropdown */}
                                                <div ref={dropdownRef} className="relative">
                                                        <button
                                                                onClick={() => setServicesOpen((p) => !p)}
                                                                className="group relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                                                        >
                                                                Services
                                                                <svg
                                                                        className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        strokeWidth={2}
                                                                >
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                                <Underline />
                                                        </button>

                                                        {/* Dropdown panel */}
                                                        <div
                                                                className={`absolute left-1/2 top-full mt-3 w-[260px] -translate-x-1/2 transition-all duration-300 ${servicesOpen
                                                                        ? "visible translate-y-0 opacity-100"
                                                                        : "invisible -translate-y-2 opacity-0"
                                                                        }`}
                                                        >
                                                                {/* Arrow */}
                                                                <div className="mx-auto mb-[-6px] h-3 w-3 rotate-45 rounded-tl border-l border-t border-white/[.12] bg-black/70 backdrop-blur-2xl" />

                                                                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-2 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-2xl">
                                                                        {services.map((s) => (
                                                                                <Link
                                                                                        key={s.href}
                                                                                        href={s.href}
                                                                                        onClick={() => setServicesOpen(false)}
                                                                                        className="group/item flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/65 transition-all duration-200 hover:bg-white/[.08] hover:text-white"
                                                                                >
                                                                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25 transition-all duration-200 group-hover/item:bg-white group-hover/item:shadow-[0_0_6px_rgba(255,255,255,.5)]" />
                                                                                        {s.name}
                                                                                </Link>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>

                                                <NavLink href="/contact">Contact Us</NavLink>
                                        </nav>

                                        {/* ── Right side ── */}
                                        <div className="flex items-center gap-3">
                                                {/* Book Now – visible on md+ */}
                                                <Link
                                                        href="/book"
                                                        className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,.25)] hover:scale-[1.04] active:scale-95"
                                                >
                                                        Book Now
                                                        <ArrowIcon />
                                                </Link>

                                                {/* Hamburger – visible below lg */}
                                                <button
                                                        onClick={() => setMobileOpen((p) => !p)}
                                                        aria-label="Toggle menu"
                                                        className="relative z-50 grid h-10 w-10 place-items-center rounded-xl  bg-white/35 backdrop-blur-2xl transition-colors duration-300 hover:bg-white/[.15] lg:hidden"
                                                >
                                                        <div className="flex w-5 flex-col items-center gap-[5px]">
                                                                <span
                                                                        className={`block h-[2px] w-full origin-center rounded-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                                                                                }`}
                                                                />
                                                                <span
                                                                        className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${mobileOpen ? "scale-x-0 opacity-0" : ""
                                                                                }`}
                                                                />
                                                                <span
                                                                        className={`block h-[2px] w-full origin-center rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                                                                                }`}
                                                                />
                                                        </div>
                                                </button>
                                        </div>
                                </div>
                        </header>

                        {/* ─── MOBILE / TABLET PANEL ─── */}
                        <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? "visible" : "invisible pointer-events-none"}`}>
                                {/* Backdrop */}
                                <div
                                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
                                        onClick={closeMobile}
                                />

                                {/* Slide-in panel */}
                                <aside
                                        className={`absolute right-0 top-0 flex h-full w-full flex-col border-l border-white/20 bg-black/[.85] backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] sm:w-[380px] md:w-[420px] ${mobileOpen ? "translate-x-0" : "translate-x-full"
                                                }`}
                                >
                                        {/* Scrollable content */}
                                        <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-8 pt-24 sm:px-7">
                                                <nav className="flex flex-col gap-1">
                                                        <MobileNavLink href="/" icon={<HomeIcon />} onClick={closeMobile}>
                                                                Home
                                                        </MobileNavLink>

                                                        <MobileNavLink href="/about" icon={<InfoIcon />} onClick={closeMobile}>
                                                                About Us
                                                        </MobileNavLink>

                                                        {/* Services accordion */}
                                                        <div>
                                                                <button
                                                                        onClick={() => setMobileServicesOpen((p) => !p)}
                                                                        className="group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-lg font-medium text-white/80 transition-colors duration-200 hover:bg-white/[.04] hover:text-white"
                                                                >
                                                                        <span className="flex items-center gap-3">
                                                                                <IconWrap><ServicesIcon /></IconWrap>
                                                                                Services
                                                                        </span>
                                                                        <svg
                                                                                className={`h-5 w-5 text-white/40 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor"
                                                                                strokeWidth={2}
                                                                        >
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                </button>

                                                                <div
                                                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                                                }`}
                                                                >
                                                                        <div className="ml-6 space-y-0.5 border-l border-white/[.08] py-2 pl-5">
                                                                                {services.map((s) => (
                                                                                        <Link
                                                                                                key={s.href}
                                                                                                href={s.href}
                                                                                                onClick={closeMobile}
                                                                                                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-white/55 transition-colors duration-200 hover:bg-white/[.06] hover:text-white"
                                                                                        >
                                                                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                                                                                                {s.name}
                                                                                        </Link>
                                                                                ))}
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <MobileNavLink href="/contact" icon={<MailIcon />} onClick={closeMobile}>
                                                                Contact Us
                                                        </MobileNavLink>
                                                </nav>

                                                {/* Spacer */}
                                                <div className="flex-1" />

                                                {/* CTA */}
                                                <Link
                                                        href="/book"
                                                        onClick={closeMobile}
                                                        className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black transition-all duration-300 active:scale-95"
                                                >
                                                        Book Now
                                                        <ArrowIcon />
                                                </Link>

                                                <p className="mt-6 text-center text-xs text-white/25">
                                                        © {new Date().getFullYear()} . All rights reserved.
                                                </p>
                                        </div>
                                </aside>
                        </div>
                </>
        );
};

export default Navbar;

/* ──────────────────────────────────────────────
   SMALL HELPER COMPONENTS
   ────────────────────────────────────────────── */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
        return (
                <Link
                        href={href}
                        className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                >
                        {children}
                        <Underline />
                </Link>
        );
}

function Underline() {
        return (
                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
        );
}

function MobileNavLink({
        href,
        icon,
        onClick,
        children,
}: {
        href: string;
        icon: React.ReactNode;
        onClick: () => void;
        children: React.ReactNode;
}) {
        return (
                <Link
                        href={href}
                        onClick={onClick}
                        className="group flex items-center gap-3 rounded-2xl px-4 py-4 text-lg font-medium text-white/80 transition-colors duration-200 hover:bg-white/[.04] hover:text-white"
                >
                        <IconWrap>{icon}</IconWrap>
                        {children}
                </Link>
        );
}

function IconWrap({ children }: { children: React.ReactNode }) {
        return (
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[.1] bg-white/[.04] text-white/70 transition-colors duration-200 group-hover:bg-white/[.08] group-hover:text-white">
                        {children}
                </span>
        );
}

/* ── SVG Icons ── */

function ArrowIcon() {
        return (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
        );
}

function HomeIcon() {
        return (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
        );
}

function InfoIcon() {
        return (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
        );
}

function ServicesIcon() {
        return (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
        );
}

function MailIcon() {
        return (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
        );
}