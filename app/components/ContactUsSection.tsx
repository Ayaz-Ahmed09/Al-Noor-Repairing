"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ContactUsSection() {
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
                <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 py-20 overflow-hidden relative">
                        {/* Global Background Glows */}
                        <div className="absolute top-0 left-1/4 w-60 h-50 bg-gray-800/80 rounded-full blur-[140px] pointer-events-none"></div>
                        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gray-700/70 rounded-full blur-[120px] pointer-events-none"></div>

                        <div className="text-center mb-12 relative z-10 w-full max-w-4xl">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                                        Contact Us
                                </h2>
                                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                                        Get in touch with us for emergency repairs, general maintenance, or any
                                        inquiries. We&lsquo;re here to help you 24/7.
                                </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full relative z-10">
                                {/* Contact Info */}
                                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                                        <div className="bg-white/3 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex-1 shadow-2xl transition-all duration-300 hover:bg-white/5 hover:border-blue-500/30 hover:shadow-[0_0_3px_rgba(59,130,246,0.15)] group">
                                                <h3 className="text-2xl font-bold mb-3 text-white">Call Us</h3>
                                                <p className="text-white/40 font-semibold text-lg drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] group-hover:text-blue-100 transition-colors">
                                                        +971 00 000 0000
                                                </p>
                                                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                                        Available 24/7 for emergency repairs and immediate assistance.
                                                </p>
                                        </div>
                                        <div className="bg-white/3 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex-1 shadow-2xl transition-all duration-300 hover:bg-white/5 hover:border-blue-500/30 hover:shadow-[0_0_3px_rgba(59,130,246,0.15)] group">
                                                <h3 className="text-2xl font-bold mb-3 text-white">Email Us</h3>
                                                <p className="text-white/40 font-semibold text-lg break-all drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] group-hover:text-blue-100 transition-colors">
                                                        info@al-noor-services.com
                                                </p>
                                                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                                        Drop us a line anytime. We typically respond within 24 hours.
                                                </p>
                                        </div>
                                </div>

                                {/* Form */}
                                <div className="w-full lg:w-2/3 bg-white/4 backdrop-blur-2xl border border-white/8 p-8 md:p-10 rounded-3xl shadow-[2px_4px_6px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                        {/* Decorative blue gradient glows inside the form card */}
                                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gray-300/60 rounded-full blur-[100px] pointer-events-none"></div>
                                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gray-600/40 rounded-full blur-[180px] pointer-events-none"></div>

                                        <h3 className="text-3xl font-semibold mb-8 relative z-10 text-white tracking-wide">
                                                Send a Message
                                        </h3>
                                        <form onSubmit={onSubmit} className="flex flex-col gap-6 relative z-10">
                                                <div className="flex flex-col md:flex-row gap-6">
                                                        <div className="flex-1 flex flex-col gap-2">
                                                                <label className="text-sm text-gray-300 font-medium ml-1 tracking-wide">
                                                                        Name
                                                                </label>
                                                                <input
                                                                        type="text"
                                                                        name="name"
                                                                        required
                                                                        placeholder="John Doe"
                                                                        className="bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 w-full shadow-inner"
                                                                />
                                                        </div>
                                                        <div className="flex-1 flex flex-col gap-2">
                                                                <label className="text-sm text-gray-300 font-medium ml-1 tracking-wide">
                                                                        Email
                                                                </label>
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        required
                                                                        placeholder="john@example.com"
                                                                        className="bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 w-full shadow-inner"
                                                                />
                                                        </div>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                        <label className="text-sm text-gray-300 font-medium ml-1 tracking-wide">
                                                                Phone Number
                                                        </label>
                                                        <input
                                                                type="tel"
                                                                name="phone"
                                                                required
                                                                placeholder="+1 234 567 890"
                                                                className="bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 w-full shadow-inner"
                                                        />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                        <label className="text-sm text-gray-300 font-medium ml-1 tracking-wide">
                                                                Message
                                                        </label>
                                                        <textarea
                                                                name="message"
                                                                required
                                                                rows={5}
                                                                placeholder="How can we help you?"
                                                                className="bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-5 py-3.5 outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 w-full resize-none shadow-inner"
                                                        ></textarea>
                                                </div>

                                                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                                                        <button
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                                className="w-full sm:w-auto px-10 py-3.5 bg-white backdrop-blur-3xl drop-shadow-2xl shadow-gray-600/60 text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(96,165,250,0.1)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
                                                        >
                                                                {isSubmitting ? "Sending..." : "Submit Message"}
                                                        </button>

                                                        {result && (
                                                                <div
                                                                        className={`flex-1 text-center sm:text-right px-4 py-2 rounded-lg border backdrop-blur-sm ${result.includes("Success")
                                                                                ? "bg-green-500/10 border-green-500/20 text-green-400"
                                                                                : result.includes("Sending")
                                                                                        ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                                                                                        : "bg-red-500/10 border-red-500/20 text-red-400"
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
        );
}
