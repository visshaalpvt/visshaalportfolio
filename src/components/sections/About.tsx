import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { User, Calendar, MapPin, GraduationCap, Rocket, Terminal, Rocket as RocketIcon, Users, Star, Github, ArrowUpRight } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 1.5 }: { value: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

<<<<<<< HEAD
  useEffect(() => {
    if (!isInView) return;
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) return;
=======
  const stats = [
    { value: '9', label: 'Hackathon Wins', icon: Trophy },
    { value: '10+', label: 'Projects Built', icon: Briefcase },
    { value: '1', label: 'Active Startup', icon: Rocket },
  ];
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64

    let start = 0;
    const end = parsed;
    const range = end - start;
    let current = start;
    const stepTime = Math.abs(Math.floor((duration * 1000) / range));

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 15));

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="font-extrabold text-2xl md:text-3xl text-white">
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -10,
      y: (x / (rect.width / 2)) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const stats = [
    { value: '2+', label: 'Years of Experience', icon: Terminal, borderGlow: 'hover:border-purple-500/30' },
    { value: '15+', label: 'Projects Completed', icon: Rocket, borderGlow: 'hover:border-cyan-500/30' },
  ];

  const technologies = [
    {
      name: 'React',
      icon: (
        <svg className="w-6 h-6 text-[#61dafb]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Next.js',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="47" fill="black" stroke="#222" strokeWidth="6" />
          <path d="M40 70V35H46L68 66V35H73V70H67L45 39V70H40Z" fill="white" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg className="w-6 h-6 text-[#3178c6] rounded" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="12" fill="#3178c6" />
          <path d="M43.5 68.2h-7.6V42h-8.2v-5.8h24.1v5.8h-8.3v26.2zm14.1-1.6c1.6 1.4 3.7 2.1 6.3 2.1 2.2 0 3.9-.5 5-1.5 1.1-1 1.7-2.3 1.7-3.9 0-1.4-.4-2.5-1.3-3.3-1-.8-2.6-1.5-4.8-2.1-3.6-1-6.1-2-7.5-3.1-1.4-1.1-2.1-2.9-2.1-5.3 0-2.9 1.1-5.2 3.2-6.9 2.1-1.7 5.1-2.5 8.9-2.5 3.3 0 6.1.7 8.3 2.2l-3 4.8c-1.7-1.1-3.7-1.6-5.8-1.6-2 0-3.5.4-4.5 1.2-1 .8-1.5 1.8-1.5 3.1 0 1.2.4 2.1 1.3 2.8.9.7 2.4 1.3 4.6 1.9 3.8 1 6.5 2.1 8 3.3 1.5 1.2 2.3 3.1 2.3 5.7 0 3.2-1.2 5.8-3.5 7.6-2.3 1.8-5.7 2.7-10 2.7-4 0-7.5-.9-10.4-2.8l3.1-5.1z" fill="white" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" fill="#339933" />
          <path d="M12 5.5v13m-3.5-9.5c0 0 1.5-1 3.5 0v3c-2 1-3.5 0-3.5 0m7 1.5c0 0-1.5 1-3.5 0v-3c2-1 3.5 0 3.5 0" stroke="black" strokeWidth="1" />
        </svg>
      )
    },
    {
      name: 'Express.js',
      icon: <div className="text-xs font-extrabold text-white tracking-tighter uppercase">ex</div>
    },
    {
      name: 'MongoDB',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c0 0-8 6.5-8 12.5C4 18 7.5 21 12 21s8-3 8-6.5C20 8.5 12 2 12 2z" fill="#00ED64" />
          <path d="M12 2v19M12 7c-2 3-3.5 5.5-3.5 7.5 0 2 .5 3.5 1.5 4.5M12 7c2 3 3.5 5.5 3.5 7.5 0 2-.5 3.5-1.5 4.5" stroke="#001E2B" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.018C15.897 6.018 19 8.28 19 11.085c0 1.83-1.34 3.42-3.375 4.37-.507.237-.768.805-.59 1.343.177.538.723.864 1.272.748C19.78 16.828 22 14.256 22 11.085c0-4.004-4.477-7.247-10-7.247-5.523 0-10 3.243-10 7.247 0 2.228 1.39 4.237 3.568 5.48.513.292 1.155.105 1.44-.418.284-.523.097-1.18-.415-1.472C4.945 13.722 4 12.477 4 11.085c0-2.805 3.103-5.067 7-5.067z" />
          <path d="M12 17.982c-3.897 0-7-2.262-7-5.067 0-1.83 1.34-3.42 3.375-4.37.507-.237.768-.805.59-1.343-.177-.538-.723-.864-1.272-.748C4.22 7.172 2 9.744 2 12.915c0 4.004 4.477 7.247 10 7.247 5.523 0 10-3.243 10-7.247 0-2.228-1.39-4.237-3.568-5.48-.513-.292-1.155-.105-1.44.418-.284.523-.097-1.18-.415-1.472 1.648.946 2.593 2.19 2.593 3.582 0 2.805-3.103 5.067-7 5.067z" />
        </svg>
      )
    },
    {
      name: 'React Native',
      icon: (
        <svg className="w-6 h-6 text-[#61dafb] animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Firebase',
      icon: (
        <svg className="w-6 h-6 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.89 19.5L12 2L13.1 3.5L3.89 19.5Z" fill="#FFA000" />
          <path d="M20.11 19.5L12 2L10.9 3.5L20.11 19.5Z" fill="#F57C00" />
          <path d="M3.89 19.5L12 22L20.11 19.5L12 8.7L3.89 19.5Z" fill="#FFCA28" />
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.93 2c-2.73 0-2.54 1.18-2.54 1.18v1.64h2.58v.37H8.38S7 5.09 7 7.84c0 2.76 1.18 2.65 1.18 2.65h1.05v-1.5s0-1.78 1.78-1.78h3.5s1.78 0 1.78-1.78V3.53s-.08-1.53-4.36-1.53z" fill="#3776AB" />
          <path d="M12.07 22c2.73 0 2.54-1.18 2.54-1.18v-1.64h-2.58v-.37h3.58S17 18.91 17 16.16c0-2.76-1.18-2.65-1.18-2.65h-1.05v1.5s0 1.78-1.78 1.78h-3.5s-1.78 0-1.78 1.78v2.09s.08 1.53 4.36 1.53z" fill="#FFE873" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      icon: (
        <svg className="w-6 h-6 text-[#00758f]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3S4 4.34 4 6zm16 10c0 1.66-3.58 3-8 3s-8-1.34-8-3v-3c1.5 1.5 4.5 2 8 2s6.5-.5 8-2v3zm0 4c0 1.66-3.58 3-8 3s-8-1.34-8-3v-3c1.5 1.5 4.5 2 8 2s6.5-.5 8-2v3z" />
        </svg>
      )
    },
    {
      name: 'Git & GitHub',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    {
      name: 'Figma',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18C4.65685 18 6 16.6569 6 15V12H3C1.34315 12 0 13.3431 0 15C0 16.6569 1.34315 18 3 18Z" fill="#0ACF83" />
          <path d="M3 12C4.65685 12 6 10.6569 6 9V6H3C1.34315 6 0 7.34315 0 9C0 10.6569 1.34315 12 3 12Z" fill="#A259FF" />
          <path d="M3 6C4.65685 6 6 4.65685 6 3V0H3C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" fill="#F24E1E" />
          <path d="M9 6C10.6569 6 12 4.65685 12 3C12 1.34315 10.6569 0 9 0H6V6H9Z" fill="#FF7262" />
          <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6H6V12H9Z" fill="#1ABCFE" />
        </svg>
      )
    },
    {
      name: 'Docker',
      icon: (
        <svg className="w-6 h-6 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.77c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.122c0 .101.084.186.186.186m-2.95 0h2.118c.102 0 .187-.084.187-.186V8.77c0-.102-.085-.186-.187-.186h-2.118c-.102 0-.186.084-.186.186v2.122c0 .101.084.186.186.186m-2.95 0h2.12c.102 0 .186-.084.186-.186V8.77c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.122c0 .101.084.186.186.186m-2.952 0h2.119c.102 0 .185-.084.185-.186V8.77c0-.102-.083-.186-.185-.186H5.13c-.102 0-.185.084-.185.186v2.122c0 .101.083.186.185.186m-2.95 0h2.119c.102 0 .185-.084.185-.186V8.77c0-.102-.083-.186-.185-.186H2.18c-.102 0-.185.084-.185.186v2.122c0 .101.083.186.185.186m2.95-2.949h2.119c.102 0 .185-.084.185-.187V5.82c0-.102-.083-.186-.185-.186H5.13c-.102 0-.185.084-.185.186v2.122c0 .103.083.187.185.187m2.95 0h2.12c.102 0 .186-.084.186-.187V5.82c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.122c0 .103.084.187.186.187m2.95 0h2.118c.102 0 .187-.084.187-.187V5.82c0-.102-.085-.186-.187-.186h-2.118c-.102 0-.186.084-.186.186v2.122c0 .103.084.187.186.187m-2.95-2.95h2.12c.102 0 .186-.084.186-.186V2.87c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.12c0 .103.084.186.186.186M23.99 11.93c-.096-.425-.568-.73-1.077-.73-.574 0-1.222.123-1.748.374-.186.089-.326.246-.39.444-.737 2.253-2.193 3.473-4.14 3.473H1.947c-.777 0-1.408.63-1.408 1.41v1.657c0 .548.27 1.06.724 1.35 1.157.74 3.684 2.1 7.748 2.1 7.768 0 11.756-4.04 12.39-7.854.124-.74.624-1.393 1.32-1.62 1.018-.334 1.503-.925 1.27-1.407" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 21h20L12 2z" />
        </svg>
      )
    },
    {
      name: 'and more...',
      icon: (
        <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Subtle Background Glow behind the card */}
      <div className="absolute left-[5%] top-[20%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-[5%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: Personal Info Card */}
          <div 
            ref={cardRef}
            className="lg:col-span-4 w-full max-w-[380px] mx-auto bg-[#0B1022]/45 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 relative"
            style={{
              perspective: 1000,
              transformStyle: 'preserve-3d',
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Spot light overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-3xl pointer-events-none blur-lg" />

            {/* Portrait Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-[#050816] border border-white/5 shadow-inner">

              {/* Concentric rotating design behind photo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.div
                  className="absolute w-[92%] h-[92%] rounded-full border border-purple-500/10 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute w-[80%] h-[80%] rounded-full border border-indigo-500/15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Profile image */}
              <img
                src="/profile-photo.jpg"
                alt="Visshaal"
                className="w-full h-full object-cover rounded-2xl relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500 select-none pointer-events-none"
              />
            </div>

            {/* Signature divider badge */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center justify-between mb-6 shadow-inner relative z-10">
              <div>
                <h4
                  className="text-purple-300 text-2xl drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                  style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontWeight: 500 }}
                >
                  Visshaal
                </h4>
                <p className="text-slate-400 text-xs mt-1.5 font-bold uppercase tracking-wider">
                  Full Stack & AI Engineer
                </p>
              </div>
              <RocketIcon className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>

            {/* Timeline info checklist */}
            <div className="relative flex flex-col gap-6 relative z-10">
              {/* Vertical timeline connector track with animated height */}
              <div className="absolute left-[18px] top-[18px] bottom-[18px] w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-purple-500/10 pointer-events-none" />

              {/* Item 1: Name */}
              <div className="relative flex items-start gap-4 pl-12">
                <div className="absolute left-0 top-[2px] z-10 w-9 h-9 rounded-full bg-[#050816] border border-white/5 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block leading-none mb-1">Name</span>
                  <span className="text-sm font-semibold text-slate-200">Visshaal Ramachandran</span>
                </div>
              </div>

              {/* Item 2: Location */}
              <div className="relative flex items-start gap-4 pl-12">
                <div className="absolute left-0 top-[2px] z-10 w-9 h-9 rounded-full bg-[#050816] border border-white/5 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block leading-none mb-1">Location</span>
                  <span className="text-sm font-semibold text-slate-200">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Item 3: Education */}
              <div className="relative flex items-start gap-4 pl-12">
                <div className="absolute left-0 top-[2px] z-10 w-9 h-9 rounded-full bg-[#050816] border border-white/5 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block leading-none mb-1">Education</span>
                  <span className="text-sm font-bold text-purple-300">B.Tech CSE (AI & ML)</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Saveetha School of Engineering</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">2023 - 2027</span>
                </div>
              </div>

              {/* Item 4: Internship */}
              <div id="experience" className="relative flex items-start gap-4 pl-12">
                <div className="absolute left-0 top-[2px] z-10 w-9 h-9 rounded-full overflow-hidden border border-white/5 flex items-center justify-center bg-white shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                  <img src="/temenos.jpeg" alt="Temenos" className="w-full h-full object-contain p-1 select-none pointer-events-none" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block leading-none mb-1">Current Role</span>
                  <span className="text-sm font-bold text-cyan-400">Product Security Intern</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Temenos</span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">July 2026 - Current</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Bio content, floating code card, stats, tech grid, and bottom CTA */}
          <div className="lg:col-span-8 flex flex-col justify-center">

            {/* Top row: Bio text + floating illustration */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              <div className="md:col-span-8 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">ABOUT ME</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                  Building Digital Products <br />
                  That <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">Make an Impact.</span>
                </h3>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  I'm a Full Stack Developer and React Native Expert who loves turning ideas into scalable, real-world solutions. I specialize in building high-performance applications and integrating artificial intelligence to solve complex problems.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I enjoy building modern web and mobile applications with clean code, smooth animations, and exceptional user experiences.
                </p>
              </div>

              {/* Floating code window box */}
              <div className="md:col-span-4 flex justify-center">
                <motion.div
                  className="relative w-full max-w-[220px] aspect-[4/3] bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:border-purple-500/30 hover:bg-white/[0.03] transition-all group cursor-pointer"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.div
                      className="absolute w-[110%] h-[110%] rounded-2xl border border-dashed border-purple-500/10 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  <div className="flex items-center gap-1.5 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/75" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/75" />
                    <div className="w-2 h-2 rounded-full bg-green-500/75" />
                  </div>

                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <Terminal className="w-12 h-12 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="h-1.5 w-1/3 bg-purple-500/35 rounded-full relative z-10 self-center" />
                </motion.div>
              </div>
            </div>

            {/* Stats Cards with Animated Counters */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-1.5">
                        <AnimatedCounter value={stat.value} />
                      </h3>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Technologies Grid */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">TECHNOLOGIES I WORK WITH</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                {technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2, rotate: 2 }}
                    className="bg-[#0B1022]/45 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-purple-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold text-center select-none leading-tight uppercase tracking-wider">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom contact CTA Banner */}
            <div className="p-5 rounded-2xl bg-[#0B1022]/60 backdrop-blur-md border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 shadow-sm shrink-0">
                  <Github className="w-5 h-5 text-slate-300" />
                </div>
                <p className="text-slate-300 text-xs md:text-sm font-semibold max-w-md">
                  Let's build something amazing together! <br className="hidden md:inline" />
                  <span className="text-slate-400 text-xs font-normal">I'm always open to discussing new opportunities and exciting projects.</span>
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:scale-105"
              >
                Get In Touch <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
