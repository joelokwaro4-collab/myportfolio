function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">About me</p>
          <h2 className="text-4xl font-semibold text-white">Creative developer with a passion for polished digital experiences.</h2>
          <p className="text-lg leading-8 text-slate-300">
            I enjoy building modern, responsive websites and applications for brands that want to stand out. My work combines thoughtful UX, clean React code, and crisp visual design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-900/70 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">What I do</h3>
            <p className="mt-4 text-slate-300">I design and build portfolio websites, landing pages, and dashboard experiences using the latest frontend technologies.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />Responsive layouts and UI systems</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />React-driven interfaces with smooth interactions</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />Performance, accessibility, and clean component structure</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-indigo-500/10 p-6 text-white shadow-lg shadow-indigo-500/10">
              <p className="text-3xl font-bold">3+</p>
              <p className="mt-2 text-slate-300">Years experience</p>
            </div>
            <div className="rounded-[1.75rem] bg-cyan-500/10 p-6 text-white shadow-lg shadow-cyan-500/10">
              <p className="text-3xl font-bold">10+</p>
              <p className="mt-2 text-slate-300">Completed projects</p>
            </div>
            <div className="rounded-[1.75rem] bg-violet-500/10 p-6 text-white shadow-lg shadow-violet-500/10">
              <p className="text-3xl font-bold">5+</p>
              <p className="mt-2 text-slate-300">Happy clients</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-800/80 p-6 text-white shadow-lg shadow-slate-950/20">
              <p className="text-3xl font-bold">Fast</p>
              <p className="mt-2 text-slate-400">Modern, responsive builds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
