export function TestimonialsSection() {
        return (
                <div className="w-full h-full min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                                {[1, 2, 3].map((item) => (
                                        <div key={item} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
                                                <div className="flex text-yellow-500 mb-4 justify-center">
                                                        {"★".repeat(5)}
                                                </div>
                                                <p className="text-gray-300 italic mb-6">
                                                        "Outstanding service! The technicians were professional, prompt, and resolved my AC issues the very same day. Highly recommended."
                                                </p>
                                                <h4 className="font-bold">- Happy Customer</h4>
                                        </div>
                                ))}
                        </div>
                </div>
        );
}
