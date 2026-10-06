import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/nexuslog.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gray-50">
      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="text-center">
            <Link to="/home" className="inline-flex items-center gap-2">
              <img
                src={logo}
                alt="Nexus Store"
                className="mx-auto h-12 w-12 object-contain"
              />
            </Link>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to manage your Nexus Store account
            </p>
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/products"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore products
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        <p>© 2026 Nexus Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
