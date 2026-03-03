"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactUs = () => {
        const router = useRouter();
        const [result, setResult] = useState("");
        const [isSubmitting, setIsSubmitting] = useState(false);

        const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setIsSubmitting(true);
                setResult("Sending....");

                const formData = new FormData(event.currentTarget);
                formData.append("access_key", "208242f1-579d-4570-8d51-1f8b7a9abfa4");

                try {
                        const response = await fetch("https://api.web3forms.com/submit", {
                                method: "POST",
                                body: formData,
                        });

                        const data = await response.json();
                        if (data.success) {
                                setResult("Form Submitted Successfully");
                                (event.target as HTMLFormElement).reset();
                                router.push("/thank-you");
                        } else {
                                setResult(data.message || "Something went wrong.");
                        }
                } catch (error) {
                        console.error(error);
                        setResult("Error submitting form.");
                } finally {
                        setIsSubmitting(false);
                }
        };

        return (
                <div className="relative min-h-screen w-full overflow-hidden bg-black font-syne pt-20">
                        {/* Background Image with Overlay */}
                        <div
                                className="absolute inset-0 z-0 bg-[url('/images/contactus-bg.png')] bg-cover bg-center bg-fixed bg-no-repeat"
                        />
                        {/* Dark/Glassy Default Overlay for text readability */}
                        <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" />

                        {/* Content Container */}
                        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center py-12">

                                {/* Title Section */}
                                <div className="text-center mb-12 sm:mb-16">
                                        <div className="inline-flex items-center gap-4 mb-4">
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                                <span className="text-white/70 uppercase tracking-widest text-sm font-semibold">Get In Touch</span>
                                                <div className="h-[2px] w-8 md:w-12 bg-white/50" />
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                                                Contact <span className="text-white/60">Us</span>
                                        </h1>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
                                        {/* Left Side: Contact Information Cards */}
                                        <div className="flex flex-col gap-6 w-full lg:w-[40%]">
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] flex-1 shadow-2xl transition-all duration-300 hover:bg-white-[0.15] hover:border-white/40 group flex flex-col justify-center">
                                                        <h3 className="text-2xl font-bold mb-3 text-white">Call Us</h3>
                                                        <p className="text-white/80 font-semibold text-xl group-hover:text-white transition-colors">
                                                                +971 00 000 0000
                                                        </p>
                                                        <p className="text-white/60 mt-3 text-sm leading-relaxed font-light">
                                                                Available 24/7 for emergency repairs and immediate assistance.
                                                        </p>
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] flex-1 shadow-2xl transition-all duration-300 hover:bg-white-[0.15] hover:border-white/40 group flex flex-col justify-center">
                                                        <h3 className="text-2xl font-bold mb-3 text-white">Email Us</h3>
                                                        <p className="text-white/80 font-semibold text-xl break-all group-hover:text-white transition-colors">
                                                                info@al-noor-services.com
                                                        </p>
                                                        <p className="text-white/60 mt-3 text-sm leading-relaxed font-light">
                                                                Drop us a line anytime. We typically respond within 24 hours.
                                                        </p>
                                                </div>
                                        </div>

                                        {/* Right Side: Form Container */}
                                        <div className="w-full lg:w-[60%]">
                                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full">

                                                        {/* Decorative internal white glow */}
                                                        <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none -z-10 -translate-y-1/4 translate-x-1/4"></div>

                                                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide">
                                                                Send a Message
                                                        </h3>

                                                        <form onSubmit={onSubmit} className="flex flex-col gap-5 relative z-10 w-full">
                                                                <div className="flex flex-col sm:flex-row gap-5">
                                                                        <div className="flex-1 flex flex-col gap-2">
                                                                                <label className="text-sm text-white/70 font-medium ml-1 tracking-wide">
                                                                                        Name
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        name="name"
                                                                                        required
                                                                                        placeholder="John Doe"
                                                                                        className="bg-black/40 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 outline-none focus:border-white/60 focus:bg-black/60 transition-all duration-300 w-full"
                                                                                />
                                                                        </div>
                                                                        <div className="flex-1 flex flex-col gap-2">
                                                                                <label className="text-sm text-white/70 font-medium ml-1 tracking-wide">
                                                                                        Email
                                                                                </label>
                                                                                <input
                                                                                        type="email"
                                                                                        name="email"
                                                                                        required
                                                                                        placeholder="john@example.com"
                                                                                        className="bg-black/40 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 outline-none focus:border-white/60 focus:bg-black/60 transition-all duration-300 w-full"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="flex flex-col gap-2">
                                                                        <label className="text-sm text-white/70 font-medium ml-1 tracking-wide">
                                                                                Phone Number
                                                                        </label>
                                                                        <input
                                                                                type="tel"
                                                                                name="phone"
                                                                                required
                                                                                placeholder="+1 234 567 890"
                                                                                className="bg-black/40 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 outline-none focus:border-white/60 focus:bg-black/60 transition-all duration-300 w-full"
                                                                        />
                                                                </div>

                                                                <div className="flex flex-col gap-2">
                                                                        <label className="text-sm text-white/70 font-medium ml-1 tracking-wide">
                                                                                Message
                                                                        </label>
                                                                        <textarea
                                                                                name="message"
                                                                                required
                                                                                rows={4}
                                                                                placeholder="How can we help you?"
                                                                                className="bg-black/40 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 outline-none focus:border-white/60 focus:bg-black/60 transition-all duration-300 w-full resize-none"
                                                                        ></textarea>
                                                                </div>

                                                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                                                                        <button
                                                                                type="submit"
                                                                                disabled={isSubmitting}
                                                                                className="w-full sm:w-auto px-10 py-3.5 bg-white text-black font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                                                        >
                                                                                {isSubmitting ? "Sending..." : "Submit Message"}
                                                                        </button>

                                                                        {result && (
                                                                                <div
                                                                                        className={`flex-1 text-center sm:text-right px-4 py-2 rounded-xl border backdrop-blur-sm ${result.includes("Success")
                                                                                                ? "bg-green-500/20 border-green-500/30 text-green-300"
                                                                                                : result.includes("Sending")
                                                                                                        ? "bg-white/10 border-white/20 text-white/80"
                                                                                                        : "bg-red-500/20 border-red-500/30 text-red-300"
                                                                                                }`}
                                                                                >
                                                                                        <span className="text-sm font-medium tracking-wide">
                                                                                                {result}
                                                                                        </span>
                                                                                </div>
                                                                        )}
                                                                </div>
                                                        </form>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default ContactUs