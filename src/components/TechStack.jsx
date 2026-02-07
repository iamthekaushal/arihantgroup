// src/components/TechStack.jsx
import React from "react";

// Dashboard screenshots
import GA4DashboardImg from "../assets/1_star-admin-pro-dashboard.png";
import CampaignDashboardImg from "../assets/0_tXgxUG25tz2A-3e5.png";
import StarAdminDashboardImg from "../assets/69b36c825a05bf448a81869683545dc2.png";

const techStack = [
  {
    category: "Marketing",
    technologies: [
      { name: "Google Ads", imageUrl: "https://cdn.freebiesupply.com/logos/thumbs/2x/google-ads-adwords-logo.png" },
      { name: "HubSpot", imageUrl: "https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Logo.jpg" },
      { name: "Meta Business Suite", imageUrl: "https://neuroncdn.com/cdn-0001/a19251868f1a5977186eb80e3f3c86c85003f9c8bde21acc1fbab43848abf9ec?ts=1714629997" },
      { name: "Google Analytics 4", imageUrl: "https://www.vixendigital.com/wp-content/uploads/2023/04/GA4_Logo.svg" },
    ],
  },
  {
    category: "Blockchain",
    technologies: [
      { name: "Ethereum", imageUrl: "https://1000logos.net/wp-content/uploads/2018/05/Ethereum-Logo.jpg" },
      { name: "Solidity", imageUrl: "https://soliditylang.org/assets/logo-og-image.png" },
      { name: "Rust", imageUrl: "https://download.logo.wine/logo/Rust_(programming_language)/Rust_(programming_language)-Logo.wine.png" },
      { name: "Polygon", imageUrl: "https://forkast.news/wp-content/uploads/2021/12/polygon-1260x709.jpg" },
      { name: "Solana", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Solana_cryptocurrency_two.jpg" },
    ],
  },
  {
    category: "Mobile / Web",
    technologies: [
      { name: "React Native", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
      { name: "Node.js", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "AWS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Swift", imageUrl: "https://developer.apple.com/news/images/og/swift-og.jpg" },
      { name: "Kotlin", imageUrl: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png" },
    ],
  },
];

const dashboardExamples = [
  {
    title: "Analytics & Performance Dashboard",
    description:
      "GA4-inspired analytics dashboard — users, sessions, engagement, conversions, traffic sources, and browser insights.",
    image: GA4DashboardImg,
  },
  {
    title: "Marketing Campaign Management",
    description:
      "Modern campaign control panel with engagement metrics, schedules, active vs pending campaigns, and mail flows.",
    image: CampaignDashboardImg,
  },
  {
    title: "Admin & Business Intelligence Panel",
    description:
      "Enterprise-grade admin UI with KPIs, charts, revenue tracking, and modular dashboard components.",
    image: StarAdminDashboardImg,
  },
];

const TechStack = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,102,204,0.08),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Our <span className="text-amber-600">Tech Stack</span>
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Modern, proven technologies powering fast, secure, and scalable digital products
          </p>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From ROI-driven marketing to blockchain and cross-platform development.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-16 sm:mb-24">
          {techStack.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8 pb-4 border-b border-gray-200">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 rounded-2xl bg-white border border-gray-200 shadow-sm p-3 flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-lg transition">
                      <img
                        src={tech.imageUrl}
                        alt={tech.name}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Examples */}
        <div className="mb-16 sm:mb-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Real-World Results We Build
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {dashboardExamples.map((example) => (
              <div
                key={example.title}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {example.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO / Growth Highlight */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-16">
  <div className="grid grid-cols-1 lg:grid-cols-2">

    {/* Left Content */}
    <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-white">
      <span className="text-5xl text-blue-600 opacity-30">“</span>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
        Organic traffic increased by{" "}
        <span className="text-blue-600">500%</span> in under 6 months
      </h3>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
        Leveraging GA4, advanced tracking, and performance-focused SEO,
        we delivered massive organic growth for an ecommerce brand.
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-5 italic text-gray-700 text-lg mb-4">
        “Our traffic jumped to 46K+ monthly visitors in months. Best ROI
        we’ve ever seen.”
      </blockquote>
      <p className="font-semibold text-gray-900">Marketing Director</p>
      <p className="text-gray-600">Fashion Ecommerce Brand</p>
    </div>

    {/* Right Image */}
    <div
      className="hidden lg:block relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>

  </div>
</div>


        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-600 text-base sm:text-lg font-light max-w-3xl mx-auto">
            We continuously adopt and master tools that deliver measurable speed,
            security, and business impact — exactly what modern companies demand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
