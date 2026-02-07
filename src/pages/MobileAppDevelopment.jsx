// src/pages/MobileAppDevelopment.jsx
import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-16">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_55%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#ed6e3e] leading-tight mb-6">
            Custom <span className="text-blue-600">Mobile Apps</span> That Win Markets
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Native iOS • Android • React Native • Flutter — built for performance,
            security, and measurable business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#ed6e3e] text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Your Free Quote
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mobile App <span className="text-[#ed6e3e]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Native iOS & Android",
              "Cross-Platform Apps",
              "App Redesign & Upgrade",
              "MVP & Rapid Launch",
              "Maintenance & Scaling",
              "ASO & Growth",
            ].map((title, i) => (
              <div
                key={title}
                className="bg-gray-50 rounded-3xl p-7 border shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 text-sm">
                  Enterprise-grade engineering with modern UX and scalability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#ed6e3e]">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fashion App",
                image:
                  "https://images.hellomagazine.com/horizon/portrait/6a741c9da24a-5.jpg?tx=c_limit",
              },
              {
                title: "Fitness Tracker",
                image:
                  "https://media1.popsugar-assets.com/files/thumbor/aqEdzCwEMSohYkLPlQ0hKUfkoSU=/fit-in/1584x808/top/filters:format_auto():upscale()/2022/04/21/247/n/47737404/43f014e4fe348aa4_Screenshot_220_.png",
              },
              {
                title: "Fintech Wallet",
                image:
                  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/429372193/original/d6f9064437efda487c2e0109acfa7a616ddbd5b6/design-fintech-app-bill-payment-app-ui-ux-wallet-app-figma.jpeg",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl overflow-hidden border border-gray-200 shadow hover:shadow-xl transition group"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    High-performance mobile experience with real results.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 sm:py-20 bg-[#ed6e3e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your App?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Free consultation • No pressure • Real experts
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:scale-105 transition shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>

    </div>
  );
};

export default MobileAppDevelopment;
