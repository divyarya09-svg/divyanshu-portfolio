import { useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useScrollProgress, useActiveSection } from '@/hooks/useScrollReveal';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Divyanshu<span className="gradient-text">.dev</span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent-400 light:text-accent-600'
                      : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-400" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:scale-110 transition-all duration-300 text-slate-300 light:text-slate-600 hover:text-accent-400 light:hover:text-accent-600"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-300 light:text-slate-600"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-500 via-purple-500 to-accent-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden glass border-t border-white/5 light:border-black/5">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-accent-500/10 text-accent-400 light:text-accent-600'
                      : 'text-slate-300 light:text-slate-600 hover:bg-white/5 light:hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
