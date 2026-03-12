import React from "react";

const issueList = [
    "Heavy OTA dependency",
    "Price-based competition",
    "Low brand recall",
    "Missed direct revenue opportunities",

];

const scaleList = [
    "A fragmented and unclear user journey",
    "Content overload that obscured the value of the offer",
    "Weak logical connections between individual services",
    "The need for strong yet fast SEO optimization",
    "Lack of clear market positioning beyond functional descriptions",

    
];


const AlertDot = () => (
    <span className="mt-[3px] flex h-[21px] w-[21px] min-w-[14px] items-center justify-center rounded-full bg-[#05C4D9] text-[14px] font-bold leading-none text-white">
        !
    </span>
);

const QuoteMark = () => (
    <span className="flex h-[33px] w-[35px] min-w-[30px] items-center justify-center rounded-[6px] bg-[#ECECEC] text-[20px] font-semibold leading-none text-[#05C4D9]">
        !
    </span>
);


const MyRent = () => {
  const PillButton = ({ children }: { children: React.ReactNode }) => (
    <button
      type="button"
      className="w-fit rounded-full bg-[#49E000] px-5 sm:px-6 py-[12px] sm:py-[13px] text-[13px] sm:text-[15px] font-medium leading-none text-[#003C42] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(73,224,0,0.22)]"
    >
      {children}
    </button>
  );

  const stats = [
    {
      value: "+85%",
      text: "website traffic within two months of launch",
    },
    {
      value: "+130%",
      text: "growth in comparison with pre-launch period",
    },
    {
      value: "100/100",
      text: "SEO score: 100 / 100, with long-term organic growth",
    },
    {
      value: "+78%",
      text: "content reduction while improving the user journey",
    },
  ];


  const caseCards = [
    {
        title: "Case - ",
        highlight: "Intro",
        text: "Example of how clarity transforms growth in a complex tourism ecosystem.",
        image: "/assets/Image/tourism-case-study.png",
        alt: "Case intro collage",
        bg: "bg-[#003C42]",
    },
    {
        title: "Case - ",
        highlight: "Headline",
        text: "Building clarity at scale: How MyRent turned complexity into a growth system",
        image: "/assets/Image/tourism-brand-img1.png",
        alt: "Case highlight visual",
        bg: "bg-[#003C42]",
    },
    {
        title: "Case - ",
        highlight: "Summary",
        text: "MyRent operates within a highly complex tourism ecosystem with multiple user types and services. The challenge wasn’t building more, it was creating clarity within complexity.",
        image: "/assets/Image/tourism-brand-img2.png",
        alt: "Case summary visual",
        bg: "bg-[#003C42]",
    },
];


  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="w-full px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto container-xl">
          <div className="grid overflow-hidden rounded-[18px] bg-[#003C42] lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT CONTENT */}
            <div className="order-2 flex items-center lg:order-1">
              <div className="w-full px-4 py-8 sm:px-8 sm:py-10 lg:ps-[40px] lg:py-[42px]">
                <div className="mb-10 flex flex-wrap items-center gap-3 text-white">
                  <span className="text-[15px] font-semibold">Case Study</span>
                  <span className="text-white/45">|</span>
                  <span className="text-[13px] italic text-white/90">
                    Tourism &amp; Travel
                  </span>
                </div>

                <div>
                  <h1
                    className="text-[30px] sm:text-[38px] md:text-[40px] lg:text-[38px] font-normal leading-[1.08] tracking-normal text-white"
                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                  >
                    <span className="text-[#49E000]">
                      Building Clarity at Scale:
                    </span>
                    <br />
                    How MyRent Transformed a Complex Platform into a Growth
                    System
                  </h1>

                  <p className="mt-6 max-w-[425px] text-[15px] sm:text-[16px] leading-[1.7] text-white">
                    The objective was not visibility alone, but positioning
                    MyRent as a serious, credible player within the broader
                    hospitality ecosystem.
                  </p>

                  <div className="mt-10 flex max-w-[470px] flex-wrap gap-3">
                    <PillButton>The Challenge</PillButton>
                    <PillButton>The Goals of Collaboration</PillButton>
                    <PillButton>Our Strategic Role</PillButton>
                    <PillButton>The Results</PillButton>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[488px]">
                <img
                  src="/assets/Image/my-rent-case-study.png"
                  alt="MyRent case study"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,60,66,0.08)_0%,rgba(0,60,66,0)_24%,rgba(0,0,0,0.03)_100%)]" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-5 sm:px-7 py-3 sm:py-4 text-[14px] sm:text-[15px] font-medium text-[#003C42] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:translate-y-[-1px]"
                  >
                    Read the Case Study
                    <span className="text-[20px] leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="w-full px-3 py-8 sm:px-5 sm:py-10 lg:py-12">
        <div className="mx-auto container-xl">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="relative px-4 sm:px-6 lg:px-8"
              >
                <div className="lg:min-h-[112px]">
                  <h3
                    className="text-[42px] sm:text-[48px] lg:text-[52px] font-normal leading-[0.95] text-[#49E000]"
                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                  >
                    {item.value}
                  </h3>
                  <p className="mt-3 max-w-[210px] text-[14px] sm:text-[15px] leading-[1.45] text-[#5B5B5B]">
                    {item.text}
                  </p>
                </div>

                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 h-[64px] w-px -translate-y-1/2 bg-[#D4D4D0]" />
                )}

                {index !== stats.length - 1 && (
                  <div className="block sm:hidden mt-8 h-px w-full bg-[#D4D4D0]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* REALITY SECTION */}
            <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
                <div className="mx-auto container-xl rounded-[2px]">
                    <div className="px-4 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-[120px] lg:py-[68px]">
                        <div className="mx-auto  text-center max-w-3xl">
                            <h2
                                className="text-[26px] sm:text-[31px] md:text-[38px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-[#00353A]"
                                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                            >
                                MyRent is a property management platform serving private renters and professional agencies across multiple markets.
                            </h2>

                            <p className="mx-auto mt-6  text-[14px] sm:text-[18px] leading-[1.55] text-[#555555]">
                             This collaboration was not a one-off project, it was a long-term, partnership-based development model designed to support continuous growth, evolving market needs, and operational scalability. The work spanned strategy, structure, UX, SEO, content, and marketing delivered through multiple collaboration models depending on context and growth phase.
                            </p>
                        </div>

                        
                    </div>
                </div>
            </section>



              {/* WHAT DRIVES GROWTH */}
            <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:pb-10">
                <div className="mx-auto container-xl">
                    <div className="overflow-hidden rounded-[14px] bg-[#F8F8F8]">
                        <div className="grid border-b border-[#e2dbd7] bg-[#00646E] lg:grid-cols-[1.02fr_0.98fr]">
                            <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:ps-[86px] lg:pe-[24px] lg:pb-[56px] lg:pt-[34px]">
                                <h3 className="text-[14px] sm:text-[22px] font-semibold text-[#05C4D9]">
                                   The Challenge
                                </h3>

                                <p
                                    className="mt-8 sm:mt-10 md:mt-14 lg:mt-[72px] text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.35] tracking-[-0.015em] text-[#fff]"
                                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                                >
                                    MyRent operates within a highly complex ecosystem that includes multiple user types, a wide range of interconnected services, diverse market contexts, and a strong requirement for both scalability and operational speed.
                                </p>
                            </div>

                            <div className="flex items-center justify-center px-5 py-7 sm:px-8 sm:py-8 md:px-10 lg:px-[46px]">
                                <img
                                    src="/assets/Image/tourism-growth.png"
                                    alt="Health beauty digital ecosystem examples"
                                    className="w-full max-w-[410px] object-contain"
                                />
                            </div>
                        </div>

                        <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-[86px] lg:pb-[50px] lg:pt-[60px]">
                            <h3
                                className="text-[22px] sm:text-[24px] md:text-[26px] font-normal leading-[1.3] tracking-[-0.015em] text-[#00353A]"
                                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                            >
                               As the platform evolved, several structural issues emerged:
                            </h3>

                            <div className="mt-6 sm:mt-7 space-y-[14px]">
                                {scaleList.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <AlertDot />
                                        <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#555555]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-9 sm:mt-12 lg:mt-[48px] flex items-start gap-3 sm:gap-4">
                                <QuoteMark />
                                <p
                                    className="text-[20px] sm:text-[22px] font-normal leading-[1.35] tracking-[-0.015em] text-[#00353A]"
                                    style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                                >
                                    The challenge was not building more. It was creating clarity within complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                  {/* CASE STUDY SECTION */}
            <section className="w-full px-3 pb-6 pt-0 sm:px-5 sm:pb-8 lg:py-14 ">
                <div className="mx-auto container-xl">
                    <div className="text-center">
                        <h2
                            className="text-[26px] sm:text-[31px] md:text-[36px] lg:text-[40px] font-normal leading-[1.18] tracking-[-0.02em] text-[#00353A]"
                            style={{ fontFamily: "Georgia, Times New Roman, serif" }}
                        >
                            How this works in real tourism businesses
                        </h2>


                        <p className="mt-2 text-[15px] sm:text-[22px] font-semibold text-[#00353A]">
                            (My Rent - Case Study):
                        </p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {caseCards.map((card, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-[16px] ${card.bg}`}
                            >
                                <div className="h-[210px] sm:h-[220px] w-full overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.alt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="px-4 sm:px-[18px] pb-5 sm:pb-[26px] pt-4 sm:pt-[16px]">
                                    <h3 className="border-b border-[#dfd8d4] pb-3 text-[16px] sm:text-[17px] font-semibold text-[#fff]">
                                        {card.title}
                                        <span className="text-[#3EDA00]">{card.highlight}</span>
                                    </h3>

                                    <p className="pt-4 text-[14px] sm:text-[15px] leading-[1.65] text-[#fff]">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                  
                </div>
            </section>


    </div>
  );
};

export default MyRent;