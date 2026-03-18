"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

// Data for the 4 industry cards
const industries = [
  {
    title: "Tourism & Travel",
    description:
      "For brands that host the world. We help villas, boutique hotels, rental agencies, and yacht charters boost bookings and visibility.",
    linkText: "See tourism projects",
    image: "/assets/Image/travel.png",
  },
  {
    title: "Learning & Development",
    description:
      "For brands that educate professionals to reach their goals. Complete marketing funnel services to capture, nurture and convert leads into course sales.",
    linkText: "Explore charter projects",
    image: "/assets/Image/learning.png",
  },
  {
    title: "Health, Pharma & Beauty",
    description:
      "For brands that build trust through care. From clinics to pharma and beauty — clarity, empathy, credibility.",
    linkText: "See health & beauty work",
    image: "/assets/Image/Beauty.png",
  },
  {
    title: "Local & Boutique Brands",
    description:
      "For makers, doers and dreamers. Authentic identities and digital presence for independent brands.",
    linkText: "Discover boutique projects",
    image: "/assets/Image/local-Boutique.png",
  },
];

// Data for the stats block
const stats = [
  {
    value: "$52M+",
    label: "in revenue - helped achieved for clients in driving their portfolios",
  },
  {
    value: "12.000+",
    label: "digital products and services delivered",
  },
  {
    value: "2.300+",
    label: "hours of video materials edited, animated and postproduced",
  },
];

export default function WhoWeCreateFor() {
  return (
    <section className="bg-white py-16 md:py-18 px-4 md:px-10">
      <div className="container-xl mx-auto">

        {/* 1. Header Text */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-normal text-gray-color mb-4">
            Who We Create For
          </h2>
          <p className="text-gray-color text-base md:text-lg">
            We work with forward-thinking businesses across tourism, health, beauty,
            charter and boutique industries - keeping them visible, trustworthy and alive.
          </p>
        </div>

        {/* 2. Top Row: Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[16px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h4 className="text-[#1F1F1F] text-[18px] md:text-[20px] font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <hr className="border-gray-200 mb-4" />
                  <a
                    href="#"
                    className="text-[#3aaa35] text-[15px] font-medium group flex items-center gap-1 transition-all hover:underline"
                  >
                    {item.linkText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Bottom Row: Stats Block */}
        <div className="bg-[#1D2931] text-white rounded-2xl p-10 md:p-14 mt-6 text-center">
          <h3 className="md:text-[40px] text-[24px]  font-normal max-w-2xl px-0 md:px-4 mx-auto py-5 md:mb-12">
            Delivering on-demand excellence
            for brands around the world
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className=" text-[#41C717] mb-2">
                  <h3 className=" font-normal text-4xl lg:text-[50px]">{stat.value}</h3>
                </div>
                <p className="text-[#fff] font-light text-[14px] max-w-[250px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
           <a href="/lets-talk">
          <button className="bg-[#41C717] hover:bg-[#3aa914] text-white px-6 py-3 rounded-full text-md font-medium transition-all">
            Let’s Talk
          </button>
          </a>
        </div>

      </div>
    </section>
  );
}