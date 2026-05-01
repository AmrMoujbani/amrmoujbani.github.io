import { useState } from 'react'
import { experience } from '../data/experience'

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = experience[active]

  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">02. Experience</p>
        <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-12">Where I've worked</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible shrink-0 md:w-52">
            {experience.map((e, i) => (
              <button key={e.id} onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal ${
                  active === i
                    ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-l-2 border-amber-400'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}>
                <div className="font-semibold text-xs">{e.company.split('·')[0].trim()}</div>
                <div className="text-xs opacity-70 mt-0.5">{e.period}</div>
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{job.title}</h3>
              <span className="text-amber-500 dark:text-amber-400 font-medium text-sm">@ {job.company}</span>
            </div>
            <div className="flex gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-4">
              <span>{job.period}</span><span>{job.location}</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 italic">{job.description}</p>
            <ul className="space-y-3 mb-6">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-amber-400 mt-1 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.stack.map(t => (
                <span key={t} className="px-2.5 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
