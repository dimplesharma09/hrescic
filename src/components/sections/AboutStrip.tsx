"use client";

import React from "react";
import { Play, ArrowRight } from "lucide-react";

// Services data based on the image
const services = [
  {
    title: "Branding & Strategy",
    description:
      "Build clarity, consistency and a voice people remember.",
    linkText: "Explore branding services",
    href: "#",
  },
  {
    title: "Web & Digital",
    description:
      "Websites and booking experiences designed to convert - not just exist.",
    linkText: "Explore web services",
    href: "#",
  },
  {
    title: "Content & Marketing",
    description:
      "Content that compounds: social, email, campaigns and analytics.",
    linkText: "Explore marketing services",
    href: "#",
  },
  {
    title: "AI Video Production",
    description:
      "Turn photos into cinematic stories. Faster, smarter, and finally affordable.",
    linkText: "See full services",
    href: "#",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-16 px-4 md:px-10 bg-white">
      <div className="container-xl mx-auto">
        {/* 1. Header Text */}
        <div className="max-w-lg mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-[#555555] mb-4">
            What We Do
          </h2>
          <p className="text-lg text-[#555555] md:text-lg">
            We combine brand strategy, web design and content to build creative
            systems - not one-off campaigns. Pick what you need, or plug us in
            as your ongoing team.
          </p>
        </div>

        {/* 2. Main Content Grid (Video + Service Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-start">
          
          {/* Left Column: Video Player Mock */}
          <div className="relative w-full h-[450px] bg-[#3E0577] rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
            {/* Top Logo */}
            <h4 className="font-light text-white text-3xl">hrescic</h4>
            
            {/* Play Button (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <Play className="w-8 h-8 fill-white" />
              </button>
            </div>
            
            {/* Bottom Text */}
            <span className="text-white text-sm">Showreel, 2026</span>
          </div>

          {/* Right Column: Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-color border border-none rounded-2xl p-6 h-full flex flex-col"
              >
                <h4 className="font-bold text-lg text-gray-color mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-color text-md mb-4">
                  {service.description}
                </p>
                
                {/* Link (pushed to the bottom) */}
                <hr />
                <a
                  href={service.href}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-auto pt-2 group flex items-center gap-1 transition-all"
                >
                  {service.linkText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}