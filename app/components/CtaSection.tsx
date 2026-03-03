export function CtaSection() {
        return (
                <div className="w-full h-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Premium Cooling?</h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                                Book your service today and let our expert technicians ensure your environment remains perfectly comfortable year-round.
                        </p>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
                                Book a Service Now
                        </button>
                </div>
        );
}
