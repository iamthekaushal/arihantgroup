// src/pages/AllTechServices.jsx
import React from "react";

const AllTechServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 mt-10">
      {/* HERO */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-600 mb-6 leading-tight">
            End-to-End <span className="text-blue-600">Digital Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Mobile Apps • Websites • Digital Marketing • Blockchain — built for scale,
            speed, and measurable growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Mobile Apps", href: "#mobile" },
              { label: "Websites", href: "#website" },
              { label: "Marketing", href: "#marketing" },
              { label: "Blockchain", href: "#blockchain" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-8 py-4 rounded-full bg-amber-600 text-white font-semibold text-lg hover:bg-blue-700 hover:shadow-xl transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APPS */}
      <section id="mobile" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            title="Mobile App Development"
            subtitle="High-performance native & cross-platform apps users love."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Native iOS & Android",
                desc: "Swift • Kotlin • Jetpack Compose • maximum performance",
              },
              {
                title: "Cross-Platform Apps",
                desc: "React Native • Flutter • single codebase • faster delivery",
              },
              {
                title: "MVP to Scale",
                desc: "Rapid launch • App Store deployment • long-term growth",
              },
            ].map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE DEVELOPMENT */}
      <section id="website" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            title="Website Development"
            subtitle="Fast, SEO-optimized, conversion-focused web experiences."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Websites",
                desc: "Next.js • React • blazing fast • SEO foundation",
              },
              {
                title: "E-commerce Platforms",
                desc: "Shopify • Headless • high-conversion checkout",
              },
              {
                title: "Web Applications",
                desc: "Dashboards • SaaS portals • secure authentication",
              },
            ].map((item) => (
              <ServiceCard key={item.title} light {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section id="marketing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            title="Digital Marketing"
            subtitle="Full-funnel strategies that drive traffic, leads & sales."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google & Meta Ads",
                desc: "Search • Display • Instagram • ROAS-driven campaigns",
              },
              {
                title: "SEO & Content",
                desc: "Technical SEO • keyword strategy • authority growth",
              },
              {
                title: "Email & Automation",
                desc: "Flows • abandoned cart • lifecycle optimization",
              },
            ].map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOCKCHAIN */}
      <section id="blockchain" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <SectionHeader
            title="Blockchain Solutions"
            subtitle="Secure smart contracts, tokens & enterprise blockchain systems."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Contracts",
                desc: "Solidity • Rust • audited • gas optimized",
              },
              {
                title: "Token & NFT Platforms",
                desc: "ERC-20/721 • marketplaces • royalties",
              },
              {
                title: "DeFi & Enterprise Chains",
                desc: "AMM • lending • Hyperledger • private networks",
              },
            ].map((item) => (
              <ServiceCard key={item.title} light {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            One partner for Mobile, Web, Marketing & Blockchain.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-amber-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Started Today
            <svg
              className="w-6 h-6 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <p className="mt-8 text-blue-100 text-lg">
            Free consultation • No long contracts • Proven results
          </p>
        </div>
      </section>
    </div>
  );
};

/* Reusable Components */

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      <span className="text-amber-600">{title}</span>
    </h2>
    <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
      {subtitle}
    </p>
  </div>
);

const ServiceCard = ({ title, desc, light }) => (
  <div
    className={`rounded-3xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
      light
        ? "bg-white border border-gray-100"
        : "bg-gray-50"
    }`}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
);

export default AllTechServices;
