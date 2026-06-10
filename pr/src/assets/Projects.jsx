function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">A selection of recent work</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Landing page design',
              description: 'A vibrant, responsive landing page built for a startup brand experience.',
              accent: 'from-indigo-500 to-violet-500',
            },
            {
              title: 'Dashboard interface',
              description: 'A clean admin dashboard with charts, controls, and responsive visuals.',
              accent: 'from-cyan-500 to-blue-500',
            },
            {
              title: 'Portfolio website',
              description: 'A modern portfolio with polished sections, animations, and strong typography.',
              accent: 'from-purple-500 to-pink-500',
            },
          ].map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-slate-900/90">
              <div className={`h-48 rounded-[1.5rem] bg-gradient-to-br ${project.accent} opacity-90`} />
              <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View project
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
