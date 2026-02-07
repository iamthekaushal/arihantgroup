// src/components/FinalCTA.jsx
import React from "react";

const FinalCTA = () => {
  return (
    <>
      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.1s ease-out forwards;
        }
      `}</style>

      <section className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fadeInUp">
            Ready to build your{" "}
            <span className="text-[#ed6e3e]">next big idea</span>?
          </h2>

          {/* Description */}
          <p
            className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed mb-10 sm:mb-12 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            Talk to our experts for a free technical audit, growth strategy, or
            complete project roadmap — premium quality with global efficiency.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="/contact"
              className="
                inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5
                bg-[#ed6e3e] text-white font-bold text-lg sm:text-xl rounded-full
                hover:bg-[#3ab5f0] transition-all duration-300
                shadow-lg shadow-[#48c3ff]/30 hover:scale-105
              "
            >
              Start Your Project
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/contact"
              className="
                inline-flex items-center px-7 py-3 sm:px-8 sm:py-4
                border-2 border-[#ed6e3e] text-[#ed6e3e]
                font-semibold text-base sm:text-lg rounded-full
                hover:bg-[#ed6e3e]/10 transition-all duration-300
              "
            >
              Book Free Audit
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-8 sm:mt-12 text-gray-600 text-sm sm:text-base md:text-lg animate-fadeInUp"
            style={{ animationDelay: "600ms" }}
          >
            Response within 24 hours • 100% confidential • No pressure sales •
            Guaranteed satisfaction
          </p>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;
