import { useState, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, FolderGit2, FileText, UserPlus, User } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-600/20 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] animate-pulse-slow" />

      {/* Floating code symbols */}
      <div className="absolute top-20 left-10 text-accent-500/10 text-6xl font-mono animate-float-slow select-none">
        {'</>'}
      </div>
      <div className="absolute bottom-32 right-16 text-purple-500/10 text-5xl font-mono animate-float-slower select-none">
        {'{ }'}
      </div>
      <div className="absolute top-1/3 right-10 text-blue-500/10 text-4xl font-mono animate-float-slow select-none">
        {'[ ]'}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile picture circle */}
        <div className="flex justify-center mb-8 animate-fade-in-down">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent-500 via-purple-500 to-accent-400 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full glass-card flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
              aria-label="Upload profile picture"
            >
              {profileImage ? (
                <img src={profileImage} alt="Divyanshu Kumar" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-1 text-slate-400 light:text-slate-500">
                  <User className="w-10 h-10" />
                  <span className="text-xs font-medium flex items-center gap-1">
                    <UserPlus className="w-3 h-3" />
                    Add Photo
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {profileImage ? 'Change Photo' : 'Upload'}
                </span>
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-slate-300 light:text-slate-600">
            Available for internships & opportunities
          </span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up text-balance">
          Hi, I'm <span className="gradient-text text-shadow-glow">Divyanshu Kumar</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 light:text-slate-600 font-medium mb-6 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
          {personalInfo.tagline}
        </p>

        <p className="text-base sm:text-lg text-slate-400 light:text-slate-500 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          {personalInfo.intro}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={scrollToProjects}
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent-500/30 hover:scale-105 transition-all duration-300"
          >
            <FolderGit2 className="w-5 h-5" />
            View My Projects
          </button>
          <button
            onClick={scrollToContact}
            className="group px-8 py-3.5 rounded-xl glass-card text-slate-200 light:text-slate-700 font-semibold flex items-center gap-2 hover:scale-105 hover:border-accent-500/40 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: Github, href: personalInfo.github, label: 'GitHub' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 light:text-slate-600 hover:text-accent-400 light:hover:text-accent-600 hover:scale-110 hover:border-accent-500/40 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 light:text-slate-500 hover:text-accent-400 light:hover:text-accent-600 transition-colors animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
