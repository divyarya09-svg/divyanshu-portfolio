import { Award, ExternalLink, Cloud, Code, Trophy } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const certIcons = [Cloud, Code, Trophy];

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              04 — Certifications
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-purple-500/50 to-transparent sm:-translate-x-1/2" />

            <div className="space-y-8">
              {certifications.map((cert, index) => {
                const Icon = certIcons[index] || Award;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={cert.title}
                    className={`relative flex items-center gap-6 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-accent-400 light:text-accent-600" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 ml-20 sm:ml-0 ${isLeft ? 'sm:pr-16' : 'sm:pl-16'}`}>
                      <div className="group p-6 rounded-2xl glass-card hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-lg text-slate-100 light:text-slate-800 mb-1">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-accent-400 light:text-accent-600 font-medium">
                              {cert.issuer}
                            </p>
                          </div>
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-5 h-5 text-accent-400 light:text-accent-600" />
                          </div>
                        </div>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-4 text-sm text-slate-400 light:text-slate-500 hover:text-accent-400 light:hover:text-accent-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Verify Certificate
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
