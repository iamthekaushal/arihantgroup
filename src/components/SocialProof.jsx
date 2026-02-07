// src/components/SocialProof.jsx
import React from "react";
import GreyPattern from "../assets/grey.png"; // adjust path if needed

const clientLogos = [
  {
    name: "Grayscale Investments",
    grayscaleUrl:
      "https://www.pymnts.com/wp-content/uploads/2025/09/Grayscale-Investments.png",
  },
  {
    name: "Fintech Corp",
    grayscaleUrl:
      "https://img.freepik.com/free-vector/corporate-business-fintech-logo-abstract-design-template-real-estate-charts-diagram-logotype-concept_126523-637.jpg",
  },
  {
    name: "Plaid Partners",
    grayscaleUrl:
      "https://fabrikbrands.com/wp-content/uploads/fabrik-brands-web-successful-fintech-brands-plaid-864x540.png",
  },
  {
    name: "Blockchain Tech",
    grayscaleUrl:
      "https://thumbs.dreamstime.com/b/logo-collection-fintech-blockchain-technology-biotechnology-tech-icons-logos-symbols-logo-set-fintech-blockchain-technology-127688802.jpg",
  },
  {
    name: "New York Tech Group",
    grayscaleUrl:
      "https://creativeharmony.co.uk/wp-content/uploads/2021/09/FT-GS.svg",
  },
  {
    name: "Agilie Fintech",
    grayscaleUrl:
      "https://agilie.com/_next/image?url=/api/imageproxy?url=https%3A%2F%2Fd12zh9bqbty5wp.cloudfront.net%2Fimages%2Ff9e66e179b6747ae54108f82f8ade8b3c25d76fd30afde6c395822c530196169-1650287692672.png&w=1920&q=75",
  },
];

const SocialProof = () => {
  return (
    <>
      {/* Animations & hover effects */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
        .grayscale-filter {
          filter: grayscale(100%) brightness(0.85);
          transition: all 0.35s ease;
        }
        .grayscale-filter:hover {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.08);
        }
      `}</style>

      <section className="relative py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={GreyPattern}
            alt="Background pattern"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
              Trusted by{" "}
              <span className="text-[#ed6e3e]">Industry Leaders</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl">
              We help fintech, blockchain, and digital-first companies scale
              faster with secure, high-impact solutions.
            </p>
          </div>

          {/* Logos */}
          <div className="mb-16 md:mb-24">
            <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
              Selected partners & brands we’ve worked with
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 place-items-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <img
                    src={logo.grayscaleUrl}
                    alt={logo.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain grayscale-filter"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-md animate-fadeInUp">
            <div className="text-6xl text-[#48c3ff]/20 mb-6">“</div>
            <blockquote className="text-gray-800 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
              Their expertise in combining blockchain security with a seamless
              mobile experience completely transformed our fintech product.
            </blockquote>
            <p className="text-gray-600 font-medium">
              — CEO,{" "}
              <span className="text-gray-900">
                New York Tech Group
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-24 text-center">
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Ready to become our next success story?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ed6e3e] text-white font-semibold text-base sm:text-lg hover:bg-[#3ab5f0] transition-all duration-300 shadow-lg shadow-[#48c3ff]/20"
            >
              Get Started Today
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

export default SocialProof;
