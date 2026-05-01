import { useState } from 'react'
import MermaidDiagram from './MermaidDiagram'

export default function ProjectCard({ project, dark }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-mono text-blue-500 mb-1">{project.company}</p>
            <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <svg className="w-8 h-8 text-zinc-200 dark:text-zinc-700 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
          </svg>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map(h => (
            <span key={h} className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full font-medium">
              {h}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Toggle diagram */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {open ? 'Hide' : 'View'} Architecture Diagram
        </button>
      </div>

      {/* Diagram panel */}
      {open && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
          <MermaidDiagram chart={project.diagram} dark={dark} />
        </div>
      )}
    </div>
  )
}
