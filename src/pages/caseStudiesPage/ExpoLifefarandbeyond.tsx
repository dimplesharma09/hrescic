import React from 'react';

const ExpoLifefarandbeyond = () => {
    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8 flex flex-col gap-4 font-inter">
            {/* Top Section */}
            <section className="w-full max-w-[1200px] mx-auto bg-[#242b33] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-start pt-16 md:pt-24 relative">
                    {/* Header line */}
                    <div className="absolute top-10 md:top-12 left-10 md:left-16 lg:left-20 flex items-center gap-3 text-white/70 text-[13px] md:text-sm font-light">
                        <span className="text-white font-bold tracking-wide">Work</span>
                        <span className="w-[1px] h-3 bg-white/40"></span>
                        <span>Creative & video direction, and storyboard in cooperation with HrvojeKF</span>
                    </div>

                    {/* Main Paragraph */}
                    <p
                        className="text-[#f5f5f5] text-[1.75rem] md:text-3xl lg:text-[2.25rem] leading-[1.4] mt-[15%] md:mt-[20%] max-w-lg"
                        style={{ fontFamily: '"Optima", sans-serif' }}
                    >
                        The packaging served as<br />
                        the initial reference point;<br />
                        the full visual direction and<br />
                        all supporting assets were<br />
                        developed and produced in<br />
                        my studio.
                    </p>
                </div>

                <div className="flex-1 min-h-[400px] md:min-h-[600px] relative">
                    <img
                        src="/assets/Image/Rectangle 1796.png"
                        alt="Desert Structure"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </div>
            </section>

            {/* Bottom Section */}
            <section className="w-full max-w-[1200px] mx-auto bg-[#242b33] rounded-2xl shadow-lg flex flex-col p-6 md:p-10 mb-10">
                <a href="#" className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden group block cursor-pointer">
                    <img
                        src="/assets/Image/exo-bird-flight.png"
                        alt="Eagle taking flight"
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark overlay specifically for the video */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors duration-300">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-90">
                                <path d="M4 2.69127C4 1.93067 4.81552 1.44851 5.48283 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48283 22.1849C4.81552 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                            </svg>
                        </div>
                    </div>
                </a>

                <div className="mt-6 flex flex-col gap-1.5 md:px-2">
                    <h3
                        className="text-white text-[1.4rem] md:text-2xl font-normal tracking-wide"
                        style={{ fontFamily: '"Optima", sans-serif' }}
                    >
                        EXO - Life and Beyond
                    </h3>
                    <p className="text-white/70 text-[11px] md:text-xs tracking-wide uppercase font-medium mt-1">
                        Creative & video direction, and storyboard in cooperation with HrvojeKF
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ExpoLifefarandbeyond;
