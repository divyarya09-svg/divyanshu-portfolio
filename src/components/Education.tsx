import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              05 — Education
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Education <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-purple-500/50 to-transparent" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className="relative flex gap-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-5 h-5 text-accent-400 light:text-accent-600" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-4">
                    <div className="p-6 rounded-2xl glass-card hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 group-hover:glow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 light:text-slate-800 mb-1">
                            {edu.institution}
                          </h3>
                          <p className="text-accent-400 light:text-accent-600 font-medium">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-500 font-mono flex-shrink-0">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-br from-accent-500/15 to-purple-500/15 text-accent-300 light:text-accent-700 border border-accent-500/20">
                          {edu.detail}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-500">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
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
  );
}
