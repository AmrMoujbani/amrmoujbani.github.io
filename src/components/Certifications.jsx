import { certifications, education } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-amber-500 dark:text-amber-400 text-sm mb-3">04. Certifications & Education</p>
        <h2 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-12">Credentials</h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Certifications */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map(cert => (
                <div key={cert.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-colors group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shrink-0 shadow-md`}>
                    {cert.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                    <p className="text-xs font-mono text-amber-500 dark:text-amber-400 mt-0.5">{cert.year}</p>
                  </div>
                </div>
              ))}
              {/* More certs will appear here automatically as you add them to data/certifications.js */}
              <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono px-1">
                + More certifications coming soon
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-colors group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{edu.icon}</span>
                    <div>
                      <p className="font-display font-semibold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        {edu.degree}
                      </p>
                      <p className="text-sm font-medium text-amber-500 dark:text-amber-400">{edu.field}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{edu.school}</p>
                      <div className="flex gap-3 mt-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        <span>{edu.period}</span>
                        <span>·</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
