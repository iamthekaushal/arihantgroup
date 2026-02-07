import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logoarihant.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeAll();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavigate('/')}>
              <img
                src={Logo}
                alt="Arihant Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-10">

              <NavLink onClick={() => handleNavigate('/')}>Home</NavLink>

              {/* Services Dropdown (CLICK) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === 'services' ? null : 'services'
                    )
                  }
                  className="flex items-center gap-2 text-gray-700 hover:text-[#ed6e3e] font-medium transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border py-4">
                      <DropdownItem to="/mobile-app-development" label="Mobile App Development" onClick={handleNavigate} />
                      <DropdownItem to="/website-development" label="Website Development" onClick={handleNavigate} />
                      <DropdownItem to="/digital-marketing" label="Digital Marketing" onClick={handleNavigate} />
                      <DropdownItem to="/blockchain-solutions" label="Blockchain Solutions" onClick={handleNavigate} />
                    </div>
                  </div>
                )}
              </div>

              <NavLink onClick={() => handleNavigate('/services')}>Technology</NavLink>
              <NavLink onClick={() => handleNavigate('/industry')}>Industry</NavLink>
              <NavLink onClick={() => handleNavigate('/about')}>About Us</NavLink>

            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavigate('/signin')}
              className="text-gray-700 hover:text-[#ed6e3e] font-medium transition"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNavigate('/contact')}
              className="px-8 py-3 bg-[#ed6e3e] hover:bg-[#e55a2b] text-white font-medium rounded-xl shadow-md transition transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/20 z-40" onClick={closeAll}>
          <div
            className="fixed right-0 top-16 bottom-0 w-80 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-8 space-y-2">
              <MobileNavItem label="Home" to="/" onClick={handleNavigate} />

              <MobileDropdown
                label="Services"
                isOpen={activeDropdown === 'services'}
                onToggle={() =>
                  setActiveDropdown(
                    activeDropdown === 'services' ? null : 'services'
                  )
                }
              >
                <MobileDropdownItem to="/mobile-app-development" label="Mobile App Development" onClick={handleNavigate} />
                <MobileDropdownItem to="/website-development" label="Website Development" onClick={handleNavigate} />
                <MobileDropdownItem to="/digital-marketing" label="Digital Marketing" onClick={handleNavigate} />
                <MobileDropdownItem to="/blockchain-solutions" label="Blockchain Solutions" onClick={handleNavigate} />
              </MobileDropdown>

              <MobileNavItem label="Technology" to="/services" onClick={handleNavigate} />
              <MobileNavItem label="Industry" to="/industry" onClick={handleNavigate} />
              <MobileNavItem label="About Us" to="/about" onClick={handleNavigate} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* Reusable Components */

function NavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 hover:text-[#ed6e3e] font-medium transition px-3 py-2"
    >
      {children}
    </button>
  );
}

function DropdownItem({ to, label, onClick }) {
  return (
    <button
      onClick={() => onClick(to)}
      className="w-full text-left px-6 py-3 hover:bg-orange-50 hover:text-[#ed6e3e] transition font-medium"
    >
      {label}
    </button>
  );
}

function MobileNavItem({ label, to, onClick }) {
  return (
    <button
      onClick={() => onClick(to)}
      className="w-full text-left py-4 px-6 text-lg font-medium hover:bg-gray-50 rounded-xl"
    >
      {label}
    </button>
  );
}

function MobileDropdownItem({ to, label, onClick }) {
  return (
    <button
      onClick={() => onClick(to)}
      className="w-full text-left py-3 px-8 text-gray-600 hover:text-[#ed6e3e] hover:bg-orange-50 rounded-lg"
    >
      {label}
    </button>
  );
}

function MobileDropdown({ label, children, isOpen, onToggle }) {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-6 text-lg font-medium"
      >
        {label}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
