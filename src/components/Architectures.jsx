import { useState } from 'react'
import { architectures } from '../data/architectures'

function ArchCard({ arch }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all duration-300">
      <div className="p-6">
        <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">{arch.company}</p>
        <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">{arch.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{arch.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {arch.tags.map(t => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded">
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {expanded ? 'Hide' : 'View'} Architecture
        </button>
      </div>

      {expanded && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
          {arch.imagePath ? (
            <img
              src={arch.imagePath}
              alt={`${arch.title} architecture diagram`}
              className="w-full rounded-xl object-contain max-h-[500px] cursor-zoom-in"
              onClick={() => window.open(arch.imagePath, '_blank')}
              title="Click to open full size"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-48 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 text-center px-6">
              <span className="text-3xl mb-3">🖼️</span>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Diagram coming soon</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1 font-mono">
                Add image to <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">/public/architectures/</code> and update <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">data/architectures.js</code>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Architectures() {
  return (
    <section id="architectures" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">05. Architecture</p>
        <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-3">System designs</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl text-sm">
          Architecture diagrams from key deliverables. Expand any card to view the diagram — click the image to open full size.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {architectures.map(arch => (
            <ArchCard key={arch.id} arch={arch} />
          ))}
        </div>
      </div>
    </section>
  )
}
