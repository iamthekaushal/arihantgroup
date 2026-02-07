import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ed6e3e] px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Sign up to get started with us
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                outline-none transition"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                outline-none transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              rows={3}
              placeholder="Your address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none
                focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                outline-none transition"
            />
          </div>

          {/* City + Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                  outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pincode
              </label>
              <input
                type="text"
                placeholder="Pincode"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                  focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                  outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3
                focus:border-[#ed6e3e] focus:ring-2 focus:ring-[#ed6e3e]/40
                outline-none transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ed6e3e] hover:bg-[#d85f32]
              text-white font-semibold py-3 rounded-lg
              transition disabled:opacity-60"
          >
            {loading ? "Creating Account…" : "Create Account"}
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-3">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#ed6e3e] font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
