// src/pages/AboutUs.tsx
import React from 'react';
import { ArrowRight, Globe, Trophy, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-amber-50/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-[#ed6e3e]">About</span>{' '}
            <span className="text-blue-600">Arihant</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Turning bold ideas into high-performance digital products — with enterprise-grade quality, startup speed, and global efficiency.
          </p>

          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="px-6 py-3 bg-[#ed6e3e] text-white font-semibold rounded-full text-lg shadow-md">
              Est. 2020
            </div>
            <div className="px-6 py-3 bg-gray-800/90 text-white font-medium rounded-full text-lg">
              120+ Projects
            </div>
            <div className="px-6 py-3 bg-blue-600/90 text-white font-medium rounded-full text-lg">
              15+ Countries
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                From Vision <span className="text-[#ed6e3e]">to Victory</span>
              </h2>

              <div className="space-y-5 md:space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, Arihant Group was created with one clear mission: <strong>great digital products shouldn't cost a fortune or take forever</strong>.
                </p>
                <p>
                  We merged Silicon Valley discipline with global talent — building a lean, high-velocity agency that delivers enterprise-level quality at startup-friendly pricing and timelines.
                </p>
                <p>
                  Today we partner with ambitious brands in fintech, e-commerce, healthcare, edtech, real estate, logistics and more — helping them dominate in crowded digital markets.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-9xl opacity-20">
                  🌐
                </div>
                {/* Replace with real image when ready */}
                {/* <img src="/images/team-working.jpg" alt="Arihant team" className="absolute inset-0 w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-[#ed6e3e]">Core Values</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that shape every decision, every line of code, and every client relationship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Trophy,
                title: "Excellence First",
                desc: "We hold every deliverable — code, design, campaign — to world-class standards. No shortcuts.",
              },
              {
                icon: Globe,
                title: "Radical Transparency",
                desc: "Weekly demos, live dashboards, open communication channels. You always know what's happening.",
              },
              {
                icon: Users,
                title: "Results Obsessed",
                desc: "Success = your KPIs. Downloads, revenue, ROAS, retention — not just 'delivered on time'.",
              },
              {
                icon: ArrowRight,
                title: "Long-term Partnership",
                desc: "We build scalable, maintainable solutions — designed for growth, not just launch.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="
                  bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md
                  border border-gray-100 transition-all duration-300
                  flex flex-col items-center text-center
                "
              >
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-[#ed6e3e] mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              By the <span className="text-[#ed6e3e]">Numbers</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: '120+', label: 'Projects Delivered', desc: 'From MVP to enterprise scale' },
              { number: '15+', label: 'Countries Served', desc: 'US, UK, UAE, India, Singapore...' },
              { number: '98%', label: 'Client Satisfaction', desc: 'Based on long-term partnerships' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-[#ed6e3e] mb-3">
                  {stat.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#ed6e3e] to-[#d85c34] text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Let's talk — whether it's a new app, scaling marketing, or exploring blockchain opportunities.
          </p>

          <a
            href="/contact"
            className="
              inline-flex items-center gap-3 px-10 py-5 
              bg-white text-[#ed6e3e] font-bold text-xl rounded-full
              hover:bg-gray-100 hover:shadow-2xl transition-all duration-300
              transform hover:scale-[1.04] active:scale-100
            "
          >
            Start the Conversation
            <ArrowRight className="w-6 h-6" />
          </a>

          <p className="mt-8 text-lg opacity-90">
            US-quality standards • Global delivery • Results-focused partnership
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;