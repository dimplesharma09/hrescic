"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation items ke liye data
const navItems = [
  { name: "What We Do", href: "#" },
  { name: "Who We Create For", href: "#" },
  { name: "Brands We Partner With", href: "#" },
  { name: "Ideas & Insights", href: "#" },
  { name: "Let's Talk", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // Sticky header, white background, shadow aur bottom border ke saath
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-serif font-medium text-gray-900">
            <img src="../assets/Image/hrescic-logo.svg"></img>
            </a>
          </div>

          {/* 2. Desktop Navigation (Right) */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[14px] font-medium text-[#555] hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="bg-[#6F00FF] hover:bg-[#5a00d1] text-white px-6 py-3 rounded-full text-sm font-medium transition-all">
              Book a Free Demo
            </button>
            
            {/* Language Selector */}
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
              ENG <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          {/* 3. Mobile Menu Button (Hamburger) */}
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

      {/* 4. Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute z-10 bg-white w-full ${
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
          
          {/* Mobile Buttons */}
          <button className="bg-[#6F00FF] hover:bg-[#5a00d1] text-white w-full py-3 rounded-full text-sm font-medium transition-all">
            Book a Free Demo
          </button>
          <button className="flex items-center justify-center gap-1 w-full text-sm font-medium text-gray-700">
            ENG <ChevronDown className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;