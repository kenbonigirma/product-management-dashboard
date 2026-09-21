import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 p-4 sm:flex-row">
        <span className="text-xl font-bold text-blue-600">Nexus Store</span>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}