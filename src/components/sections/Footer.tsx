"use client";
import React from "react";
import {
  ChevronRight,
  Linkedin,
  Facebook,
  Instagram,
  Dribbble,
  Youtube,
} from "lucide-react";

/* ------------------ Data for Links ------------------ */

const serviceLinks = {
  creative: [
    "Ad creative",
    "Social media creative",
    "Presentation design",
    "Illustration design",
    "Branding services",
    "eBooks & report design",
    "Concept creation",
    "Print design",
    "Packaging & merchandise design",
  ],
  specialized: [
    "Video production",
    "Motion design",
    "Immersive design",
    "Email creation",
    "Web design",
    "Design systems",
    "Product Design",
    "Copywriting",
  ],
  ai: ["AI-powered creative", "AI consulting"],
  marketing: ["Marketing strategy"],
};

const navigationLinks = {
  main: [
    "Our work",
    "Our people",
    "About us",
    "Pricing",
    "Trust center",
    "Careers",
    "Superside vs. Alternatives",
    "Forrester TEI Report",
  ],
  learn: [
    "Blog",
    "Events & Summits",
    "Guides",
    "Reports",
    "Customer Stories",
    "Video Library",
    "Playbooks",
    "What's new",
  ],
};

const policyLinks = [
  { name: "Privacy policy", href: "#" },
  { name: "Terms of use", href: "#" },
  { name: "Status page", href: "#" },
  { name: "DMCA", href: "#" },
];

const socialIcons = [
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Dribbble, href: "#", name: "Dribbble" },
  { icon: Youtube, href: "#", name: "YouTube" },
];

/* ------------------ Reusable Components ------------------ */

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="hover:text-white transition-colors duration-300 text-base"
    >
      {children}
    </a>
  </li>
);

interface FooterHeadingProps {
  title: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ title }) => (
  <h6 className="text-white mb-3 flex items-center text-lg font-semibold">
    {title}
    <ChevronRight className="w-4 h-4 ml-1" />
  </h6>
);

const SupersideLogo: React.FC = () => (
  <svg
    width="120"
    height="24"
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.749 6.432C7.749 4.296 9.381 2.664 11.517 2.664C13.653 2.664 15.285 4.296 15.285 6.432C15.285 8.568 13.653 10.2 11.517 10.2C9.381 10.2 7.749 8.568 7.749 6.432ZM22.713 6.432C22.713 4.296 24.345 2.664 26.481 2.664C28.617 2.664 30.249 4.296 30.249 6.432C30.249 8.568 28.617 10.2 26.481 10.2C24.345 10.2 22.713 8.568 22.713 6.432ZM19.017 12.864C16.881 12.864 15.249 14.496 15.249 16.632C15.249 18.768 16.881 20.4 19.017 20.4C21.153 20.4 22.785 18.768 22.785 16.632C22.785 14.496 21.153 12.864 19.017 12.864ZM11.517 12.864C9.381 12.864 7.749 14.496 7.749 16.632C7.749 18.768 9.381 20.4 11.517 20.4C13.653 20.4 15.285 18.768 15.285 16.632C15.285 14.496 13.653 12.864 11.517 12.864ZM35.039 3.024H38.703V12.984H43.371V15.936H38.703V20.112C38.703 21.312 39.267 21.864 40.479 21.864H43.371V24H39.825C37.035 24 35.039 22.296 35.039 19.536V15.936H32.415V12.984H35.039V3.024ZM48.5134 13.056H54.0214V15.864H48.5134V20.808C48.5134 21.6 49.0774 22.104 49.9174 22.104H53.6494V24H49.8814C47.4574 24 45.7414 22.608 45.7414 20.256V15.864H43.7014V13.056H45.7414V3.024H48.5134V13.056ZM58.7454 3.024H61.5174V24H58.7454V3.024ZM68.6186 16.08V24H65.8466V16.08C65.8466 14.592 65.0066 13.752 63.8846 13.752C62.6726 13.752 61.8326 14.592 61.8326 16.08V24H59.0606V16.08C59.0606 14.592 58.2206 13.752 57.0986 13.752C55.8866 13.752 55.0466 14.592 55.0466 16.08V24H52.2746V12.264C52.2746 9.84 53.7986 8.352 56.1506 8.352C57.6746 8.352 58.8506 9.144 59.4566 10.464C60.0626 9.144 61.2386 8.352 62.7626 8.352C65.2766 8.352 66.7106 9.936 66.8006 12.264H66.8426L66.7526 12.264V12.264L68.6186 3.024H71.5106L68.6186 14.4V16.08ZM79.6747 8.616C78.3667 7.776 76.6507 7.416 74.9347 7.416C72.3907 7.416 70.3987 8.904 70.3987 11.664V24H67.6267V11.664C67.6267 7.728 70.4887 5.04 75.1147 5.04C77.0167 5.04 78.8287 5.568 80.3947 6.576L79.6747 8.616ZM86.666 3.024H89.438V12.984H94.106V15.936H89.438V20.112C89.438 21.312 90.002 21.864 91.214 21.864H94.106V24H90.56C87.77 24 85.778 22.296 85.778 19.536V15.936H83.154V12.984H85.778V3.024ZM99.1929 3.024H101.9649V24H99.1929V3.024ZM109.117 3.024H111.889V15.768L116.833 3.024H119.869L114.157 14.28V24H111.889V14.28L106.333 3.024H109.117Z"
      fill="white"
    />
  </svg>
);

/* ------------------ Footer Component ------------------ */

const Footer: React.FC = () => {
  return (
    <footer className="text-slate-200 pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Top label row: Services / Navigation with divider line */}
      
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {/* Services Column (2/5 width on lg) */}
          <div className="lg:col-span-2">
            <div className="py-8 border-t border-gray-100">
              <h4 className="mt-2 md:mt-0 text-xl font-semibold">Services</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Creative Design Services */}
              <div>
                <FooterHeading title="Creative design services" />
                <ul className="space-y-1.5">
                  {serviceLinks.creative.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Other Services */}
              <div>
                <FooterHeading title="Specialized services" />
                <ul className="space-y-1.5 mb-6">
                  {serviceLinks.specialized.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>

                <FooterHeading title="AI services" />
                <ul className="space-y-1.5 mb-6">
                  {serviceLinks.ai.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>

                <FooterHeading title="Marketing services" />
                <ul className="space-y-1.5">
                  {serviceLinks.marketing.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Columns (3/5 width on lg) */}
          <div className="lg:col-span-2">
            <div className="py-8 border-t border-gray-100">
            <h4 className="mt-2 md:mt-0 text-xl font-semibold">Navigation</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Main Links */}
              
              <div>
                <h6 className="text-white mb-3 text-lg font-semibold">Main</h6>
                <ul className="space-y-1.5">
                  {navigationLinks.main.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Learn Links */}
              <div>
                <h6 className="text-white mb-3 text-lg font-semibold">Learn</h6>
                <ul className="space-y-1.5">
                  {navigationLinks.learn.map((link) => (
                    <FooterLink key={link} href="#">
                      {link}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Empty third column to match reference layout */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-300/80">
          {/* Left: logo + copyright */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* <SupersideLogo /> */}
            <img src="./assets/Image/hrescic-logo-white.svg" alt="hrescic logo" className="w-32 md-w-auto"></img>
            <span className="pt-2 text-md">© 2025 Superside. All rights reserved.</span>
          </div>

          {/* Center: policy links */}
          <div className="flex flex-wrap justify-center gap-4">
            {policyLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: social icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-slate-300/80 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ------------------ Main Page Component ------------------ */

const App: React.FC = () => {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        // <<< CHANGE THIS TO YOUR IT COMPANY BACKGROUND IMAGE >>>
        backgroundImage:
          "linear-gradient(to bottom, rgba(2,24,20,0.15) 0%, rgba(2,24,20,0.75) 40%, rgba(1,10,8,0.98) 85%), url('https://static.vecteezy.com/system/resources/previews/007/359/627/non_2x/close-up-of-businessman-hands-pointing-at-turnover-graph-while-discussing-it-on-wooden-desk-with-pen-in-meeting-room-business-financial-working-concept-business-people-pointing-at-business-document-free-photo.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Hero / heading area */}
        <header className="flex-1 flex items-center justify-center pt-20 pb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-3xl mx-auto">
              <span>Your </span>
              <span className="italic font-serif">creative team’s</span>
              <br />
              <span>creative team™</span>
            </h1>

            <button className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#6F00FF] text-white shadow-md hover:bg-[#5a00d1] transition-colors">
              Book a demo
            </button>
          </div>
        </header>

        {/* Footer navigation + bottom bar */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
