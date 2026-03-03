import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
        return (
                <footer className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8 font-syne border-t border-white/5">
                        <div className="max-w-7xl mx-auto flex flex-col items-center">
                                {/* Logo and Typography */}
                                <Link href="/" className="flex flex-col items-center gap-3 mb-10 group">
                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                                <Image
                                                        src="/images/new-logo.png"
                                                        alt="Al-Noor Ac-Repair Logo"
                                                        width={48}
                                                        height={48}
                                                        className="object-contain"
                                                />
                                        </div>
                                        <div className="text-center">
                                                <h2 className="text-lg font-bold text-white tracking-wide">
                                                        Al-Noor Ac-Repair
                                                </h2>
                                                <p className="text-xs text-white/50 mt-1">
                                                        Your Trusted Partner for A/C Services
                                                </p>
                                        </div>
                                </Link>

                                {/* Navigation Links */}
                                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 text-sm font-medium text-white/60">
                                        <Link href="/" className="hover:text-white transition-colors duration-200">
                                                Home
                                        </Link>
                                        <Link href="/about" className="hover:text-white transition-colors duration-200">
                                                About Us
                                        </Link>
                                        <Link href="/book" className="hover:text-white transition-colors duration-200">
                                                Services
                                        </Link>
                                        <Link href="/book-now" className="hover:text-white transition-colors duration-200">
                                                Book Now
                                        </Link>
                                        <Link href="/contact" className="hover:text-white transition-colors duration-200">
                                                Contact Us
                                        </Link>
                                </nav>

                                {/* Separator Line */}
                                <div className="w-full max-w-4xl h-px bg-white/5 mb-8" />

                                {/* Bottom Section */}
                                <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
                                        <p>
                                                © {new Date().getFullYear()} Al-Noor Ac-Repair. All Rights Reserved.
                                        </p>
                                        <div className="flex items-center gap-2">
                                                <span className="font-medium text-white/50">Company License No:</span>
                                                <span>Pending</span>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
};

export default Footer;