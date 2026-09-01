import { Code2, BrainCircuit, Wrench, Database, Users } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  BrainCircuit,
  Wrench,
  Database,
  Users,
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              02 — Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
            <p className="text-slate-400 light:text-slate-500 mt-6 max-w-2xl mx-auto">
              A collection of technologies, tools, and skills I've been learning and working with throughout my journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <div
                  key={category.title}
                  className="group relative p-6 rounded-2xl glass-card hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-600/0 to-purple-600/0 group-hover:from-accent-600/5 group-hover:to-purple-600/5 transition-all duration-500" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent-400 light:text-accent-600" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-100 light:text-slate-800">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 light:bg-black/5 text-slate-300 light:text-slate-600 border border-white/5 light:border-black/5 hover:border-accent-500/40 hover:text-accent-400 light:hover:text-accent-600 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ transitionDelay: `${skillIndex * 30}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
