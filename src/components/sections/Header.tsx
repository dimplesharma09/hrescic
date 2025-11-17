"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Top-level nav (same as client doc)
const navItems = [
  { name: "What We Do", href: "#", megaKey: "whatWeDo" },
  { name: "Who We Create For", href: "#", megaKey: "whoWeCreateFor" },
  { name: "Brands We Partner With", href: "#", megaKey: "brands" },
  { name: "Ideas & Insights", href: "#", megaKey: "ideas" },
  { name: "Let's Talk", href: "#", megaKey: "contact" },
];

// Mega-menu data (content from client screenshot)
const megaMenuData: Record<
  string,
  {
    title: string;
    subtitle?: string;
    items: {
      title: string;
      description?: string;
      cards: { title: string; description: string; href?: string }[];
    }[];
  }
> = {
  whatWeDo: {
    title: "What We Do",
    subtitle:
      "Pregled svih usluga i modela pretplate (branding, web, content, AI video). SEO: creative services, marketing subscription, branding agency Croatia.",
    items: [
      {
        title: "Branding",
        description:
          "Pregled svih usluga i modela pretplate – branding, web, content i AI video.",
        cards: [
          {
            title: "Web",
            description:
              "Web dizajn i development s fokusom na UX, brzinu i SEO-friendly arhitekturu.",
          },
          {
            title: "Marketing",
            description:
              "Performance marketing, SEO i content strategija za dugoročni rast brenda.",
          },
          {
            title: "AI & Video",
            description:
              "AI-asistirana video produkcija, automatizacija i personalizirane kampanje.",
          },
        ],
      },
    ],
  },

  whoWeCreateFor: {
    title: "Who We Create For",
    subtitle:
      "Niše u kojima imamo najviše iskustva – turizam, charter, zdravstvo i lokalni brendovi.",
    items: [
      {
        title: "Tourism & Travel",
        description:
          "Fokus na hotele, vile i agencije; SEO: tourism marketing, villa websites, hotel branding.",
        cards: [
          {
            title: "Hotels & Villas",
            description:
              "Brendiranje hotela i vila, web stranice, booking i vidljivost na tražilicama.",
          },
          {
            title: "Travel Agencies",
            description:
              "Lead-gen funneli, landing stranice i kampanje za turističke agencije.",
          },
        ],
      },
      {
        title: "Yacht & Charter",
        description:
          "Charter i nautika; SEO: yacht marketing, booking systems, charter SEO.",
        cards: [
          {
            title: "Yacht Charters",
            description:
              "Premium web prezentacija, itinereri i booking sistemi za chartere.",
          },
        ],
      },
      {
        title: "Health, Pharma & Beauty",
        description:
          "Poliklinike, farma, wellness; SEO: healthcare marketing, clinic branding, pharma content.",
        cards: [
          {
            title: "Clinics & Wellness",
            description:
              "Pacijent-centrične web stranice i kampanje za poliklinike, salone i wellness centre.",
          },
        ],
      },
      {
        title: "Local & Boutique Brands",
        description:
          "Obrtnici, manji brendovi, lifestyle; SEO: SME branding, artisan marketing, lokalna vidljivost.",
        cards: [
          {
            title: "Local Brands",
            description:
              "Storytelling, produkt fotografija i lokalni SEO za male i boutique brendove.",
          },
        ],
      },
    ],
  },

  brands: {
    title: "Brands We Partner With",
    subtitle:
      "Case study sekcija; SEO: marketing results, case studies, agency portfolio.",
    items: [
      {
        title: "Case Studies",
        description:
          "Pregled suradnji i rezultata koje smo ostvarili za klijente.",
        cards: [
          {
            title: "Featured Projects",
            description:
              "Najzanimljiviji projekti – rezultati, brojke i konkretni primjeri rasta.",
          },
        ],
      },
    ],
  },

  ideas: {
    title: "Ideas & Insights",
    subtitle:
      "Blog / resource center; SEO: marketing insights, creative strategy, content ideas.",
    items: [
      {
        title: "Insights Hub",
        description:
          "Blog i resursi: SEO, content marketing, kreativna strategija.",
        cards: [
          {
            title: "Articles",
            description:
              "Praktični vodiči i insighti o brandingu, marketingu i AI alatima.",
          },
          {
            title: "Resources",
            description:
              "Templatei, checkliste i materijali koji pomažu vašem marketing timu.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Let’s Talk",
    subtitle:
      "Kontakt / booking demo; SEO: marketing consultation, creative demo, contact agency.",
    items: [
      {
        title: "Contact & Demo",
        description:
          "Brzi kontakt, upit ili dogovor za prezentaciju rješenja i strategije.",
        cards: [
          {
            title: "Book a Free Demo",
            description:
              "Glavni poziv na akciju – kreativni demo, marketing konzultacije i free strategy call.",
          },
        ],
      },
    ],
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // nav change → first sub-item
  useEffect(() => {
    setActiveSubIndex(0);
    setHoveredCardIndex(null);
  }, [activeMega]);

  const currentMega = activeMega ? megaMenuData[activeMega] : null;
  const currentSub =
    currentMega && currentMega.items[activeSubIndex]
      ? currentMega.items[activeSubIndex]
      : null;

  // kaunsa card primary style lega
  const activeCardIndex =
    hoveredCardIndex !== null ? hoveredCardIndex : 0;

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className="relative border-b border-gray-100"
        onMouseLeave={() => {
          setActiveMega(null);
          setHoveredCardIndex(null);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex items-center gap-2 text-3xl font-serif font-medium text-gray-900"
              >
                <img
                  src="../assets/Image/hrescic-logo.svg"
                  alt="Hrescic logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeMega === item.megaKey;
                const hasMega =
                  item.megaKey && megaMenuData[item.megaKey as string];

                return (
                  <button
                    key={item.name}
                    type="button"
                    onMouseEnter={() =>
                      hasMega ? setActiveMega(item.megaKey as string) : null
                    }
                    className={`group text-[14px] font-medium transition-colors relative ${
                      isActive
                        ? "text-gray-900"
                        : "text-[#555] hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {hasMega && (
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-200 ${
                          isActive
                            ? "w-full bg-[#6F00FF]"
                            : "w-0 bg-[#6F00FF] group-hover:w-full"
                        }`}
                      />
                    )}
                  </button>
                );
              })}

              {/* CTA Button */}
              <button className="bg-[#6F00FF] hover:bg-[#5a00d1] text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
                Book a Free Demo
              </button>

              {/* Language Selector */}
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
                ENG <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===== Desktop Mega Menu ===== */}
        {currentMega && currentSub && (
          <div className="hidden md:block absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-10 py-8">
              {/* Heading + subtitle */}
              <div className="mb-4">
                <h2 className="text-[26px] font-semibold text-gray-900">
                  {currentMega.title}
                </h2>
                {currentMega.subtitle && (
                  <p className="mt-1 text-sm text-gray-500 max-w-xl">
                    {currentMega.subtitle}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6" />

              {/* Layout */}
              <div className="flex items-stretch">
                {/* Left subsections */}
                <div className="w-64 pr-8">
                  <div className="rounded-lg">
                    {currentMega.items.map((section, idx) => {
                      const isSelected = idx === activeSubIndex;
                      return (
                        <button
                          key={section.title}
                          type="button"
                          onMouseEnter={() => {
                            setActiveSubIndex(idx);
                            setHoveredCardIndex(null);
                          }}
                          className={`w-full text-left text-[15px] font-medium py-3 px-4 rounded-md transition-all ${
                            isSelected
                              ? "bg-[#F4F5F7] text-[#8000FF]"
                              : "text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {section.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="w-px bg-gray-200" />

                {/* Right cards */}
                <div className="flex-1 pl-10">
                  <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                    {currentSub.cards.map((card, index) => {
                      const isPrimary = index === activeCardIndex;

                      if (isPrimary) {
                        // BIG highlighted panel (Hotels & Villas OR hovered card)
                        return (
                          <div
                            key={card.title}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            className="relative bg-[#F6F7F9] rounded-md border border-gray-100 flex items-center px-6 py-5 cursor-pointer transition-all"
                          >
                            <span className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-[#8000FF]" />
                            <div className="relative flex items-center gap-4">
                              <div className="flex items-center justify-center w-[49px] h-[37px]  rounded-full border border-gray-300 text-xs font-semibold text-gray-700">
                                L
                              </div>
                              <div>
                                <h3 className="text-[15px] font-semibold text-gray-900">
                                  {card.title}
                                </h3>
                                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      // Normal cards – hover → thoda bg + border change
                      return (
                        <div
                          key={card.title}
                          onMouseEnter={() => setHoveredCardIndex(index)}
                          className="flex items-center gap-4 px-6 py-5 rounded-md border border-transparent hover:border-[#8000FF] hover:bg-[#F6F7F9] cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-center w-[46px] h-[37px] rounded-full border border-gray-300 text-xs font-semibold text-gray-700">
                            L
                          </div>
                          <div>
                            <h3 className="text-[15px] font-semibold text-gray-900">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== Mobile Menu ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white w-full absolute ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-[#6F00FF] hover:bg-[#8000FF] text-white w-full py-3 rounded-full text-sm font-medium transition-all">
              Book a Free Demo
            </button>
            <button className="flex items-center justify-center gap-1 w-full text-sm font-medium text-gray-700">
              ENG <ChevronDown className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
