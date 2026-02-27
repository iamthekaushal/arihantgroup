import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-[#eb490e] via-[#eb490e] to-[#eb490e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-lg">
            Contact <span className="text-white">Arihant</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-medium drop-shadow">
            Speak directly with our engineering & strategy team. No bots. No delays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <span className="text-white text-xl">●</span>
              <span className="font-semibold">
                Response in 4 hours (business days)
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">
                Audited. Secure. Institutional.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT + FORM ================= */}
      <section className="py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* -------- LEFT INFO -------- */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Voice Support</h3>
                <a
                  href="tel:+18884775475"
                  className="flex items-center gap-3 text-3xl sm:text-4xl font-extrabold text-[#ed6e3e] hover:text-[#d00202] transition"
                >
                  +1-916-396-7217
                </a>
                <p className="text-gray-600 mt-2">
                  Mon–Fri 9:00 AM – 6:00 PM EST
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">Direct Email</h3>
                <a
                  href="mailto:support@arihantgroup.net"
                  className="text-2xl sm:text-3xl font-bold text-[#ed6e3e] hover:text-[#d00202] transition hover:underline"
                >
                  support@arihantgroup.net
                </a>
                <p className="text-gray-600 mt-2">
                  Technical & strategic inquiries only
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Operational Hubs
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Sacramento, USA</p>
                    <p className="text-gray-700">
                      sacramento, CA
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">India</p>
                    <p className="text-gray-700">
                      Business Bay, Digital Economy District
                    </p>
                  </div>
                </div>
              </div>

              <p className="italic text-gray-600">
                Join the axis of innovation between USA and India
              </p>
            </div>

            {/* -------- RIGHT FORM -------- */}
            <div className="bg-white rounded-3xl shadow-xl border p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Technical Inquiry
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border focus:border-[#ed6e3e] focus:ring-2 focus:ring-red-200 outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border focus:border-[#ed6e3e] focus:ring-2 focus:ring-red-200 outline-none"
                  required
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-xl border focus:border-[#ed6e3e] focus:ring-2 focus:ring-red-200 outline-none"
                  required
                />

                <select className="w-full px-4 py-3 rounded-xl border focus:border-[#ed6e3e] focus:ring-2 focus:ring-red-200 outline-none">
                  <option>Select Project Type</option>
                  <option>Mobile App Development</option>
                  <option>Website Development</option>
                  <option>Digital Marketing</option>
                  <option>Blockchain Solutions</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Brief project description"
                  className="w-full px-4 py-3 rounded-xl border focus:border-[#ed6e3e] focus:ring-2 focus:ring-red-200 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-[#f00303] text-white font-bold rounded-full hover:bg-[#d00202] transition shadow-lg hover:scale-[1.02]"
                >
                  Submit Inquiry
                </button>
              </form>

              <p className="text-center text-gray-500 mt-4 text-sm">
                We usually respond within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-14 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            USA • India • Global Delivery
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ed6e3e] text-white font-bold rounded-full hover:bg-[#d00202] transition shadow-lg"
          >
            Schedule Discovery Call →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
