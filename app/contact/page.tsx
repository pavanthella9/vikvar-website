export default function Page() {
  return (
    <main>
      <section className="min-h-[580px] bg-[#071a35] py-24 text-white">
        <div className="site-container">
          <span className="eyebrow eyebrow-dark">Vikvar Technologies</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">Contact Vikvar</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Tell us about your hiring requirement, consulting need, or application development initiative.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a href="mailto:info@vikvartech.com" className="rounded-2xl bg-white p-6 text-[#0a1b3d]">
              <p className="text-sm font-semibold text-blue-700">Email</p>
              <p className="mt-2 text-lg font-semibold">info@vikvartech.com</p>
            </a>
            <div className="rounded-2xl bg-white p-6 text-[#0a1b3d]">
              <p className="text-sm font-semibold text-blue-700">Operations</p>
              <p className="mt-2 text-lg font-semibold">United States · India</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
