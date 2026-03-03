"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useState } from "react";

// Inline SVG icons for optimal performance
const Icons = {
        User: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        ),
        Phone: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        ),
        Mail: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        ),
        MapPin: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
        ),
        Tool: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
        ),
        MessageSquare: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        ),
        Calendar: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
        ),
        AlertCircle: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
        ),
        Loader2: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
        ),
        Send: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" /></svg>
        ),
        ChevronDown: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        ),
        ArrowLeft: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
        ),
};

const SERVICE_OPTIONS = [
        "A/C Compressor Repair",
        "A/C Installation",
        "A/C Maintenance",
        "A/C Gas Charging",
        "A/C Gas Refilling"
];

export default function ServicesForm() {
        const formRef = useRef<HTMLFormElement>(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        const [formData, setFormData] = useState({
                name: "",
                email: "",
                phone: "",
                address: "",
                date: "",
                service: "",
                message: "",
        });

        const router = useRouter();

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                setFormData((prev) => ({ ...prev, [name]: value }));
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setIsLoading(true);
                setIsError(false);
                setErrorMessage("");

                try {
                        const formPayload = new FormData();
                        formPayload.append("access_key", "208242f1-579d-4570-8d51-1f8b7a9abfa4");
                        formPayload.append("name", formData.name);
                        formPayload.append("phone", formData.phone);
                        formPayload.append("email", formData.email);
                        formPayload.append("address", formData.address);
                        formPayload.append("contact_date", formData.date);
                        formPayload.append("service", formData.service);
                        formPayload.append("message", formData.message);

                        const response = await fetch("https://api.web3forms.com/submit", {
                                method: "POST",
                                body: formPayload as any,
                        });

                        const data = await response.json();
                        if (data.success) {
                                formRef.current?.reset();
                                router.push("/thank-you");
                        } else {
                                throw new Error(data.message || "Failed to submit form");
                        }
                } catch (error: any) {
                        console.error("Form Error:", error);
                        setIsError(true);
                        setErrorMessage(
                                error.message || "Failed to send message. Please try again."
                        );
                } finally {
                        setIsLoading(false);
                }
        };

        return (
                <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 font-syne relative z-10">
                        {/* Back arrow */}
                        <Link
                                href="/"
                                className="inline-flex items-center gap-2 mb-8 text-white/50 hover:text-white transition-colors group"
                        >
                                <span className="group-hover:-translate-x-1 transition-transform">
                                        <Icons.ArrowLeft />
                                </span>
                                <span className="text-sm font-medium">Back to Home</span>
                        </Link>

                        <div className="rounded-3xl border border-white/20 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                <div className="border-b border-white/10 bg-white/5 p-6 md:p-8 pb-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                Book a Service
                                        </h2>
                                        <p className="text-white/60">
                                                Fill in your details and we&apos;ll contact you on your preferred date.
                                        </p>
                                </div>

                                <form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="p-6 md:p-8 space-y-6"
                                >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                        <label
                                                                htmlFor="name"
                                                                className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                        >
                                                                <span className="text-white/50">
                                                                        <Icons.User />
                                                                </span>
                                                                Full Name *
                                                        </label>
                                                        <input
                                                                id="name"
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="John Doe"
                                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none"
                                                        />
                                                </div>

                                                <div className="space-y-2">
                                                        <label
                                                                htmlFor="phone"
                                                                className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                        >
                                                                <span className="text-white/50">
                                                                        <Icons.Phone />
                                                                </span>
                                                                Phone Number *
                                                        </label>
                                                        <input
                                                                id="phone"
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="+1 234 567 890"
                                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none"
                                                        />
                                                </div>
                                        </div>

                                        <div className="space-y-2">
                                                <label
                                                        htmlFor="email"
                                                        className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                >
                                                        <span className="text-white/50">
                                                                <Icons.Mail />
                                                        </span>
                                                        Email Address
                                                </label>
                                                <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@example.com"
                                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none"
                                                />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                        <label
                                                                htmlFor="address"
                                                                className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                        >
                                                                <span className="text-white/50">
                                                                        <Icons.MapPin />
                                                                </span>
                                                                Address *
                                                        </label>
                                                        <input
                                                                id="address"
                                                                type="text"
                                                                name="address"
                                                                value={formData.address}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Your complete address"
                                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none"
                                                        />
                                                </div>
                                                <div className="space-y-2">
                                                        <label
                                                                htmlFor="date"
                                                                className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                        >
                                                                <span className="text-white/50">
                                                                        <Icons.Calendar />
                                                                </span>
                                                                Preferred Contact Date *
                                                        </label>
                                                        <input
                                                                id="date"
                                                                type="date"
                                                                name="date"
                                                                value={formData.date}
                                                                onChange={handleChange}
                                                                required
                                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none color-scheme-dark"
                                                                style={{ colorScheme: "dark" }}
                                                        />
                                                </div>
                                        </div>

                                        <div className="space-y-2">
                                                <label
                                                        htmlFor="service"
                                                        className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                >
                                                        <span className="text-white/50">
                                                                <Icons.Tool />
                                                        </span>
                                                        Select Service *
                                                </label>
                                                <div className="relative">
                                                        <select
                                                                id="service"
                                                                name="service"
                                                                value={formData.service}
                                                                onChange={handleChange}
                                                                required
                                                                className="w-full px-4 py-3 pr-12 rounded-xl border border-white/10 bg-[#111] text-white focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none appearance-none cursor-pointer"
                                                        >
                                                                <option value="" disabled>Choose a service</option>
                                                                {SERVICE_OPTIONS.map((service, idx) => (
                                                                        <option key={idx} value={service}>
                                                                                {service}
                                                                        </option>
                                                                ))}
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                                                <Icons.ChevronDown />
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="space-y-2">
                                                <label
                                                        htmlFor="message"
                                                        className="text-sm font-semibold text-white/80 flex items-center gap-2"
                                                >
                                                        <span className="text-white/50">
                                                                <Icons.MessageSquare />
                                                        </span>
                                                        Additional Details
                                                </label>
                                                <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        placeholder="Describe your issue or requirements in detail..."
                                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all outline-none resize-none"
                                                />
                                        </div>

                                        {isError && (
                                                <div className="flex items-center gap-3 p-4 bg-red-900/40 border border-red-500/50 rounded-xl">
                                                        <span className="text-red-400 shrink-0">
                                                                <Icons.AlertCircle />
                                                        </span>
                                                        <div className="flex-1">
                                                                <p className="text-sm text-red-200 font-medium">
                                                                        {errorMessage}
                                                                </p>
                                                        </div>
                                                </div>
                                        )}

                                        <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
                                        >
                                                {isLoading ? (
                                                        <>
                                                                <Icons.Loader2 />
                                                                <span>Sending Request...</span>
                                                        </>
                                                ) : (
                                                        <>
                                                                <Icons.Send />
                                                                <span>Book Service Now</span>
                                                        </>
                                                )}
                                        </button>

                                        <p className="text-center text-xs text-white/40">
                                                By submitting this form, you agree to our terms and conditions. We will securely store these details.
                                        </p>
                                </form>
                        </div>
                </div>
        );
}