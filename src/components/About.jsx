import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} id="about" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">01. About</p>
          <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            I make systems fast.<br />Then I make them right.
          </h2>
          <p className="font-semibold text-zinc-900 dark:text-white mb-6">
            AmrMoujbani<br />
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">Senior Backend Engineer focused on performance optimisation and distributed systems.</span><br />
            <span className="text-sm text-amber-500 dark:text-amber-400 font-mono">Luxembourg 🇱🇺</span>
          </p>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>Senior Backend Engineer with 7+ years across fintech and enterprise platforms — strong in performance optimisation and distributed systems, with a hands-on track record in business analysis and full feature ownership.</p>
            <p>I find out why systems are slow and fix it at the root — concurrency, batched I/O, distributed locking, and architecture that stays correct under load.</p>
            <p>Currently at <span className="text-zinc-900 dark:text-white font-medium">Clearstream (Deutsche Börse Group)</span>, building microservices for a cloud-native fund distribution platform integrated with Clearstream's Vestima network (TA) .</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '⚡', title: 'Performance Engineering', desc: 'Profiling, concurrency, batched I/O — I measure before I optimise.', delay: 'reveal-delay-1' },
            { icon: '🔗', title: 'Distributed Systems', desc: 'Microservices, event-driven architecture, multi-instance correctness, ACID.', delay: 'reveal-delay-2' },
            { icon: '📐', title: 'Full Feature Ownership', desc: 'Analysis → design → documentation → production.', delay: 'reveal-delay-3' },
            { icon: '🔍', title: 'Observability', desc: 'Elastic Stack pipelines, real-time dashboards, MTTR reduction.', delay: 'reveal-delay-4' },
          ].map(card => (
            <div key={card.title}
              className={`reveal ${card.delay} ${inView ? 'visible' : ''} p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/60 dark:hover:border-amber-400/40 transition-colors group`}>
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-display font-semibold text-sm text-zinc-900 dark:text-white mb-1 group-hover:text-amber-500 transition-colors">{card.title}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
