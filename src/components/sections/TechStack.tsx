import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// All skills organized into rows for the marquee
const row1 = [
  { name: 'React.js', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Java', color: '#ed8b00' },
  { name: 'React Native', color: '#61dafb' },
  { name: 'HTML5', color: '#e34f26' },
  { name: 'CSS3', color: '#264de4' },
];

const row2 = [
  { name: 'Express.js', color: '#ffffff' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'REST APIs', color: '#a855f7' },
  { name: 'Redux Toolkit', color: '#764abc' },
  { name: 'Framer Motion', color: '#e542ff' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Mongoose', color: '#880000' },
  { name: 'Expo SDK', color: '#000020' },
];

const row3 = [
  { name: 'AWS Cloud', color: '#ff9900' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Git & GitHub', color: '#f05032' },
  { name: 'Postman', color: '#ff6c37' },
  { name: 'Figma', color: '#a259ff' },
  { name: 'VS Code', color: '#007acc' },
  { name: 'C / C++', color: '#00599c' },
  { name: 'Dart', color: '#0175c2' },
  { name: 'SQL', color: '#cc6600' },
  { name: 'Pandas', color: '#150458' },
];

const row4 = [
  { name: 'Machine Learning', color: '#22d3ee' },
  { name: 'Computer Vision', color: '#a78bfa' },
  { name: 'NLP', color: '#34d399' },
  { name: 'System Architecture', color: '#f472b6' },
  { name: 'NumPy', color: '#4dabcf' },
  { name: 'Data Structures', color: '#fbbf24' },
  { name: 'Algorithms', color: '#fb923c' },
  { name: 'Product Security', color: '#ef4444' },
  { name: 'Secure Coding', color: '#10b981' },
  { name: 'API Design', color: '#8b5cf6' },
];

const MarqueeRow = ({ items, direction, speed = 30 }: { items: typeof row1; direction: 'left' | 'right'; speed?: number }) => {
  // Double items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2.5 group/row">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none" />

      <div
        className="flex gap-4 w-max marquee-content group-hover/row:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-white/5 bg-[#0B1022]/40 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300 shrink-0 group cursor-default select-none hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          >
            {/* Color dot */}
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
              style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}50` }}
            />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Background ambient light */}
      <div className="absolute left-[15%] top-[10%] w-[380px] h-[380px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-[15%] bottom-[10%] w-[380px] h-[380px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />

      <div className="container-main relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">MY EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Skills That{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Build Solutions.
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            I combine modern technologies and best practices to build scalable, performant, and user-centric applications.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
          <MarqueeRow items={row3} direction="left" speed={32} />
          <MarqueeRow items={row4} direction="right" speed={38} />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '10+', label: 'Technologies Mastered', accent: 'text-purple-400 border-purple-500/20' },
            { value: 'Continuous', label: 'Learning Everyday', accent: 'text-cyan-400 border-cyan-500/20' },
            { value: 'Problem', label: 'Solver At Heart', accent: 'text-blue-400 border-blue-500/20' },
            { value: 'Performance', label: 'Driven Developer', accent: 'text-purple-400 border-purple-500/20' },
          ].map((stat, idx) => (
            <div key={idx} className={`border rounded-2xl p-4 bg-[#0B1022]/40 border-white/5 hover:bg-white/[0.02] transition-all hover:border-white/10 ${stat.accent}`}>
              <h4 className="text-lg font-bold text-white leading-tight">{stat.value}</h4>
              <p className="text-slate-400 text-[10px] font-bold mt-0.5 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee CSS animation keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
