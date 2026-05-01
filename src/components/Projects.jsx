import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ dark }) {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-blue-500 text-sm mb-3">03. Projects</p>
        <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-3">
          Things I've built
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl">
          Each project includes an architecture diagram — expand any card to explore the system design.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}
