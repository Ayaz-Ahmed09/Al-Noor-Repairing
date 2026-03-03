"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
        const [mounted, setMounted] = useState(false);
        useEffect(() => {
                const timer = setTimeout(() => {
                        setMounted(true);
                }, 50);
                return () => clearTimeout(timer);
        }, []);

        return (
                <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                        {/* Ambient Glows */}
                        <div className={`absolute top-1/4 left-1/4 w-120 h-120 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-all duration-[2000ms] ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
                        <div className={`absolute bottom-1/4 right-1/4 w-120 h-120 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none transition-all duration-[2000ms] delay-300 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>

                        <div className={`relative z-10 text-center transition-all duration-1000 transform ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
                                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                                        Thank You!
                                </h1>
                                <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                                        We have received your message and will get back to you shortly.
                                </p>

                                <div className={`mt-10 transition-all duration-1000 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                                        <Link href="/" className="inline-flex items-center justify-center px-10 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-95">
                                                Return to Home
                                        </Link>
                                </div>
                        </div>
                </div>
        );
}
