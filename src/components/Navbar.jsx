import logo from "../assets/nexuslog.jpg";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/home", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-950 shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/home" className="flex items-center">
          <img
            src={logo}
            alt="Nexus Store"
            className="h-10 w-10 object-contain"
          />
          <span className="ml-2 text-xl font-bold text-blue-600">
            Nexus Store
          </span>
        </NavLink>
        <ul className="flex items-center gap-5">
          {links.map((link) => {
            const isLinkActive =
              location.pathname === link.to ||
              (link.to === "/login" && location.pathname === "/");

            return (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={`text-sm font-medium transition ${
                    isLinkActive
                      ? "font-semibold text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}