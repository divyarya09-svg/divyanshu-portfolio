import { Linkedin, Github, Mail, Code2, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/5 light:border-black/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent-600/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowUp className="w-5 h-5 text-accent-400 light:text-accent-600" />
            </div>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Divyanshu<span className="gradient-text">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-300 light:text-slate-600 hover:text-accent-400 light:hover:text-accent-600 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-400 light:text-slate-500 text-center">
            © 2026 Divyanshu Kumar. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
