import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, School, BookOpen, Calendar, Award, Star, Book, CheckCircle2, Code2, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const CGPARing = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  // Target percent = (8.85 / 10) * 100 = 88.5%
  const targetPercent = (value / 10) * 100;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1.5; // seconds
    const steps = 60;
    const stepTime = (duration * 1000) / steps;
    const increment = targetPercent / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetPercent) {
        setProgress(targetPercent);
        clearInterval(timer);
      } else {
        setProgress(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetPercent]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center relative w-24 h-24 select-none shrink-0">
      <svg className="w-full h-full transform -rotate-95" viewBox="0 0 100 100">
        {/* Track circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-white/5"
          strokeWidth="6"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-cyan-450"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            stroke: '#06B6D4',
            filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.5))',
            transition: 'stroke-dashoffset 0.1s ease-out',
          }}
        />
      </svg>
      {/* Centered GPA text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-lg font-extrabold text-white">{value}</span>
        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">GPA</span>
      </div>
    </div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const glanceStats = [
    { value: '4+', label: 'Years Academic Journey', icon: Calendar },
    { value: '1+', label: 'Years to Graduate', icon: Star },
    { value: '100%', label: 'Learning Commitment', icon: Book },
  ];

  const highlights = [
    'Consistent academic performance with a strong CGPA.',
    'Active participant in technical events and hackathons.',
    'Passionate about research, innovation, and emerging technologies.',
    'Balancing academics with real-world project development.',
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Web Development',
    'Software Engineering',
    'Artificial Intelligence',
    'Bioinformatics',
    'Computer Networks',
  ];

  const timelineData = [
    {
      period: '2024 - Present',
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'SIMATS School of Engineering, Saveetha University',
      desc: 'Specializing in Artificial Intelligence and Full Stack Development.',
      gpa: 'CGPA: 8.85 / 10.0',
      icon: GraduationCap,
      color: 'border-purple-500/35 text-purple-300',
      gpaColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      instColor: 'text-purple-400',
      logo: (
        <div className="flex flex-col items-center justify-center text-center p-2 bg-[#050816] border border-white/5 rounded-2xl w-24 select-none shadow-inner">
          <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="3" />
          </svg>
          <span className="text-[8px] text-purple-350 font-extrabold uppercase mt-1 tracking-wider">SAVEETHA</span>
        </div>
      )
    },
    {
      period: '2022 - 2024',
      degree: 'Higher Secondary Education (HSE) - Computer Science',
      institution: 'Velammal Vidyalaya, Alapakkam',
      desc: 'Completed Higher Secondary Education with specialization in Computer Science stream.',
      gpa: 'Completed',
      icon: BookOpen,
      color: 'border-cyan-500/35 text-cyan-300',
      gpaColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      instColor: 'text-cyan-400',
      logo: (
        <div className="flex flex-col items-center justify-center text-center p-2 bg-[#050816] border border-white/5 rounded-2xl w-24 select-none shadow-inner">
          <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <span className="text-[8px] text-cyan-350 font-extrabold uppercase mt-1 tracking-wider">VELAMMAL</span>
        </div>
      )
    },
    {
      period: '2022',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Jawahar Vidyalaya Senior Secondary School',
      desc: 'Completed SSLC with distinction.',
      gpa: 'Completed',
      icon: School,
      color: 'border-cyan-500/35 text-cyan-300',
      gpaColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      instColor: 'text-cyan-400',
      logo: (
        <div className="flex flex-col items-center justify-center text-center p-2 bg-[#050816] border border-white/5 rounded-2xl w-24 select-none shadow-inner">
          <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <span className="text-[8px] text-cyan-350 font-extrabold uppercase mt-1 tracking-wider">JAWAHAR</span>
        </div>
      )
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Background ambient glows */}
      <div className="absolute left-[10%] top-[15%] w-[350px] h-[350px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-[10%] bottom-[15%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />

      <div className="container-main relative z-10" ref={ref}>

        {/* Section Header with Quote Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Header text */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">MY JOURNEY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Education That <br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                Builds Foundations.
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              A strong academic foundation that fuels my passion for technology and innovation.
            </p>
          </div>

          {/* Quote Card */}
          <div className="lg:col-span-5 w-full flex items-center gap-6 bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
            <div className="flex-1 text-left">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Quote</span>
              <p className="text-slate-300 text-xs italic leading-relaxed">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <span className="text-[10px] text-slate-500 font-bold block mt-2 uppercase tracking-wide">— Nelson Mandela</span>
            </div>
            {/* Book & cap vector */}
            <div className="shrink-0">
              <svg className="w-20 h-20 text-purple-400/80 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15L85 27L50 39L15 27L50 15Z" fill="rgba(168,85,247,0.08)" />
                <path d="M80 29.5v15c0 4-15 10-30 10s-30-6-30-10v-15" strokeDasharray="3 3" />
                <rect width="55" height="8" x="22.5" y="60" rx="1.5" fill="rgba(99,102,241,0.08)" stroke="#6366f1" strokeWidth="1.2" />
                <rect width="45" height="8" x="27.5" y="70" rx="1.5" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1.2" />
                <rect width="35" height="8" x="32.5" y="80" rx="1.5" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline vs Dashboard splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

          {/* LEFT COLUMN: Education Timeline */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">EDUCATION</span>
            </div>

            <div className="relative flex flex-col gap-8">
              {/* Glowing vertical connector line */}
              <div className="absolute left-[18px] top-[18px] bottom-[18px] w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-purple-500/10 pointer-events-none" />

              {timelineData.map((edu, idx) => {
                const EduIcon = edu.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-4 pl-12">
                    {/* Circle Node Icon */}
                    <div className={`absolute left-0 top-[4px] z-10 w-9 h-9 rounded-full bg-[#050816] border flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.15)] ${edu.color}`}>
                      <EduIcon className="w-4.5 h-4.5" />
                    </div>
                    {/* Content Card with Logo */}
                    <div className="bg-[#0B1022]/40 border border-white/5 rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-1 hover:border-purple-500/20 transition-all duration-300 group">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">{edu.period}</span>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${edu.gpaColor}`}>{edu.gpa}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors duration-300">{edu.degree}</h4>
                        <p className={`text-xs font-bold mb-2.5 ${edu.instColor}`}>{edu.institution}</p>
                        <p className="text-slate-400 text-xs leading-relaxed">{edu.desc}</p>
                      </div>

                      {/* Right-aligned logo mockup */}
                      <div className="shrink-0 self-center sm:self-auto group-hover:scale-105 transition-transform duration-300">
                        {edu.logo}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Circular GPA, Glance Stats, Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">

            {/* Block 1: Education at a glance with CGPA Ring */}
            <div className="bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-row items-center gap-6">
              
              <CGPARing value={8.85} />

              <div className="flex-1 flex flex-col gap-3">
                {glanceStats.map((item, idx) => {
                  const StatIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-purple-400 shadow-sm shrink-0">
                        <StatIcon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-none">{item.value}</span>
                        <span className="text-[9px] text-slate-500 font-bold mt-0.5 uppercase tracking-wider">{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Block 2: Academic Highlights */}
            <div className="bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">ACADEMIC HIGHLIGHTS</span>
              </div>

              <div className="space-y-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Beyond Classroom */}
            <div className="bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">BEYOND CLASSROOM</span>
              </div>

              <div className="flex items-center gap-4 flex-wrap justify-around">
                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-300">
                    <Code2 className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Hackathons</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Tech Events</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300">
                    <Cpu className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Research</span>
                </div>

                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-pink-400 group-hover:border-pink-500/30 transition-all duration-300">
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Open Source</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Coursework and Learner Highlight banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-12 bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
          {/* Relevant coursework tags */}
          <div className="lg:col-span-8 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">RELEVANT COURSEWORK</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  key={course}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 text-xs font-semibold hover:border-purple-500/20 hover:text-purple-300 transition-colors duration-300 cursor-default uppercase tracking-wider"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Continuous learner details */}
          <div className="lg:col-span-4 flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6 text-left relative overflow-hidden group">
            <div className="flex-1 z-10">
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-1">CONTINUOUS LEARNER</span>
              <p className="text-slate-450 text-xs leading-relaxed mb-4 max-w-xs">
                I believe learning never stops. I'm always exploring new technologies, tools, and domains to stay ahead and build impactful solutions.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
              >
                Explore My Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Peak Climbing vector */}
            <div className="shrink-0 select-none pointer-events-none opacity-20 group-hover:opacity-45 transition-opacity duration-300 absolute right-0 bottom-0 lg:relative">
              <svg className="w-20 h-20 text-purple-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M10 90h80M20 90l30-40 20 20 20-50" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="90" cy="20" r="3" fill="currentColor" />
                <path d="M90 20v15M90 20l-10 3 10 3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
