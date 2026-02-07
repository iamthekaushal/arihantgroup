import React, { useState } from "react";

import DigitalMarketingImg from "../assets/1300.png";
import BlockchainImg from "../assets/cryptocurrency-concept-with-bitcoin.png";
import AppDevImg from "../assets/develop-android-and-ios-mobile-app-using-flutter.png";
import BackgroundPattern from "../assets/abstract-seamless-white-and-grey-square-3d-pattern-background-modern-geometric-texture-design-illustration-vector.png";
import WebImg from "../assets/1_star-admin-pro-dashboard.png";

const services = [
  {
    title: "Digital Marketing",
    image: DigitalMarketingImg,
    overview:
      "ROI-focused strategies that dominate search engines and social feeds.",
    features: [
      "SEO & SEM",
      "Content Strategy",
      "PPC Management",
      "Social Media Growth",
    ],
  },
  {
    title: "Blockchain Development",
    image: BlockchainImg,
    overview:
      "Secure, transparent, and scalable decentralized ecosystems.",
    features: [
      "Smart Contracts",
      "dApp Development",
      "Custom Wallets",
      "Tokenomics",
    ],
  },
  {
    title: "Custom App Development",
    image: AppDevImg,
    overview:
      "Scalable iOS and Android solutions designed for the modern user.",
    features: [
      "React Native / Flutter",
      "Enterprise Apps",
      "UI / UX Design",
      "Cloud Integration",
    ],
  },
  {
    title: "Website Development",
    image: WebImg,
    overview:
      "Scalable website solutions designed for the modern user.",
    features: [
      "React / Framer / Shopify",
      "Enterprise Websites",
      "UI / UX Design",
      "Cloud Integration",
    ],
  },
];

export default function ServicesUpdated() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((s) => s.title === activeFilter);

  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${BackgroundPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#ed6e3e]">Core Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Strategic services designed to help modern businesses scale,
            innovate, and dominate.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-center mb-14">
          <div className="flex gap-2 bg-white rounded-full shadow-lg p-2 overflow-x-auto no-scrollbar max-w-full">
            {["All", ...services.map((s) => s.title)].map((label) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition
                  ${
                    activeFilter === label
                      ? "bg-[#ed6e3e] text-white shadow"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES GRID / SLIDER */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-8
            lg:flex lg:gap-8 lg:overflow-x-auto lg:pb-6
            lg:scroll-smooth no-scrollbar
          "
        >
          {filteredServices.map((service) => (
            <div
              key={service.title}
              className="
                group bg-[#ef4c11] rounded-2xl overflow-hidden shadow-xl
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                lg:min-w-[360px] lg:max-w-[360px] flex-shrink-0
              "
            >
              {/* IMAGE */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white mb-6 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>

                <ul className="space-y-3 text-white text-sm sm:text-base">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-white bg-[#EA2134] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
