import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Track Complaint", href: "/track" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 px-6 py-4 shadow-xs backdrop-blur transition duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold text-slate-900">
            Sakhi<span className="pl-2 text-orange-500">AI</span>
          </div>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`border-b-2 pb-1 text-base font-medium transition ${
                  isActive
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-5">
          <button className="rounded-2xl border border-slate-300 bg-transparent px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Log In
          </button>

          <button className="rounded-2xl bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
