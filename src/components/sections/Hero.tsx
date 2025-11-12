"use client";

import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";

/* NOTE: To match the heading font from the image, 
  you need to import a serif font (like 'Playfair Display') 
  into your project and configure it in your tailwind.config.js
*/

export default function Hero() {
  return (
    <section className="container-xl mt-2 mx-auto relative w-full bg-[#220052] rounded-2xl overflow-hidden border border-[#5A1AFF]/30 ">
      <div className=" mx-auto md:ps-16 ps-4 py-20 grid md:grid-cols-[55%_45%] gap-10 items-center">
        {/* 🔹 Left Text Content */}
        <div className="max-w-xl px-2">
     <h1 className="text-white font-normal text-3xl sm:text-4xl lg:text-[50px] mb-6 font-serif">
            Marketing that goes on – even after campaign ends.
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-md mb-10">
            Creative systems built to keep your brand visible, trusted and
            growing — long after the ads stop running.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#9B00FF] hover:bg-[##8000FF] text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              Book a Free Demo
            </button>

            <button className="flex items-center gap-2 bg-[#3D0377] hover:bg-[#3B0080] text-white px-5 py-3 rounded-full text-sm transition-all">
              {/* <Play className="w-4 h-4" /> Play Showreel */}
              <FaPlay className="w-4 h-4"/> Play Showreel

            </button>
          </div>
        </div>

        {/* 🔹 Right Side Purple Boxes (Updated to match image) */}
        {/* 🔹 Right Side Purple Boxes (Updated to match the red box design) */}
        <div className="relative hidden md:grid grid-cols-5 grid-rows-3 gap-4 h-[350px] items-end">
          {/* Large rectangle at the top-middle */}
          <div className="bg-[#3E0577] rounded-2xl col-span-3 row-span-2 col-start-2 h-[220px]"></div>

          {/* Small rectangle on the right, top */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-1 col-start-5 h-[100px]"></div>

          {/* Small rectangle on the right, bottom */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-1 col-start-5 row-start-2 h-[110px]"></div>

          {/* Small square at the bottom-left */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-2 col-start-1 h-[100px]"></div>

          {/* Long rectangle at the bottom-middle */}
          <div className="bg-[#3E0577] rounded-2xl col-span-3 row-span-1 col-start-2 h-[100px]"></div>
        </div>
      </div>
    </section>
  );
}