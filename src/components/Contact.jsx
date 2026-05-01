import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} id="contact" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`reveal ${inView ? 'visible' : ''}`}>
            <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">06. Contact</p>
            <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-4">Let's talk</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
              I'm passively open to senior backend engineering opportunities. If you're building something interesting, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:moujbani.a@gmail.com"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold rounded-lg transition-colors text-center">
                moujbani.a@gmail.com
              </a>
              <a href="https://linkedin.com/in/amrmoujbani" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-amber-400 hover:text-amber-600 dark:hover:border-amber-400 dark:hover:text-amber-400 font-medium rounded-lg transition-colors text-center">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { emoji: '🇱🇺', title: 'Based in Luxembourg', desc: 'Open to remote & on-site roles in Luxembourg and Europe', delay: 'reveal-delay-1' },
              { emoji: '💬', title: 'Languages', desc: 'English · French · Arabic', delay: 'reveal-delay-3' },
            ].map(card => (
              <div key={card.title}
                className={`reveal ${card.delay} ${inView ? 'visible' : ''} p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-4`}>
                <span className="text-3xl">{card.emoji}</span>
                <div>
                  <p className="font-display font-semibold text-zinc-900 dark:text-white">{card.title}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
