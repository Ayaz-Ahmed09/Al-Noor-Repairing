export default function Loading() {
        return (
                <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                        {/* Ambient Glows pulsating smoothly */}
                        <div className="absolute top-1/4 left-1/4 w-120 h-120 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-500" style={{ animationDelay: '0.5s' }}></div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                                {/* Elegant Spinning Loader */}
                                <div className="relative w-20 h-20">
                                        <div className="absolute inset-0 w-20 h-20 border-4 border-white/10 rounded-full"></div>
                                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                                        <div className="absolute inset-2 w-16 h-16 border-2 border-transparent border-r-indigo-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400 animate-pulse relative left-1">
                                        LOADING
                                </h2>
                        </div>
                </div>
        );
}
