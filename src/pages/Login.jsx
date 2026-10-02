import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Login submitted successfully!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-100">
      <Navbar />

      {/* Main Login Section */}
      <main className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6 py-12">

        {/* Background Decorations */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-300/40"></div>

        <div className="absolute left-1/4 top-1/2 h-12 w-12 rounded-full bg-purple-200/70"></div>

        <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-purple-300/40"></div>

        <div className="absolute bottom-24 right-1/4 h-14 w-14 rounded-full bg-purple-200/60"></div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/80 bg-white/95 p-8 shadow-xl backdrop-blur-sm sm:p-10">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 shadow-lg shadow-purple-200">
            <span className="text-4xl text-white">♧</span>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Login
            </h1>

            <p className="mt-3 text-gray-500">
              Welcome back to Nexus Store
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                  ✉
                </span>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-800"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                  🔒
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600"
                >
                  {showPassword ? "◉" : "◉"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:from-purple-700 hover:to-violet-600 hover:shadow-xl"
            >
              Login
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-600">
              ✓ {message}
            </div>
          )}

          {/* Bottom Text */}
          <div className="mt-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            New to Nexus Store?{" "}
            <button
              type="button"
              className="font-semibold text-purple-600 hover:text-purple-700"
            >
              Create an account
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}