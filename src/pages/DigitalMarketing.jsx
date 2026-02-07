// src/pages/DigitalMarketing.jsx
import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-16">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_55%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#ed6e3e] mb-6 leading-tight">
            Digital Marketing That{" "}
            <span className="text-blue-600">Drives Revenue</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Google Ads • Meta Ads • SEO • Content • Email Automation • Analytics —
            full-funnel strategies built to scale profitably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#ed6e3e] text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Audit
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white border-2 border-[#ed6e3e] text-[#ed6e3e] font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-600">
            {["Google Ads Certified", "Meta Blueprint Partner", "500%+ ROAS"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#ed6e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Funnel <span className="text-[#ed6e3e]">Marketing</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Precision execution across every growth channel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Ads (PPC)",
              "Meta Ads (Facebook & Instagram)",
              "SEO & Technical SEO",
              "Email & SMS Automation",
              "Content Marketing",
              "Analytics & CRO",
            ].map((title, i) => (
              <div
                key={title}
                className="bg-gray-50 rounded-3xl p-7 border border-gray-100 shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ROI-focused strategies built for sustainable scale.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="bg-white rounded-3xl shadow-2xl border overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Text Content */}
        <div className="p-8 sm:p-12 flex flex-col justify-center order-2 lg:order-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Organic traffic up{" "}
            <span className="text-blue-600">500%+</span> in 6 months
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            SEO + content strategy drove massive growth for a US ecommerce brand.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-5 italic text-gray-700">
            “Best ROI we’ve ever seen from an agency.”
          </blockquote>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[auto] order-1 lg:order-2">
          <img
            src="https://www.slideteam.net/media/catalog/product/cache/1280x720/k/p/kpi_dashboard_to_monitor_sales_performance_structuring_a_new_product_launch_campaign_slide01.jpg"
            alt="KPI Dashboard to monitor sales performance - Structuring a new product launch campaign"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Optional subtle overlay for better readability if text is added over image later */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" /> */}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 sm:py-20 bg-[#ed6e3e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Revenue?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Get a free audit & custom growth plan — no obligation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:scale-105 transition shadow-lg"
          >
            Book Free Audit
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
