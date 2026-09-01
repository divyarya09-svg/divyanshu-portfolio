import { useState, type FormEvent } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Mobile', value: personalInfo.mobile, href: `tel:${personalInfo.mobile}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my repositories', href: personalInfo.github },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-600/10 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              06 — Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
            <p className="text-slate-400 light:text-slate-500 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just a friendly tech chat.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-accent-400 light:text-accent-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 light:text-slate-500 uppercase tracking-wider font-mono">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-200 light:text-slate-700 truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-3 p-5 rounded-2xl glass-card">
                <MapPin className="w-5 h-5 text-accent-400 light:text-accent-600 flex-shrink-0" />
                <p className="text-sm text-slate-300 light:text-slate-600">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-card space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 light:text-slate-600 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 text-slate-100 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 light:text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 text-slate-100 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 light:text-slate-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 text-slate-100 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all resize-none"
                    placeholder="Tell me about your opportunity or just say hi!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Ready!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
