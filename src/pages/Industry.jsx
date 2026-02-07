// src/pages/Industry.jsx
import React from "react";

const industries = [
  {
    name: "E-commerce & Retail",
    icon: "🛒",
    description:
      "High-conversion online stores, mobile shopping apps, personalized marketing funnels, and blockchain-based loyalty programs.",
    services: [
      "Mobile App Development",
      "Website Development",
      "Digital Marketing",
      "Blockchain Solutions",
    ],
    results:
      "Up to 45% increase in conversion rate • 3× faster checkout • 500%+ ROAS",
  },
  {
    name: "FinTech & Banking",
    icon: "💳",
    description:
      "Secure digital wallets, payment gateways, compliance-ready platforms, tokenized assets, and smart contract-based lending.",
    services: [
      "Mobile App Development",
      "Website Development",
      "Blockchain Solutions",
    ],
    results:
      "SOC 2 compliant • Sub-second transactions • 90% fraud reduction",
  },
  {
    name: "Healthcare & Wellness",
    icon: "🩺",
    description:
      "HIPAA/GDPR-ready telehealth apps, patient portals, fitness platforms, and secure data sharing.",
    services: [
      "Mobile App Development",
      "Website Development",
      "Digital Marketing",
    ],
    results:
      "4.8+ app ratings • 60% higher engagement • 40% lower CAC",
  },
  {
    name: "Education & EdTech",
    icon: "📚",
    description:
      "Interactive learning apps, LMS platforms, gamified experiences, and student acquisition strategies.",
    services: [
      "Mobile App Development",
      "Website Development",
      "Digital Marketing",
    ],
    results:
      "35% higher completion • 2.5× organic traffic • 70% lower CPA",
  },
  {
    name: "Real Estate & PropTech",
    icon: "🏠",
    description:
      "Property portals, virtual tours, tokenized ownership, and performance marketing.",
    services: [
      "Website Development",
      "Mobile App Development",
      "Digital Marketing",
      "Blockchain Solutions",
    ],
    results:
      "40% faster lead qualification • $8M+ tokenized assets",
  },
  {
    name: "Logistics & Supply Chain",
    icon: "🚚",
    description:
      "Real-time tracking apps, blockchain-based transparency, B2B portals, and automation.",
    services: [
      "Mobile App Development",
      "Website Development",
      "Blockchain Solutions",
    ],
    results:
      "30% fewer disputes • Immutable audits • 25% efficiency boost",
  },
];

const Industry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 mt-10">
      {/* HERO */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-600 mb-6">
            Industry-Specific{" "}
            <span className="text-blue-600">Digital Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Tailored mobile apps, websites, marketing strategies, and blockchain
            solutions—built for your industry’s unique challenges.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-amber-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:scale-105"
          >
            Discuss Your Industry
            <svg
              className="w-5 h-5 ml-3"
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
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-blue-100 transition-all overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-6xl">
                  {industry.icon}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm font-semibold text-green-600 bg-green-50 inline-block px-4 py-2 rounded-lg">
                    {industry.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Industry. Our Expertise.
          </h2>

          <p className="text-xl md:text-2xl mb-10 opacity-90">
            From startups to enterprises—we build digital products that deliver
            real business impact.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Start a Conversation
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
            Free consultation • Industry-tailored strategy • Proven results
          </p>
        </div>
      </section>
    </div>
  );
};

export default Industry;
