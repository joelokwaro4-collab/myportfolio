function Contacts() {
  return (
    <section id="contacts" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-indigo-900/90 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-slate-100">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Contact</p>
            <h2 className="text-4xl font-semibold">Let&rsquo;s build something great together.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Have a project in mind or just want to say hello? Send a message and let&rsquo;s make your next website shine.
            </p>
            <div className="space-y-3 rounded-[1.75rem] bg-slate-950/40 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
              <p>joelokwaro4@gmail.com</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Phone</p>
              <p>0117162026</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <form className="space-y-5 rounded-[1.75rem] bg-slate-950/80 p-8 shadow-inner shadow-black/20">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Your Name</label>
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400" type="email" placeholder="Your Email" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea className="h-36 w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-400" placeholder="Your Message" />
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
