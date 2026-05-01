import { useEffect, useRef, useState } from 'react'

let mermaidLoaded = false
let mermaidInstance = null

async function getMermaid() {
  if (mermaidInstance) return mermaidInstance
  const m = await import('mermaid')
  mermaidInstance = m.default
  return mermaidInstance
}

export default function MermaidDiagram({ chart, dark }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(false)
  const id = useRef(`mermaid-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const mermaid = await getMermaid()
        mermaid.initialize({
          startOnLoad: false,
          theme: dark ? 'dark' : 'neutral',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 13,
          flowchart: { curve: 'basis', htmlLabels: true },
          themeVariables: dark
            ? { primaryColor: '#1D4ED8', primaryTextColor: '#f4f4f5', lineColor: '#52525b', background: '#09090b' }
            : { primaryColor: '#3B82F6', primaryTextColor: '#18181b', lineColor: '#a1a1aa', background: '#fafafa' },
        })
        const { svg: rendered } = await mermaid.render(id.current, chart)
        if (!cancelled) setSvg(rendered)
      } catch (e) {
        if (!cancelled) setError(true)
        console.error('Mermaid render error:', e)
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart, dark])

  if (error) {
    return (
      <div className="text-xs text-zinc-400 font-mono p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        Diagram unavailable
      </div>
    )
  }

  if (!svg) {
    return (
      <div className="flex items-center justify-center h-32 text-zinc-400 text-sm">
        <div className="animate-pulse">Rendering diagram…</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="overflow-x-auto rounded-xl"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
