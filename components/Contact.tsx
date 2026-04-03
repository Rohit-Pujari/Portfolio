function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full max-w-6xl flex-col gap-5 rounded-3xl border border-white/12 bg-black/40 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 md:bg-white/10"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">
          Contact
        </p>
        <h2 className="text-xl font-bold sm:text-2xl">Contact me</h2>
        <p className="max-w-2xl text-sm leading-6 text-white/70">
          Open to internships, freelance work, and full-time roles.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:rohitpujari.dev@gmail.com"
            className="rounded-2xl border border-white/12 bg-white/14 p-4 transition-colors hover:bg-white/18 sm:p-5 md:bg-white/11 md:hover:bg-white/14"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Email
            </p>
            <p className="mt-3 break-all text-sm text-white/85">
              rohitpujari.dev@gmail.com
            </p>
          </a>
          <a
            href="https://github.com/Rohit-Pujari"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/12 bg-white/14 p-4 transition-colors hover:bg-white/18 sm:p-5 md:bg-white/11 md:hover:bg-white/14"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              GitHub
            </p>
            <p className="mt-3 text-sm text-white/85">Rohit-Pujari</p>
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-pujari-616798293/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/12 bg-white/14 p-4 transition-colors hover:bg-white/18 sm:p-5 md:bg-white/11 md:hover:bg-white/14"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              LinkedIn
            </p>
            <p className="mt-3 text-sm text-white/85">
              rohit-pujari-616798293
            </p>
          </a>
        </div>

        <div className="rounded-2xl border border-white/12 bg-white/14 p-5 sm:p-6 md:bg-white/11">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Base
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">
            Hubli, Karnataka, India
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
            If you are hiring, building, or collaborating, send me the role,
            product, or project details and I will get back to you.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:rohitpujari.dev@gmail.com"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Send email
            </a>
            <a
              href="/resume"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
