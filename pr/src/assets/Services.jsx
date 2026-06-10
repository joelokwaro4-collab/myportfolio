function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">What I can build for you</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            From web design systems to full-stack applications, I deliver polished digital experiences that amplify brands and drive business goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Brand-ready websites',
              description: 'Beautiful company sites, personal portfolios, and landing pages that convert visitors into customers.',
              accent: 'bg-gradient-to-br from-fuchsia-500 to-orange-400',
            },
            {
              title: 'Web applications',
              description: 'Interactive dashboards, marketplaces, and admin tools built with React and Node.js.',
              accent: 'bg-gradient-to-br from-cyan-500 to-blue-500',
            },
            {
              title: 'Performance & optimization',
              description: 'Fast load times, responsive design, and accessible interfaces for every device.',
              accent: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
            },
          ].map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <div className={`h-2.5 w-20 rounded-full ${service.accent} opacity-90`} />
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">Learn more</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
