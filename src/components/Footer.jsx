import Logo from '../assets/logoarihant.png';

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>

      <footer className="relative bg-[#0b0b0b] text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://thumbs.dreamstime.com/b/abstract-futuristic-molecules-technology-linear-polygonal-pattern-shapes-dark-blue-background-illustration-vector-d-188235168.jpg"
            alt="Tech pattern"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/70 via-[#0b0b0b]/90 to-[#0b0b0b]" />
        </div>

        {/* Main Grid */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="animate-fadeIn text-center sm:text-left">
            <img
              src={Logo}
              alt="Arihant Logo"
              className="h-14 mx-auto sm:mx-0 mb-4 object-contain"
            />

            <p className="text-sm leading-relaxed">
              Building secure, scalable digital products for ambitious US brands — from blockchain to mobile to performance marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: 'Services', path: '/services' },
                { label: 'About', path: '/about' },
                { label: 'Industry', path: '/industry' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms and Conditions', path: '/termsandconditions' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="hover:text-[#48c3ff] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fadeIn text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">

              <li className="flex flex-col sm:flex-row sm:items-start gap-3 justify-center sm:justify-start">
                📍
                <span>
                  Sacramento,
                  <br />
                  US (or India Office if applicable)
                </span>
              </li>

              <li className="flex justify-center sm:justify-start gap-3">
                📞
                <a
                  href="tel:+19163967217"
                  className="hover:text-[#48c3ff]"
                >
                  +1 (916) 396-7217
                </a>
              </li>

              <li className="flex justify-center sm:justify-start gap-3">
                ✉️
                <a
                  href="mailto:support@arihantgroup.net"
                  className="hover:text-[#48c3ff]"
                >
                  support@arihantgroup.net
                </a>
              </li>

            </ul>
          </div>

          {/* Socials */}
          <div className="animate-fadeIn text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">
              Connect
            </h4>

            <div className="flex justify-center sm:justify-start gap-6">

              <a
                href="https://linkedin.com/in/iamthekaushal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/LinkedIn-logo-white-PNG.png"
                  alt="LinkedIn"
                  className="w-8 h-8 object-contain hover:brightness-150 transition"
                />
              </a>

              <a
                href="https://x.com/iamkaushal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Screen_of_X_%28Twitter%29.png/1200px-Screen_of_X_%28Twitter%29.png"
                  alt="X"
                  className="w-8 h-8 object-contain hover:brightness-150 transition"
                />
              </a>

              <a
                href="https://github.com/iamthekaushal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/github-icon-1-logo.png"
                  alt="GitHub"
                  className="w-8 h-8 object-contain hover:brightness-150 transition"
                />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} Arihant Group. All rights reserved.
        </div>

      </footer>
    </>
  );
}
