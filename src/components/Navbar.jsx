import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/nexuslog.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
    { to: "/cart", label: "Cart" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">

        {/* Top bar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Nexus Store"
              className="h-10 w-10 rounded-lg object-contain" />

            <span className="text-xl font-bold text-gray-900">
              Nexus <span className="text-purple-600">Store</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `ml-2 rounded-lg px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`
              }
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                    isActive
                      ? "bg-purple-700 text-white"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`
                }
              >
                Login
              </NavLink>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}