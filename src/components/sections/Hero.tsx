import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Download, Terminal, Rocket, Linkedin, Github, Mail } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'Founder',
    'Full Stack Developer',
    'AI Engineer',
    'React Native Developer',
    'Open Source Contributor',
    'Problem Solver',
  ];

  // Cycling roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tilt effect for profile image card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to max 15 degree tilt
    setTilt({
      x: (y / (rect.height / 2)) * -12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Splitting Visshaal Ramachandran into characters for entrance animation
  const firstName = "Visshaal".split("");
  const lastName = "Ramachandran".split("");

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16">
      
      {/* Hero Content grid */}
      <div className="container-main flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Redesigned Hero details) */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center order-2 lg:order-1">
            
            {/* Animated Badge Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/20 bg-[#0B1022]/60 backdrop-blur-md text-xs font-bold text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.15)] w-fit mb-6"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-ping absolute" />
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 relative" />
              🛡️ Product Security Intern @ Temenos
            </motion.div>

            {/* Split Text Heading Animation */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-none">
              <span className="inline-block overflow-hidden pb-1">
                {firstName.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 80, opacity: 0, rotate: 10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block origin-bottom-left"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.35)] inline-block py-1">
                {lastName.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 80, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.04,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block origin-bottom-right"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Typing text animation container */}
            <div className="h-8 md:h-10 overflow-hidden flex items-center mb-6">
              <span className="text-lg md:text-xl font-medium text-slate-300 mr-2">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-400 max-w-xl text-sm md:text-base leading-relaxed mb-8"
            >
              I am a Product Security Intern at Temenos and a Full Stack Developer. I build secure, scalable web & mobile applications with modern technologies and robust security practices.
            </motion.p>

            {/* Redesigned CTA Action Buttons with 50% corners (oval) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-row items-center gap-4 flex-wrap"
            >
              <MagneticButton variant="hero" size="lg" asChild>
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_25px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_35px_rgba(168,85,247,0.5)] border border-purple-400/20"
                >
                  View My Work <ArrowUpRight className="w-4.5 h-4.5" />
                </a>
              </MagneticButton>

              <MagneticButton variant="heroOutline" size="lg" asChild>
                <a
                  href="/assets/R_Visshaal_Resume.pdf"
                  download
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all text-slate-200 font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-inner"
                >
                  Download Resume <Download className="w-4.5 h-4.5" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Grid of Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-12 w-full max-w-md"
            >
              {/* Stat 1 */}
              <div className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none mb-1">2+</h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Years Experience</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none mb-1">15+</h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Rotating avatar rings + 3D Tilt + Orbiting icons) */}
          <div className="lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2 py-4 lg:py-8 min-h-[360px] lg:min-h-[500px]">

            {/* Rotating platforms behind avatar */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full border border-purple-500/10"
                style={{ rotateX: 65 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[240px] h-[240px] rounded-full border border-cyan-500/10"
                style={{ rotateX: 65 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Avatar 3D Card with mouse hover tilt */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-3xl p-2 bg-white/[0.01] border border-white/5 backdrop-blur-sm cursor-grab active:cursor-grabbing"
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 to-cyan-500/15 rounded-3xl blur-xl" />
              
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative">
                <img
                  src="/profile-photo.jpg"
                  alt="Visshaal"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                
                {/* Rotating glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Orbiting Tech Icons */}
              {/* React */}
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-[#61dafb] animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </motion.div>

              {/* TypeScript */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-[#3178c6] rounded" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="12" fill="#3178c6" />
                  <path d="M43.5 68.2h-7.6V42h-8.2v-5.8h24.1v5.8h-8.3v26.2zm14.1-1.6c1.6 1.4 3.7 2.1 6.3 2.1 2.2 0 3.9-.5 5-1.5 1.1-1 1.7-2.3 1.7-3.9 0-1.4-.4-2.5-1.3-3.3-1-.8-2.6-1.5-4.8-2.1-3.6-1-6.1-2-7.5-3.1-1.4-1.1-2.1-2.9-2.1-5.3 0-2.9 1.1-5.2 3.2-6.9 2.1-1.7 5.1-2.5 8.9-2.5 3.3 0 6.1.7 8.3 2.2l-3 4.8c-1.7-1.1-3.7-1.6-5.8-1.6-2 0-3.5.4-4.5 1.2-1 .8-1.5 1.8-1.5 3.1 0 1.2.4 2.1 1.3 2.8.9.7 2.4 1.3 4.6 1.9 3.8 1 6.5 2.1 8 3.3 1.5 1.2 2.3 3.1 2.3 5.7 0 3.2-1.2 5.8-3.5 7.6-2.3 1.8-5.7 2.7-10 2.7-4 0-7.5-.9-10.4-2.8l3.1-5.1z" fill="white" />
                </svg>
              </motion.div>

              {/* Node */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7.7v11L12 22l10-5.7v-11L12 2zM4 9.2l6.8-3.9v7.8L4 17V9.2zm13.2 7.8l-6.8 3.9v-7.8l6.8-3.9v7.8z"/>
                </svg>
              </motion.div>

              {/* Python */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.93 2c-2.73 0-2.54 1.18-2.54 1.18v1.64h2.58v.37H8.38S7 5.09 7 7.84c0 2.76 1.18 2.65 1.18 2.65h1.05v-1.5s0-1.78 1.78-1.78h3.5s1.78 0 1.78-1.78V3.53s-.08-1.53-4.36-1.53z" fill="#3776AB" />
                  <path d="M12.07 22c2.73 0 2.54-1.18 2.54-1.18v-1.64h-2.58v-.37h3.58S17 18.91 17 16.16c0-2.76-1.18-2.65-1.18-2.65h-1.05v1.5s0 1.78-1.78 1.78h-3.5s-1.78 0-1.78 1.78v2.09s.08 1.53 4.36 1.53z" fill="#FFE873" />
                </svg>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* BOTTOM TECH & SOCIAL BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto mt-16 md:mt-24 p-4 md:py-3.5 md:px-6 rounded-2xl bg-[#0B1022]/60 backdrop-blur-md border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative z-20"
        >
          {/* Tech stack logos */}
          <div className="flex flex-row items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase mr-2 select-none">
              Tech I Work With
            </span>
            <div className="flex flex-row items-center gap-3 flex-wrap justify-center">
              {/* React */}
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#61dafb]/35 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(97,218,251,0.25)] transition-all cursor-pointer group" title="React">
                <svg className="w-5 h-5 text-[#61dafb] group-hover:rotate-45 transition-transform duration-500" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>

              {/* Next.js */}
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/35 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all cursor-pointer" title="Next.js">
                <svg className="w-5 h-5 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="47" fill="black" stroke="#222" strokeWidth="6" />
                  <path d="M40 70V35H46L68 66V35H73V70H67L45 39V70H40Z" fill="white" />
                </svg>
              </div>

              {/* TypeScript */}
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#3178c6]/35 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(49,120,198,0.25)] transition-all cursor-pointer" title="TypeScript">
                <svg className="w-5 h-5 text-[#3178c6] rounded-sm" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="12" fill="#3178c6" />
                  <path d="M43.5 68.2h-7.6V42h-8.2v-5.8h24.1v5.8h-8.3v26.2zm14.1-1.6c1.6 1.4 3.7 2.1 6.3 2.1 2.2 0 3.9-.5 5-1.5 1.1-1 1.7-2.3 1.7-3.9 0-1.4-.4-2.5-1.3-3.3-1-.8-2.6-1.5-4.8-2.1-3.6-1-6.1-2-7.5-3.1-1.4-1.1-2.1-2.9-2.1-5.3 0-2.9 1.1-5.2 3.2-6.9 2.1-1.7 5.1-2.5 8.9-2.5 3.3 0 6.1.7 8.3 2.2l-3 4.8c-1.7-1.1-3.7-1.6-5.8-1.6-2 0-3.5.4-4.5 1.2-1 .8-1.5 1.8-1.5 3.1 0 1.2.4 2.1 1.3 2.8.9.7 2.4 1.3 4.6 1.9 3.8 1 6.5 2.1 8 3.3 1.5 1.2 2.3 3.1 2.3 5.7 0 3.2-1.2 5.8-3.5 7.6-2.3 1.8-5.7 2.7-10 2.7-4 0-7.5-.9-10.4-2.8l3.1-5.1z" fill="white" />
                </svg>
              </div>

              {/* Tailwind CSS */}
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#38bdf8]/35 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all cursor-pointer" title="Tailwind CSS">
                <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.018C15.897 6.018 19 8.28 19 11.085c0 1.83-1.34 3.42-3.375 4.37-.507.237-.768.805-.59 1.343.177.538.723.864 1.272.748C19.78 16.828 22 14.256 22 11.085c0-4.004-4.477-7.247-10-7.247-5.523 0-10 3.243-10 7.247 0 2.228 1.39 4.237 3.568 5.48.513.292 1.155.105 1.44-.418.284-.523.097-1.18-.415-1.472C4.945 13.722 4 12.477 4 11.085c0-2.805 3.103-5.067 7-5.067z" />
                  <path d="M12 17.982c-3.897 0-7-2.262-7-5.067 0-1.83 1.34-3.42 3.375-4.37.507-.237.768-.805.59-1.343-.177-.538-.723-.864-1.272-.748C4.22 7.172 2 9.744 2 12.915c0 4.004 4.477 7.247 10 7.247 5.523 0 10-3.243 10-7.247 0-2.228-1.39-4.237-3.568-5.48-.513-.292-1.155-.105-1.44.418-.284.523-.097 1.18.415 1.472 1.648.946 2.593 2.19 2.593 3.582 0 2.805-3.103 5.067-7 5.067z" />
                </svg>
              </div>

              {/* GitHub */}
              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-slate-400 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all cursor-pointer" title="GitHub">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-row items-center gap-4 justify-center">
            <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase select-none">
              Follow Me
            </span>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/visshaal-ramachandran"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:shadow-[0_0_15px_rgba(0,119,181,0.25)] transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/visshaalpvt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>

              {/* Email */}
              <a
                href="mailto:contact@provueloce.com"
                className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all cursor-pointer"
                title="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10 select-none">
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

<<<<<<< HEAD
=======
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-main section-padding text-center relative z-10"
      >
        {/* Animated Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Visshaal Ramachandran
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            <span className="text-white font-semibold">Full Stack Developer</span>
            <span className="mx-3 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">&</span>
            <span className="text-white font-semibold">AI Engineer</span>
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-3">
            Co-Founder & Chief Operating Officer at{' '}
            <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">ProVeloce</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Building scalable web, mobile, and AI-driven systems — from idea to production.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton variant="hero" size="lg" asChild>
            <a href="#projects">View My Work</a>
          </MagneticButton>
          <MagneticButton variant="heroOutline" size="lg" asChild>
            <a href="/resume/140426-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </MagneticButton>
          <MagneticButton variant="heroOutline" size="lg" asChild>
            <a href="/resume/140426-resume.pdf" download="Visshaal_Resume.pdf">Download Resume</a>
          </MagneticButton>
          <MagneticButton variant="hero" size="lg" asChild>
            <a href="#contact">Let's Build Together</a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64
    </section>
  );
};

export default Hero;
