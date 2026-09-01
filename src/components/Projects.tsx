import { Github, ExternalLink, Calendar, CheckCircle2, Zap, Trophy, Target, Smile, Gamepad2, TrendingUp } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const featureIcons: Record<number, typeof Zap> = {
  0: Target,
  1: CheckCircle2,
  2: Zap,
  3: TrendingUp,
  4: Smile,
  5: Gamepad2,
  6: Trophy,
  7: Calendar,
};

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              03 — Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
            <p className="text-slate-400 light:text-slate-500 mt-6 max-w-2xl mx-auto">
              Building real-world applications that solve problems and create meaningful experiences.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-3xl glass-card overflow-hidden hover:border-accent-500/30 transition-all duration-500"
              >
                {/* Decorative gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-accent-600 via-purple-600 to-accent-500" />

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Project info */}
                  <div className="p-8 sm:p-10 lg:p-12 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-500/10 text-accent-400 light:text-accent-600 border border-accent-500/20">
                        Featured Project
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-500 font-mono">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-accent-400 light:text-accent-600 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 light:text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-mono font-medium bg-gradient-to-br from-accent-500/15 to-purple-500/15 text-accent-300 light:text-accent-700 border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn px-5 py-2.5 rounded-xl glass-card flex items-center gap-2 font-medium text-slate-200 light:text-slate-700 hover:text-accent-400 light:hover:text-accent-600 hover:border-accent-500/40 hover:scale-105 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-accent-500/30 hover:scale-105 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Features */}
                  <div className="relative p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-white/[0.02] to-transparent light:from-black/[0.02] border-t lg:border-t-0 lg:border-l border-white/5 light:border-black/5">
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="relative">
                      <h4 className="text-sm font-mono text-slate-400 light:text-slate-500 tracking-widest uppercase mb-6">
                        Key Features
                      </h4>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => {
                          const FeatureIcon = featureIcons[index] || CheckCircle2;
                          return (
                            <div
                              key={index}
                              className="group/feature flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 light:hover:bg-black/5 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                                <FeatureIcon className="w-4 h-4 text-accent-400 light:text-accent-600" />
                              </div>
                              <span className="text-sm text-slate-300 light:text-slate-600 leading-snug pt-1">
                                {feature}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Pomodoro timer preview */}
                      <div className="mt-6 p-4 rounded-xl glass-card">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono text-slate-400">Pomodoro Timer</span>
                          <span className="text-xs text-accent-400 light:text-accent-600 font-mono">25:00</span>
                        </div>
                        <div className="flex gap-2">
                          {['Focus', 'Short Break', 'Long Break'].map((mode, i) => (
                            <span
                              key={mode}
                              className={`flex-1 text-center text-xs py-2 rounded-lg font-medium transition-all ${
                                i === 0
                                  ? 'bg-accent-500/20 text-accent-300 light:text-accent-700 border border-accent-500/30'
                                  : 'bg-white/5 light:bg-black/5 text-slate-400 light:text-slate-500'
                              }`}
                            >
                              {mode}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-lg font-bold gradient-text">Lvl 5</div>
                            <div className="text-[10px] text-slate-500">Level</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold gradient-text">1,250</div>
                            <div className="text-[10px] text-slate-500">XP</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold gradient-text">7</div>
                            <div className="text-[10px] text-slate-500">Day Streak</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
