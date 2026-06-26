const links = [
  { label: 'Home', href: '/' , active: true },
  { label: 'Track complaint', href: '/track' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 px-6 py-4 shadow-xs backdrop-blur transition duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="font-bold text-slate-900 text-3xl ">
            Sakhi<span className="text-orange-500 pl-2 ">AI</span>
          </div>
        </div>

        <div className="hidden items-center gap-10 md:flex ">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-base font-medium transition ${link.active ? 'border-b-2 border-orange-500 text-orange-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {link.label}
            </a>
          ))}
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
  )
}

export default Navbar
