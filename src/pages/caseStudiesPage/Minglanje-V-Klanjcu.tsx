import React from 'react';

const MinglanjeVKlanjcu = () => {
    return (
        <div className="w-full bg-white pb-20 font-inter">
            {/* Top Hero Section */}
            <section className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row mt-4 sm:mt-8 mb-16 sm:mb-24 rounded-2xl overflow-hidden shadow-sm">
                {/* Left Text */}
                <div className="flex-1 bg-[#F4F3F0] p-8 sm:p-12 md:p-16 lg:p-20 relative flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-gray-800 font-medium mb-16 sm:mb-24">
                        <span className="font-semibold">Case Study</span>
                        <span className="w-[1px] h-3 bg-gray-400"></span>
                        <span className="font-light text-gray-500">Illustration, Branding & Packaging</span>
                    </div>

                    <div className="mt-8">
                        <div className="relative w-20 sm:w-24 mb-6">
                            {/* SVG Background */}
                            <svg viewBox="0 0 100 120" className="w-full h-auto stroke-[#4A4A4A] fill-none" strokeWidth="2" strokeMiterlimit="10">
                                {/* Outer frame */}
                                <path d="M 12 110 h 15 V 45 A 23 23 0 0 1 73 45 V 110 h 15" strokeLinecap="square" />
                                {/* Inner window */}
                                <path d="M 32 45 A 18 18 0 0 1 68 45 Z" strokeLinejoin="miter" />
                                {/* Bars - clipped */}
                                <g clipPath="url(#windowClip)">
                                    <line x1="38" y1="20" x2="38" y2="45" strokeWidth="1.5" />
                                    <line x1="44" y1="20" x2="44" y2="45" strokeWidth="1.5" />
                                    <line x1="50" y1="20" x2="50" y2="45" strokeWidth="1.5" />
                                    <line x1="56" y1="20" x2="56" y2="45" strokeWidth="1.5" />
                                    <line x1="62" y1="20" x2="62" y2="45" strokeWidth="1.5" />
                                </g>
                                <defs>
                                    <clipPath id="windowClip">
                                        <path d="M 32 45 A 18 18 0 0 1 68 45 Z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {/* Text inside */}
                            <div className="absolute inset-0 top-[40%] flex flex-col items-center justify-start text-center leading-[1.3] text-[#4A4A4A] text-[13px] sm:text-[15px] tracking-[0.16em]" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                                <span className="ml-[0.16em] font-[500]">SA</span>
                                <span className="ml-[0.16em] font-[500]">MO</span>
                                <span className="ml-[0.16em] font-[500]">BOR</span>
                            </div>
                        </div>

                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-800 leading-[1.3] font-light mt-4" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                            One whole street decided to<br className="hidden sm:block" />
                            have the festival of their own,<br className="hidden sm:block" />
                            so we were honored when<br className="hidden sm:block" />
                            they invited us to brand it!
                        </h2>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative min-h-[400px] md:min-h-auto">
                    <img
                        src="/assets/Image/Group 6356927.png"
                        alt="Festival Celebration"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Text overlay on image */}
                    {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white text-center flex flex-col items-center leading-[0.9] tracking-widest" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                            <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">MIN</span>
                            <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">GLA</span>
                            <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">NJ<span className="relative">E<span className="absolute -top-[10px] left-1/2 -translate-x-1/2 text-[20px]">~</span></span></span>
                            <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]">V</span>
                            <span className="text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.3em] font-sans mt-4">KLANJCU</span>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Middle Section 1 (Illustration & Text) */}
            <section className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 md:px-0 mb-20 sm:mb-32">
                {/* Sketch Image */}
                <div className="flex-1 flex justify-center flex-col items-center relative">
                    <img
                        src="/assets/Image/Group 6356909.png"
                        alt="Celjski dom, Celje illustration"
                        className="w-full max-w-[400px] object-contain"
                    />
                    <p className="text-gray-400 text-[11px] sm:text-[12px] mt-6 tracking-wide text-center">
                        Celjski dom, Celje, 1914
                    </p>
                </div>

                {/* Description Text */}
                <div className="flex-[0.8] text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light">
                    <p className="mb-6">
                        Branding a place with such a deep, layered past is both a privilege and a challenge — especially when its history lives more in fragments, memories, and traces than in formal records.
                    </p>
                    <p>
                        Scarcity of documentation doesn't mean absence; in fact, what surfaced proved far richer and more evocative than expected.
                    </p>
                </div>
            </section>

            {/* Quote Section */}
            <section className="w-full max-w-[1200px] mx-auto px-4 md:px-0 mb-16 sm:mb-24">
                <div className="w-full bg-[#f9f9f9] rounded-[20px] p-10 sm:p-16 md:p-24 flex flex-col items-center shadow-sm">
                    <div className="max-w-[500px] w-full flex flex-col items-start text-left">
                        <p className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-800 italic leading-[1.3] font-light" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                            “Samobor je grad malih uličica,
                            mirisnog cvijeća, i ljudi koji vole
                            svoj mir.”
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                                <img src="/assets/Image/Lang 1.png" alt="Milan Lang" className="w-full h-full object-cover grayscale opacity-70" />
                            </div>
                            <span className="text-[12px] sm:text-[14px] font-[700] tracking-[0.2em] text-gray-900 uppercase">
                                MILAN LANG
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-[10px] sm:text-[11px] mt-4 px-2 tracking-wide font-light">
                    Quote from the Book “Samobor”, Milan Lang, XXXX , about the nature of the people from Samobor.
                </p>
            </section>

            {/* The Result Section */}
            <section className="w-full max-w-[1200px] mx-auto px-4 lg:px-0 flex flex-col items-center">
                <h3 className="text-[20px] sm:text-[24px] text-gray-600 mb-10 sm:mb-12 text-center" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                    The result:
                </h3>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left Grid Image */}
                    <div className="w-full rounded-2xl overflow-hidden relative aspect-square sm:aspect-[4/5] bg-black">
                        <img
                            src="/assets/Image/Group 6356928.png"
                            alt="Marda event"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        {/* Overlay texts */}
                        {/* <div className="absolute top-10 left-10 text-white flex flex-col items-start leading-[0.9] tracking-widest" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>
                            <span className="text-[28px] sm:text-[36px]">MIN</span>
                            <span className="text-[28px] sm:text-[36px]">GLA</span>
                            <span className="text-[28px] sm:text-[36px]">NJ<span className="relative">E<span className="absolute -top-[5px] left-1/2 -translate-x-1/2 text-[14px]">~</span></span></span>
                            <span className="text-[28px] sm:text-[36px]">V</span>
                            <span className="text-[28px] sm:text-[36px]">KLANJ</span>
                            <span className="text-[28px] sm:text-[36px]">CU</span>
                        </div> */}
                        <div className="absolute bottom-6 right-6 text-right text-white">
                            <h4 className="text-[32px] sm:text-[40px] leading-none mb-2" style={{ fontFamily: '"Optima", "Times New Roman", serif' }}>Marda</h4>
                            <p className="text-[10px] sm:text-[12px] font-sans tracking-wide">
                                22.12.2026. u 19h  / Lokacija: Klanjec, Samobor
                            </p>
                        </div>
                    </div>

                    {/* Right Grid Image */}
                    <div className="w-full rounded-2xl overflow-hidden relative aspect-square sm:aspect-[4/5]">
                        <img
                            src="/assets/Image/Cup_Mockup 4.png"
                            alt="Mug with logo"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 3 New Bottom Sections */}
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6">


                {/* Section 3: Logo Left (different layout), Sketch Right with markings */}
                <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                    <img src="/assets/Image/Group 6356929.png" alt="Logo Composition 3" className="w-full h-auto object-cover" />
                </div>
                {/* Section 2: Logo Centered with scattered text, Sketch Right */}
                <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                    <img src="/assets/Image/Group 6356930.png" alt="Logo Composition 2" className="w-full h-auto object-cover" />
                </div>

                {/* Section 1: Logo Left, Sketch Right */}
                <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                    <img src="/assets/Image/Group 6356931.png" alt="Logo Composition 1" className="w-full h-auto object-cover" />
                </div>

            </div>

        </div>
    );
};

export default MinglanjeVKlanjcu;