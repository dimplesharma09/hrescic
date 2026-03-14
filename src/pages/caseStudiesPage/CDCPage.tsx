import React from "react";
import BrandsSlider from "./BrandsSlider";

const issueList = [
    "Disconnected products and offerings",
    "Inconsistent UX, brand and messaging",
    "Complex funnels that don’t convert as expected",
    "Growth that becomes harder to manage over time",

];

const scaleList = [
    "Defining a consistent design language across platforms and funnels.",
    "Aligning UX, brand, and content structures.",
    "Standardizing educational content and video production workflows.",
    "Creating scalable systems that support long-term growth.",
];

const caseCards = [
    {
        title: "Case - ",
        highlight: "Intro",
        text: "One example of turning fragmented education products into a cohesive, scalable system.",
        image: "assets/Image/educations-case-img.png",
        alt: "Case intro collage",
        bg: "bg-[#F7F0FF]",
    },
    {
        title: "Case - ",
        highlight: "Headline",
        text: "From separate products to one ecosystem: Scaling Coaching.com through clarity",
        image: "assets/Image/educations-case-1.png",
        alt: "Case highlight visual",
        bg: "bg-[#FFF0FD]",
    },
    {
        title: "Case - ",
        highlight: "Summary",
        text: "Coaching.com operated across independently developed education programs, software and marketplace services. The challenge wasn’t growth,  it was unifying structure, experience and delivery without limiting future evolution.",
        image: "assets/Image/educations-case-2.png",
        alt: "Case summary visual",
        bg: "bg-[#F9F3F3]",
    },
];

const AlertDot = () => (
 <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#5E1DE1] text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[15px] w-[15px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="M13 5l7 7-7 7"></path>
  </svg>
</span>
);

const QuoteMark = () => (
    <span className="flex h-[28px] w-[30px] min-w-[30px] items-center justify-center rounded-[6px] bg-[#E3D5F4] text-[20px] font-semibold leading-none text-[#8923C0]">
        !
    </span>
);

const GoldButton = ({ children }) => (
    <button
        type="button"
        className="w-full sm:w-fit rounded-full bg-[#5E1DE1] px-5 sm:px-7 py-[13px] sm:py-[14px] text-center text-[14px] sm:text-[15px] font-medium leading-[1.35] text-white transition duration-300 hover:bg-[#c9852d] hover:shadow-[0_12px_24px_rgba(213,148,59,0.24)]"
    >
        {children}
    </button>
);



const PillButton = ({ children }: { children: React.ReactNode }) => (
    <button
        type="button"
        className="w-fit rounded-full bg-[#5E1DE1] px-5 sm:px-6 py-[12px] sm:py-[13px] text-[13px] sm:text-[15px] font-medium leading-none text-[#fff] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(73,224,0,0.22)]"
    >
        {children}
    </button>
);

const CDCPage = () => {
    return (
        <div className="w-full bg-white overflow-x-hidden">
            <section className="w-full px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto container-xl">
        <div className="grid overflow-hidden rounded-[18px] bg-[#F8EDF2] lg:grid-cols-[1fr_1fr]">
          {/* LEFT */}
          <div className="order-2 flex items-center lg:order-1">
            <div className="w-full px-5 py-7 sm:px-8 sm:py-10 md:px-10 lg:px-[58px] lg:py-[54px]">
              {/* top row */}
              <div className="mb-10 flex items-center justify-between gap-4 sm:mb-12 lg:mb-14">
                <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#1B1642]">
                  <span className="text-[14px] font-semibold text-[#16123F] sm:text-[15px]">
                    Case Study
                  </span>
                  <span className="text-[#8F8A96]">|</span>
                  <span className="text-[12px] italic text-[#16123F] sm:text-[13px]">
                    e-Learning
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-full border border-[#E4D6DE] bg-transparent px-4 py-2 text-[11px] font-medium text-[#8F7F87] transition-all duration-300 hover:bg-white/60"
                >
                  Back to Portfolio
                </button>
              </div>

              {/* brand */}
              <div className="mb-5 flex items-center gap-2">
                <img src="/assets/Image/cdc-logo.svg" alt="" />
                <span className="text-[22px] font-medium tracking-[-0.03em] text-[#1C1645]">
                  coaching.com
                </span>
              </div>

              {/* heading */}
              <h1
                className="max-w-[470px] text-[30px] font-normal leading-[1.1] tracking-[-0.02em] text-transparent sm:text-[36px] md:text-[42px] lg:text-[40px]"
                style={{
                  fontFamily: "Georgia, Times New Roman, serif",
                  backgroundImage:
                    "linear-gradient(90deg, #5E1DE1 0%, #7E2BFF 40%, #B327FF 72%, #FF2D9B 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                What started as separate products evolved into one cohesive ecosystem.
              </h1>

              <p className="mt-5 max-w-[430px] text-[15px] leading-[1.8] text-[#3D3A55] sm:mt-6 sm:text-[16px]">
                Enabling Coaching.com to scale education, software, and marketplace
                services through a unified brand and operational system.
              </p>

              {/* buttons */}
              <div className="mt-9 flex max-w-[520px] flex-wrap gap-3">
                <PillButton>The Challenge</PillButton>
                <PillButton>The Goals of Collaboration</PillButton>
                <PillButton>Our Strategic Role</PillButton>
                <PillButton>The Results</PillButton>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[260px] sm:h-[340px] md:h-[430px] lg:h-full lg:min-h-[560px]">
              <img
                src="/assets/Image/CDC-hero-img.png"
                alt="Coaching.com case study visual"
                className="h-full w-full object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
            <BrandsSlider />

            {/* REALITY SECTION */}
            <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
                <div className="mx-auto container-xl rounded-[2px]">
                    <div className="px-4  sm:px-8  md:px-10 lg:px-[120px] ">
                     
                        <div className="mt-10 sm:mt-[60px] grid gap-y-10 lg:grid-cols-[1fr_1fr] lg:gap-x-[70px] xl:gap-x-[60px]">
                            <div >
                              
                                <p
                                    className="mt-4 sm:mt-5 text-[22px] sm:text-[26px] md:text-[26px] font-normal leading-[1.28] tracking-[-0.015em] text-[#0F0F3D]"
                                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                                >
                                   With Appreciation for the Journey, providing creative direction services for Coaching.com gave me the privilege of working closely with some of the world’s leading thought leaders, academic professors, and business professionals. 
                                </p>
                            </div>

                            <div className="max-w-[520px]">
                              

                                <div className="mt-4 sm:mt-5 space-y-[14px]">
                                      
                                            
                                            <p className="text-[14px] sm:text-[16px] leading-[1.5] text-[#0F0F3D]">
                                               Through interviews and direct collaboration, I was able to learn directly from their experience and perspectives, but just as importantly, I had the opportunity to work alongside exceptional people at every level. Many of those professional relationships grew into lasting friendships, and each collaboration left a meaningful mark on both my work and my life.

                                            </p>
                                            <p className="text-[14px] sm:text-[16px] leading-[1.5] text-[#0F0F3D]">

                                               All of these encounters contributed deeply to my professional and personal growth, and for that, I am sincerely grateful.
                                             </p>   
                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT DRIVES GROWTH */}
            <section className="w-full px-3 pb-6 pt-24 sm:px-5 sm:pb-8 lg:pb-10">
                <div className="mx-auto container-xl">
                    <div className="overflow-hidden rounded-[14px] bg-[#EBE1F7]">
                        <div className="grid border-b border-[#e2dbd7] bg-[#F7F0FF] lg:grid-cols-[1.02fr_0.98fr]">
                            <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[24px] lg:pb-[56px] lg:pt-[34px]">
                                <h3 className="text-[14px] sm:text-[26px] font-normal text-[#0F0F3D]">
                                   The Challenge:
                                </h3>

                                <p
                                    className="mt-8 sm:mt-10 md:mt-14 lg:mt-[14px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#0F0F3D]"
                                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                                >
                                   Coaching.com operated across three independently developed pillars: education programs, software, and marketplace services. Each pillar differed in structure, funnels, visual language, and delivery methods, while software and marketplace functionalities partially overlapped.
                                </p>
                            </div>

                            <div className="flex items-center justify-center px-5 py-7 sm:px-8 sm:py-8 md:px-10 lg:px-[46px]">
                                <img
                                    src="/assets/Image/CDC-cta-img.png"
                                    alt="Health beauty digital ecosystem examples"
                                    className="w-full max-w-[410px] object-contain"
                                />
                            </div>
                        </div>

                        <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                            <h3
                                className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#0F0F3D]"
                                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                            >
                             Rather than enforcing rigid standardization, the approach focused on creating a shared foundation that allowed different products to evolve independently while remaining visually and structurally aligned.
                            </h3>

                             <h3
                                className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#0F0F3D]"
                                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                            >
                             This Included:
                            </h3>

                            <div className="mt-6 sm:mt-7 space-y-[14px]">
                                {scaleList.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <AlertDot />
                                        <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#0F0F3D]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                          
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDY SECTION */}
            <section className=" px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14 ">
                <div className="mx-auto container-xl">
                    <div className="text-center">
                        <h2
                            className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em] text-[#0F0F3D]"
                            style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                        >
                            The Result
                        </h2>


                        <p className="mt-2 text-[15px] sm:text-[16px] font-normal text-[#0F0F3D]">
                           Below is the UX & UI presentation of the three key areas: Platform 
                           <br></br>Website, Summit & Program Funnel Pages, and Program Delivery System. 
                        </p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default CDCPage;