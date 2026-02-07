// src/components/WhyUs.jsx
import React from "react";
import BackgroundPattern from "../assets/grey.png";

const whyUsPoints = [
  {
    number: "01",
    title: "US-Based Standards & Compliance",
    description:
      "We build every project following strict US security and privacy protocols — including SOC 2, CCPA, GDPR readiness, HIPAA where applicable, and enterprise-grade encryption. Your data and reputation stay protected under the highest North American benchmarks.",
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14 text-[#0066cc]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Agile & Transparent Execution",
    description:
      "We work in short, focused sprints with weekly progress demos, live staging links, and real-time access to project boards. No black-box development — full visibility, rapid iteration, and predictable delivery every time.",
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14 text-[#0066cc]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "True End-to-End Ownership",
    description:
      "One cohesive team handles everything — from architecture & clean code, through polished UI/UX, secure backend & cloud infrastructure, all the way to launch, SEO foundation, conversion optimization, and performance marketing.",
    icon: (
      <svg
        className="w-12 h-12 sm:w-14 sm:h-14 text-[#0066cc]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <>
      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>

      <section className="relative bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-gray-100">
        {/* Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img
            src={BackgroundPattern}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Why <span className="text-[#ed6e3e]">Choose Us</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl">
              The Authority Built for Ambitious US Brands
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              We deliver results under the standards, speed, and polish American
              companies expect — without compromise.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {whyUsPoints.map((point, index) => (
              <div
                key={point.number}
                style={{ animationDelay: `${index * 120}ms` }}
                className="group relative bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066cc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-5 mb-6">
                  {point.icon}
                  <div>
                    <span className="block text-xs tracking-widest font-bold text-[#0066cc] mb-1">
                      {point.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0066cc] transition-colors">
                      {point.title}
                    </h3>
                  </div>
                </div>

                <p className="relative text-gray-700 text-base sm:text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-gray-700 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              Ready to work with a team that feels like your in-house US crew —
              but delivers at global efficiency?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#0066cc] text-white font-bold text-base sm:text-lg rounded-full hover:bg-[#0055aa] transition transform hover:scale-105 shadow-lg"
            >
              Start Your Project Today
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
