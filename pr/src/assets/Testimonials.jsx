function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-slate-950/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Feedback from people I&apos;ve worked with</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Ama Mwangi',
              role: 'Founder, Fintech Startup',
              quote: 'Okwaro transformed our landing page into a conversion engine. The design looks premium and the speed is impressive.',
            },
            {
              name: 'Lily Njoroge',
              role: 'Product Manager',
              quote: 'The interface is both beautiful and intuitive. Communication was fast, and the final site exceeded expectations.',
            },
            {
              name: 'Sam Kimani',
              role: 'Small Business Owner',
              quote: 'We launched in record time with a website that feels professional and polished. The support afterwards was excellent too.',
            },
          ].map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl transition hover:-translate-y-1">
              <p className="text-lg leading-8 text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
