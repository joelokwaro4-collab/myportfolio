function Herosection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_35%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl text-slate-100">
          <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">Full-stack developer • React • Tailwind</span>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Crafting modern web experiences with beautiful design and clean code.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build responsive portfolio websites, web apps, and landing pages that look polished, perform fast, and tell your story with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">
              View my work
            </a>
            <a href="#contacts" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm text-slate-100 transition hover:border-indigo-400 hover:text-indigo-200">
              Contact me
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/75 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="mt-2 text-sm text-slate-400">Years of experience</p>
            </div>
            <div className="rounded-3xl bg-slate-900/75 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="mt-2 text-sm text-slate-400">Projects delivered</p>
            </div>
            <div className="rounded-3xl bg-slate-900/75 p-6 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="mt-2 text-sm text-slate-400">Happy clients</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute left-5 top-10 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950 p-8">
            <div className="mb-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-6 text-white shadow-lg shadow-indigo-500/20">
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-100/90">Hello, I’m Okwaro</p>
              <h2 className="mt-4 text-3xl font-semibold">A modern web developer crafting polished UI experiences.</h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>Specializing in React, Tailwind CSS, Node.js, and MongoDB to turn ideas into real products.</p>
              <p>Focused on clean visual systems, accessible interfaces, and fast-loading builds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
