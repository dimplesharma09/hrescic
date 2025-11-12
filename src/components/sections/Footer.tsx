"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import footerLogo from "../../../public/assets/Image/logo-footer.svg";
import appStore from "../../../public/assets/Image/appStore.png";
import googlePlay from "../../../public/assets/Image/googlePlay.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaHeadset,
} from "react-icons/fa";




/* ---------------- FOOTER ---------------- */
const Footer = () => {
  return (
    <footer className="bg-[#69a242] text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          {/* <img src={footerLogo} alt="footer logo" className="h-10 w-auto" /> */}
                 <div className="flex items-center gap-3">
             <span className="text-[#fff] font-bold text-3xl">SABL</span>
            </div>
          <p className="mt-4 text-white leading-relaxed text-base">
            Empowering sustainable agriculture and innovative technology to
            build a better future for rural communities.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-200 hover:bg-[#fff] hover:text-white p-2 rounded-full transition-all duration-300"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-5 border-l-4 border-[#fff] pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-white">
            {["About Us", "Contact Us", "Products", "Login", "Sign Up"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#f1f1f1] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Customer Area */}
        <div>
          <h4 className="text-xl font-semibold mb-5 text-white border-l-4 border-[#fff] pl-3">
            Customer Area
          </h4>
          <ul className="space-y-3  text-white">
            {[
              "My Account",
              "Orders",
              "Tracking List",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#fff] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-5 text-white border-l-4 border-[#fff] pl-3">
            Contact
          </h4>
          <p className="text-white">
            Have any questions or need help? Reach out to us anytime.
          </p>

          <div className="mt-5 flex items-start gap-4">
            <FaHeadset className="w-10 h-10 text-[#fff]" />
            <div>
              <p className="text-sm text-white">Customer Support</p>
              <a
                href="tel:+123456789"
                className="text-lg font-semibold text-white hover:text-[#f1f1f1]"
              >
                +1 234 567 890
              </a>
            </div>
          </div>

          <a
            href="#"
            className="mt-5 inline-flex items-center justify-center rounded-md border-2  border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#69a242] px-5 py-2 font-semibold transition-all duration-300"
          >
            Live Chat
          </a>

          <div className="mt-6 flex gap-3">
            <img src={appStore} alt="App Store" className="w-1/2" />
            <img src={googlePlay} alt="Google Play" className="w-1/2" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 text-center" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex justify-center font-semibold text-white  text-sm">
        <p>© 2025 SABL. All Rights Reserved.</p>
        {/* <div className="flex items-center gap-6 mt-4 md:mt-0">
          <span>Payment Options:</span>
          <div className="flex gap-4 font-semibold text-gray-600">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYPAL</span>
            <span>BITCOIN</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

/* ---------------- LAYOUT WRAPPER ---------------- */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white text-gray-900">

     
      <Footer />
    </div>
  );
}
