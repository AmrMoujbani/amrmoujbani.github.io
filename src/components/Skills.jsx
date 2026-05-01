import { skills } from '../data/projects'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} id="skills" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">03. Skills</p>
          <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-12">Tech stack</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div key={group.category}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''} p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-colors`}>
              <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="px-3 py-1.5 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
