function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Technologies I enjoy working with</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Figma'].map((skill) => (
            <div key={skill} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 text-center shadow-lg shadow-slate-950/10">
              <p className="text-lg font-semibold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
