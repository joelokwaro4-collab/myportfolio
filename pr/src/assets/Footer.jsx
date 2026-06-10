function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 px-6 py-12 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Okwaro</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Full-stack developer building web experiences that feel modern, fast, and memorable.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <p className="mt-2 text-sm">joelokwaro4@gmail.com</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Location</p>
            <p className="mt-2 text-sm">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 Okwaro. Built with React, Vite, and Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
