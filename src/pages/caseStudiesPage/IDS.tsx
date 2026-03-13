import React, { useState, useEffect } from 'react';

const IDS = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State banayenge video ko toggle karne ke liye
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className="bg-white min-h-screen pt-24 pb-24 sm:pt-28 sm:pb-32">
            <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col gap-16 sm:gap-24 lg:gap-32">
                {/* --- Section 1: Hero --- */}
                {/* Container needs top/bottom margin to allow phone to pop out */}
                <section className="w-full bg-[#f5f5f5] rounded-[24px] flex flex-col lg:flex-row relative min-h-[560px] overflow-visible">

                    {/* Left Content */}
                    <div className="flex-1 pt-16 pb-20 px-8 sm:px-12 md:px-16 lg:px-[80px] flex flex-col justify-start z-20">

                        {/* Top Meta Info */}
                        <div className="flex items-center gap-4 text-[14px] text-[#444] mb-14">
                            <span className="font-semibold text-[#333]">Work</span>

                            <div className="w-[1px] h-4 bg-gray-300"></div>

                            <span className="italic text-gray-500">
                                Web UX & UI, Illustration, Video Direction
                            </span>
                        </div>

                        {/* Logo */}
                        <div className="w-auto h-12 mb-6">
                            <img
                                src="/assets/Image/Mask group.png"
                                alt="ODO Logo"
                                className="h-full w-auto object-contain"
                            />
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[40px] leading-[1.15] text-[#6f6f6f] font-light max-w-[620px]"
                            style={{ fontFamily: '"Optima", "Times New Roman", serif' }}
                        >
                            Coaching.com e-learning
                            <br />
                            Platform, creative direction,
                            <br />
                            video production, and
                            <br />
                            delivery system
                        </h1>
                    </div>

                    {/* Right Images */}
                    <div className="flex-1 relative flex items-center justify-center pr-8 sm:pr-12 md:pr-16 lg:pr-[80px]">


                        {/* Background Screens */}
                        <div className="absolute right-0 top-0 h-full z-0">
                            <img
                                src="/assets/Image/Rectangle 1740 - Sepia 1.png"
                                alt="Background Screens"
                                className="w-full h-full object-cover object-right-top"

                            />
                        </div>

                        {/* Phone Mockup */}
                        {/* <div className="relative z-30 w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]">
                            <img
                                src="/assets/Image/ids-phone-mockup.png"
                                alt="Mobile App Screens"
                                className="w-full h-auto object-contain"
                            />
                        </div> */}

                    </div>
                </section>

                {/* --- Section 2: Video & Text --- */}
                <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
                    {/* Left: Video/Animation Square */}
                    <div className="relative w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center rounded-3xl overflow-hidden aspect-square bg-gray-100">

                        {!isVideoPlaying ? (
                            <>
                                <img
                                    src="/assets/Image/Rectangle 1817.png"
                                    alt="IDS Showreel Content"
                                    className="w-full h-full object-cover absolute inset-0"
                                />

                                {/* Play Button Overlay (Center) */}
                                <button
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-[#D83669] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer z-10"
                                    aria-label="Play Video"
                                >
                                    <svg
                                        className="w-6 h-6 text-white ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Bottom Text Overlay */}
                                <div className="absolute bottom-4 left-5 md:bottom-6 md:left-6 z-10 pointer-events-none">
                                    <p className="text-white text-[10px] sm:text-[11px] md:text-xs font-light tracking-wide drop-shadow-md">
                                        IDS showreel storyboard, video direction, in cooperation with hrescic.com
                                    </p>
                                </div>
                            </>
                        ) : (
                            /* Video Iframe */
                            <iframe
                                className="w-full h-full absolute inset-0"
                                src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                                title="Showreel Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}

                    </div>

                    {/* Right: Paragraph Text */}
                    <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] text-[#333333] font-sans max-w-[480px]">
                            Creative Director with 20+ years of experience across education, consulting, healthcare, and tourism, turning complex business goals into high-performing creative systems that grow long-term value and revenue.
                        </p>
                    </div>
                </section>

                {/* --- Section 3: Bottom Full Width Image (Right Aligned) --- */}
                <section className="w-full flex justify-end">
                    {/* Diagonal floating tablets mockup */}
                    {/* Added 'relative' class here so the absolute text positions correctly */}
                    <div className="relative w-full md:w-[70%] lg:w-[65%] rounded-[24px] overflow-hidden drop-shadow-xl bg-gray-100">
                        <img
                            src="/assets/Image/Rectangle 1818.png"
                            alt="Tablet UI Mockups"
                            className="w-full h-auto object-cover"
                        />
                        {/* Gradient Overlay: Text ko highlight karne ke liye bottom me dark shadow */}
                        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-4 left-5 md:bottom-6 md:left-6">
                            <p className="text-white text-[13px] sm:text-[14px] md:text-base font-medium tracking-wide">
                                Web UX & UI
                            </p>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default IDS;