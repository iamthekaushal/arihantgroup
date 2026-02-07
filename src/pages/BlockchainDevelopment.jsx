import React from "react";

const BlockchainDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 mt-10">

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.12),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-600 mb-6 leading-tight">
            Enterprise-Grade <span className="text-blue-600">Blockchain Development</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Smart contracts • DeFi • Tokenization • Private blockchains — secure, scalable, and audit-ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-amber-600 text-white font-bold text-lg rounded-full
                         hover:bg-amber-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Blockchain Project
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#use-cases"
              className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-amber-600 text-amber-600 font-bold text-lg rounded-full
                         hover:bg-blue-50 transition-all duration-300"
            >
              Explore Use Cases
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-base md:text-lg">
            {["Ethereum • Solana • Polygon", "Smart Contract Audits", "SOC 2 & GDPR Ready"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Blockchain Projects" },
              { value: "$60M+", label: "TVL Secured" },
              { value: "100%", label: "Audited Code" },
              { value: "8+", label: "Chains Supported" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Our <span className="text-amber-600">Blockchain Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              End-to-end blockchain engineering — from concept to mainnet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Smart Contracts", "Secure Solidity & Rust contracts with full test coverage"],
              ["Token & NFT Systems", "ERC-20, ERC-721, ERC-1155, staking & governance"],
              ["DeFi Platforms", "DEXs, lending, yield farming & oracles"],
              ["Layer-2 & Cross-Chain", "Polygon, Arbitrum, Optimism & bridges"],
              ["Private Blockchains", "Hyperledger, Corda & permissioned networks"],
              ["Audits & Consulting", "Threat modeling, audits & compliance"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100
                           hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Blockchain <span className="text-amber-600">Use Cases</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Supply Chain Traceability",
              "Asset Tokenization",
              "Decentralized Identity",
              "Trade Finance",
              "Loyalty & Rewards",
              "Carbon Credits & ESG",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100
                           hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item}</h3>
                <p className="text-gray-700">
                  Secure, transparent and scalable blockchain implementation tailored to business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Secure Blockchain Solutions
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            From smart contracts to enterprise blockchain systems — let’s build it right.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-amber-600 font-bold text-xl rounded-full
                       hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Discovery Call
            <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-8 text-blue-100 text-lg">
            Audited code • Enterprise security • Real-world production experience
          </p>
        </div>
      </section>

    </div>
  );
};

export default BlockchainDevelopment;
