import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isMobile = (value) =>
    /^[6-9]\d{9}$/.test(value); // Indian mobile number

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isEmail(identifier) && !isMobile(identifier)) {
      setIsLoading(false);
      return;
    }

    const payload = isEmail(identifier)
      ? { email: identifier, password }
      : { mobile: identifier, password };

    setTimeout(() => {
      setIsLoading(false);
      console.log(payload);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-slate-100 dark:bg-slate-950">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 px-6 sm:px-8 py-8 sm:py-10">

          {/* ================= HEADER ================= */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Access your account securely
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email / Mobile */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email or Mobile number
              </label>

              <div className="relative">
                {isMobile(identifier) ? (
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                ) : (
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                )}

                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter email or mobile"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg
                    bg-white dark:bg-slate-800
                    border border-slate-300 dark:border-slate-700
                    text-slate-900 dark:text-white
                    placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {identifier && !isEmail(identifier) && !isMobile(identifier) && (
                <p className="mt-1 text-xs text-red-500">
                  Enter a valid email or 10-digit mobile number
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-3 rounded-lg
                    bg-white dark:bg-slate-800
                    border border-slate-300 dark:border-slate-700
                    text-slate-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-right"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-semibold text-white
                bg-blue-600 hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:ring-blue-600
                disabled:opacity-60 transition"
            >
              {isLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          {/* ================= FOOTER ================= */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-amber-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
