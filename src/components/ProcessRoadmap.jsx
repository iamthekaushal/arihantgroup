// src/components/ProcessRoadmap.jsx
import React from "react";
import GreyPattern from "../assets/grey.png";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business goals, target audience, competitors, and market pain points. We define success metrics, map user journeys, and align vision before writing a single line of code.",
    imageUrl:
      "https://www.baytechconsulting.com/_next/image?url=https%3A%2F%2Fdzrge5zzbsh6q.cloudfront.net%2Fagentic-sdlc-hero-image-ai-software-blueprint.jpg&w=3840&q=75",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Wireframes, high-fidelity UI/UX, system architecture, tech stack decisions, and scalable infrastructure planning — everything your product needs to stand strong.",
    imageUrl:
      "https://slidebazaar.com/wp-content/uploads/2023/08/11-Steps-Linear-Presentation-PPT-Template.jpg",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile sprints with clean code, CI/CD, testing, and weekly demos. Frontend, backend, mobile, and blockchain layers built iteratively and transparently.",
    imageUrl:
      "https://www.drawio.com/assets/img/blog/ui-refresh-dark-classic.png",
  },
  {
    number: "04",
    title: "Growth & Scaling",
    description:
      "Launch, optimize, and scale. SEO, PPC, analytics, user acquisition, performance tuning, and continuous improvement driven by real data.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/digital-rocket-launch-rapid-growth-concept-dark-background-illustration-blue-symbolizing-successful-423324864.jpg",
  },
];

const ProcessRoadmap = () => {
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

      <section className="relative bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-gray-100 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={GreyPattern}
            alt="background pattern"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Process <span className="text-amber-600">Roadmap</span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Transparent. Predictable. Results-driven.
            </p>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From first conversation to scaled growth — no black boxes, just clarity.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line (desktop only) */}
            <div className="hidden lg:block absolute top-[150px] left-0 right-0 h-1 bg-gray-200" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  style={{ animationDelay: `${index * 180}ms` }}
                  className="group relative bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp"
                >
                  {/* Step number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Image */}
                  <div className="mt-10 mb-6 h-44 sm:h-52 rounded-xl overflow-hidden border border-gray-200 group-hover:border-blue-300 transition">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center flex-grow">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
              Every project follows this proven roadmap — customized to your goals,
              timeline, and growth ambitions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-amber-600 text-white font-bold text-base sm:text-lg rounded-full hover:bg-blue-700 hover:shadow-xl transition transform hover:scale-105"
            >
              Begin Your Journey
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
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

export default ProcessRoadmap;
