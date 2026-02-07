// src/components/Hero.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-16 md:pt-20">
      {/* Background Video + Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65" />
        <iframe
          className="
            absolute top-1/2 left-1/2 w-full h-full min-w-[140%] min-h-[140%]
            -translate-x-1/2 -translate-y-1/2 object-cover
          "
          src="https://www.youtube.com/embed/7dnLjw9dBCk?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playsinline=1&playlist=7dnLjw9dBCk&rel=0"
          title="Background tech animation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-5 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Left - Text Content */}
            <div className="text-center lg:text-left space-y-8 md:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl font-extrabold leading-tight tracking-tight">
                <span className="inline-block bg-gradient-to-r from-[#e17100] to-[#403dff] text-white px-5 py-2 rounded-lg mb-4 md:mb-6">
                  Engineering the Future
                </span>
                <br className="hidden sm:block" />
                <span className="inline-block bg-gradient-to-r from-[#e17100] to-[#ff8c3d] text-white px-5 py-2 rounded-lg mb-4 md:mb-6">
                  Digital • Blockchain • Mobile Excellence
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We help US-based startups and enterprises scale faster with
                <span className="font-semibold text-[#48c3ff]"> data-driven marketing</span>,
                <span className="font-semibold text-[#48c3ff]"> secure blockchain solutions</span>, and
                <span className="font-semibold text-[#48c3ff]"> high-performance mobile apps</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <a
                  href="/contact"
                  className="
                    group inline-flex items-center justify-center gap-2
                    bg-[#ed6e3e] hover:bg-[#d85c34] text-white
                    px-8 py-4 rounded-lg font-semibold text-lg
                    transition-all duration-300 shadow-lg hover:shadow-[#ed6e3e]/40
                    transform hover:-translate-y-0.5
                  "
                >
                  Get Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/services"
                  className="
                    inline-flex items-center justify-center
                    border-2 border-white/70 text-white hover:bg-white/10
                    px-8 py-4 rounded-lg font-semibold text-lg
                    transition-all duration-300 hover:border-white
                  "
                >
                  Explore Our Work
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="
              bg-white/8 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10
              border border-white/15 shadow-2xl
              transform transition-all duration-500
            ">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">
                Book Your Free Strategy Session
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="
                    w-full px-5 py-4 rounded-lg bg-black/40 text-white
                    border border-white/20 placeholder:text-gray-400
                    focus:outline-none focus:border-[#48c3ff]/60 focus:ring-2 focus:ring-[#48c3ff]/30
                    transition-all duration-200
                  "
                />

                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="
                    w-full px-5 py-4 rounded-lg bg-black/40 text-white
                    border border-white/20 placeholder:text-gray-400
                    focus:outline-none focus:border-[#48c3ff]/60 focus:ring-2 focus:ring-[#48c3ff]/30
                    transition-all duration-200
                  "
                />

                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  className="
                    w-full px-5 py-4 rounded-lg bg-black/40 text-white
                    border border-white/20 placeholder:text-gray-400
                    focus:outline-none focus:border-[#48c3ff]/60 focus:ring-2 focus:ring-[#48c3ff]/30
                    transition-all duration-200
                  "
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    w-full px-5 py-4 rounded-lg bg-black/40 text-white
                    border border-white/20 placeholder:text-gray-400
                    focus:outline-none focus:border-[#48c3ff]/60 focus:ring-2 focus:ring-[#48c3ff]/30
                    transition-all duration-200
                  "
                />

                <textarea
                  rows={4}
                  placeholder="Tell us about your goals / project..."
                  className="
                    w-full px-5 py-4 rounded-lg bg-black/40 text-white
                    border border-white/20 placeholder:text-gray-400
                    focus:outline-none focus:border-[#48c3ff]/60 focus:ring-2 focus:ring-[#48c3ff]/30
                    transition-all duration-200 resize-none
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full bg-[#48c3ff] hover:bg-[#18a2e5]
                    text-white py-4 rounded-lg font-semibold text-lg
                    transition-all duration-300 shadow-lg hover:shadow-[#48c3ff]/40
                    transform hover:-translate-y-0.5
                  "
                >
                  Request Free Consultation
                </button>
              </form>

              <p className="text-gray-400 text-sm mt-6 text-center">
                🔒 Your information is secure. We never spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;