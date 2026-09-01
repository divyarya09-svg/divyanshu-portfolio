import { useState, useRef } from 'react';
import { Code2, Lightbulb, Rocket, Heart, UserPlus, User, Camera } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building practical applications with clean, maintainable code and modern technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Strong foundation in data structures and algorithms to tackle complex challenges.',
  },
  {
    icon: Rocket,
    title: 'Building Products',
    description: 'Turning ideas into user-focused applications that solve real-world problems.',
  },
  {
    icon: Heart,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, tools, and frameworks to expand my skill set.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [aboutImage, setAboutImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAboutImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'active' : ''}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-accent-400 light:text-accent-600 tracking-widest uppercase">
              01 — About
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl glass-card flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  {aboutImage ? (
                    <>
                      <img src={aboutImage} alt="Divyanshu Kumar" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-sm text-slate-100 font-medium text-center">
                          Computer Science & Engineering
                        </p>
                        <p className="text-xs text-slate-300 text-center mt-1">
                          Lovely Professional University
                        </p>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="relative flex flex-col items-center gap-3 text-slate-400 light:text-slate-500 hover:text-accent-400 light:hover:text-accent-600 transition-colors duration-300"
                      aria-label="Upload photo"
                    >
                      <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="w-10 h-10" />
                      </div>
                      <span className="text-sm font-medium flex items-center gap-1.5">
                        <UserPlus className="w-4 h-4" />
                        Upload Photo
                      </span>
                      <span className="text-xs text-slate-500 light:text-slate-400">
                        Click to add your picture
                      </span>
                    </button>
                  )}
                  {aboutImage && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-200 hover:text-accent-400 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Change photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-slate-300 light:text-slate-600 leading-relaxed">
                I'm a <span className="text-accent-400 light:text-accent-600 font-semibold">Computer Science & Engineering</span> student
                passionate about software development, problem solving, and building practical technology solutions.
              </p>
              <p className="text-base text-slate-400 light:text-slate-500 leading-relaxed">
                My journey in computer science is driven by curiosity — I enjoy exploring how things work under the hood
                and turning ideas into useful, user-focused applications. From writing my first lines of code to building
                full web applications, I've developed a strong interest in creating technology that makes a difference.
              </p>
              <p className="text-base text-slate-400 light:text-slate-500 leading-relaxed">
                I'm currently focused on strengthening my fundamentals in data structures and algorithms, exploring modern
                development tools, and building projects that solve real problems for real users.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="group p-5 rounded-xl glass-card hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-accent-400 light:text-accent-600" />
                    </div>
                    <h3 className="font-semibold text-slate-100 light:text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 light:text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
