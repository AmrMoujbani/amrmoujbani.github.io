export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-16 relative overflow-visible">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-rose-400/10 dark:bg-rose-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full py-24 relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-4 animate-fade-up opacity-0-init"
            style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            Hello, I'm
          </p>

          <h4 className="font-display leading-none mb-4 animate-fade-up opacity-0-init"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="block text-5xl md:text-6xl font-extrabold gradient-name">
              Amr Moujbani
            </span>
          </h4>

          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light max-w-xl mt-6 mb-10 animate-fade-up opacity-0-init"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Senior Software Engineer focused on{' '}
            <span className="text-zinc-900 dark:text-white font-medium">performance optimisation</span>{' '}
            and{' '}
            <span className="text-zinc-900 dark:text-white font-medium">distributed systems</span>.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <a href="#experience"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold rounded-lg transition-colors">
              View Experience
            </a>
            <a href="#contact"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-amber-400 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium rounded-lg transition-colors">
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-16 animate-fade-up opacity-0-init"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '36%', label: 'Latency Reduction' },
              { value: '62%', label: 'NAV Throughput Gain' },
            ].map(s => (
              <div key={s.label} className="border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 rounded-xl px-5 py-3 transition-colors">
                <div className="font-display font-bold text-2xl text-zinc-900 dark:text-white">{s.value}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end animate-fade-up opacity-0-init"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500 rounded-lg blur-xl opacity-30 animate-pulse"></div>
            <img src="/me.png" alt="Amr Moujbani" className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg border-4 border-zinc-50 dark:border-zinc-900 shadow-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
