function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/30" />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
            <h1 className="text-lg font-semibold">Okwaro</h1>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
            <li>
              <a className="transition hover:text-white" href="#home">Home</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#about">About</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#services">Services</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#skills">Skills</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#projects">Projects</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
