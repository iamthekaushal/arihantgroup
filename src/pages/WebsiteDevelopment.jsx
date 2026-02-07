import React from "react";

const WebsiteDevelopment = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "42% faster load • Higher conversions",
      image:
        "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
    },
    {
      title: "SaaS Marketing Site",
      desc: "95+ Lighthouse • 3× leads",
      image:
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f78520a6b0c603f014b_6002086f72b7274adf01e262_oFjwpw6zA5OHS4WHxGTzF4gWxz3UvW-s1oiXXLNQ-qL6O0OObxHX4FVw3Hi5IqIErx-K_JhRnw02EWWjApXmvtfsydVO5RT-6ly635eDICvargj_r1pBszxbnJJBJcXffY8fvKRc.jpeg",
    },
    {
      title: "Corporate Website",
      desc: "SEO-optimized • Clean UX",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.31iabE65aL6HwNF_hkX_pwHaEU?pid=Api&P=0&h=220",
    },
    {
      title: "Coca-Cola Landing Page",
      desc: "Brand-focused • High engagement",
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/cocacola-landing-page-1024x597.webp",
    },
    {
      title: "Modern Business Website",
      desc: "Bold visuals • Responsive layout",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.AZpNO93vu2Y0yA5Vc2qwYgHaD4?pid=Api&P=0&h=220",
    },
    {
      title: "Enterprise Homepage",
      desc: "Scalable design • Clean architecture",
      image:
        "https://www.happeo.com/hubfs/Happeo-Website-Assets/2022/campaigns/page-templates/carousel-company-homepage-1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 mt-10">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.12),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-600 mb-6 leading-tight">
            High-Performance <span className="text-blue-600">Websites</span> That Convert
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Custom websites • SEO-ready • Lightning fast • Mobile-first • Built to scale with your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-amber-600 text-white font-bold text-lg rounded-full
                         hover:bg-amber-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Website Audit
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-amber-600 text-amber-600 font-bold text-lg rounded-full
                         hover:bg-blue-50 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Featured <span className="text-amber-600">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden
                           hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
