export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: photo + bio */}
        <div>
          <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">01. About</p>
          

          {/* Profile picture */}
          <div className="flex items-center gap-5 mb-6">
            <div className="relative shrink-0">
              {/* Placeholder — replace src with your photo path e.g. /photo.jpg */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-2xl font-display font-bold text-white shadow-lg">
                AM
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-zinc-50 dark:border-[#0a0a0a]" title="Open to opportunities" />
            </div>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">Amr Moujbani</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Senior Software Engineer</p>
              <p className="text-sm text-amber-500 dark:text-amber-400 font-mono">Luxembourg 🇱🇺</p>
            </div>
          </div>
          {/* To use a real photo: replace the div above with:
            <img src="/photo.jpg" alt="Amr Moujbani" className="w-20 h-20 rounded-2xl object-cover shadow-lg" />
          */}

          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              Senior Backend Engineer with 7+ years across fintech, and enterprise platforms —
              strong in performance optimisation and distributed systems, with a hands-on track record
              in business analysis and full feature ownership.
            </p>
            <p>
              I find out why systems are slow and fix it at the root — concurrency, batched I/O,
              distributed locking, and architecture that stays correct under load.
            </p>
            <p>
              Currently at <span className="text-zinc-900 dark:text-white font-medium">Clearstream (Deutsche Börse Group)</span>,
              building microservices for a cloud-native fund distribution platform integrated with
              Clearstream's Vestima network.
            </p>
          </div>
        </div>

        {/* Right: strength cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '⚡', title: 'Performance Engineering', desc: 'Profiling, concurrency, batched I/O — I measure before I optimise.' },
            { icon: '🔗', title: 'Distributed Systems', desc: 'Microservice architecture, event-driven design, ACID, multi-instance correctness.' },
            { icon: '📐', title: 'Full Feature Ownership', desc: 'Analysis → design → documentation → production.' },
            { icon: '🔍', title: 'Observability', desc: 'Elastic Stack pipelines, real-time dashboards, MTTR reduction.' },
          ].map(card => (
            <div key={card.title}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/60 dark:hover:border-amber-400/40 transition-colors group">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-display font-semibold text-sm text-zinc-900 dark:text-white mb-1 group-hover:text-amber-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
