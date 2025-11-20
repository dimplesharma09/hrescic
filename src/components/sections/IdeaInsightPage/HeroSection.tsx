import React from 'react'

const HeroSection = () => {
  return (
      <section className="container-xl mt-2 mx-auto relative w-full bg-[#300060] rounded-2xl overflow-hidden border border-[#5A1AFF]/30 my-16">
      <div className="mx-auto md:ps-16 ps-4 py-20 grid md:grid-cols-[55%_45%] gap-10 items-center">
        {/* 🔹 Left Text Content */}
        <div className="max-w-xl px-2">
          <h1 className="text-white font-normal text-3xl sm:text-4xl lg:text-[50px] mb-6 font-serif">
        Ideas & insights
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-md mb-6">
         Not another generic marketing blog.
Just clear explanations, sharp ideas and useful frameworks — written to actually help you move.
           
          </p>

          {/* <div className="flex  items-center gap-4">
           
            <button className="bg-[#9B00FF] hover:bg-[#8000FF] text-white px-5 py-3 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all">
              Book a Free Demo
            </button>

         
            <button className="flex items-center gap-2 bg-[#3D0377] hover:bg-[#3B0080] text-white px-5 py-3 md:px-6 md:py-3  rounded-full text-xs md:text-sm transition-all">
              Ask Us Anything
            </button>
          </div> */}

       
         
        </div>

        {/* 🔹 Right Side Purple Boxes */}
        <div className="relative hidden md:grid grid-cols-5 grid-rows-3 gap-4 h-[350px] items-end">
          {/* Large rectangle at the top-middle */}
          <div className="bg-[#3E0577] rounded-2xl col-span-3 row-span-2 col-start-2 h-[220px]" />

          {/* Small rectangle on the right, top */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-1 col-start-5 h-[100px]" />

          {/* Small rectangle on the right, bottom */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-1 col-start-5 row-start-2 h-[110px]" />

          {/* Small square at the bottom-left */}
          <div className="bg-[#3E0577] rounded-2xl col-span-1 row-span-2 col-start-1 h-[100px]" />

          {/* Long rectangle at the bottom-middle */}
          <div className="bg-[#3E0577] rounded-2xl col-span-3 row-span-1 col-start-2 h-[100px]" />
        </div>
      </div>
    </section> 
  )
}

export default HeroSection
