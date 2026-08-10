import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Rocket, TrendingUp, Folder, LayoutGrid, List, ChevronDown, Cpu, FileText, Eye, ShieldAlert } from 'lucide-react';

const ProjectCard = ({ project, viewMode }: { project: any; viewMode: 'grid' | 'list' }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (viewMode === 'list') return; // Disable tilt in list view
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -6,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const Icon = project.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`bg-[#0B1022]/40 border border-white/5 rounded-[28px] p-6 flex flex-col justify-between hover:border-purple-500/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group relative overflow-hidden ${
        viewMode === 'list' ? 'flex-row gap-8 items-center' : ''
      }`}
    >
      {/* Glowing card outline cover on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm pointer-events-none" />

      <div className={`relative z-10 flex flex-col h-full w-full ${viewMode === 'list' ? 'md:grid md:grid-cols-12 gap-8' : ''}`}>
        
        {/* Visual Mockup Top */}
        <div className={`w-full aspect-[16/10] bg-slate-950 rounded-2xl mb-5 overflow-hidden relative shadow-inner group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500 ${
          viewMode === 'list' ? 'md:col-span-4 md:mb-0' : ''
        }`}>
          {/* Ribbon badge */}
          <span className="absolute top-3 left-3 bg-purple-500/15 border border-purple-500/30 text-[9px] font-bold tracking-wider text-purple-300 uppercase px-2.5 py-1 rounded-md z-20">
            Featured
          </span>
          {/* Ambient shadow glow */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.themeColor} opacity-5 z-0`} />

          {/* Render specific CSS Mockup — fill entire container */}
          <div className="w-full h-full relative z-10 [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-top group-hover:scale-[1.03] transition-transform duration-700">
            {project.mockup}
          </div>
        </div>

        {/* Info panel */}
        <div className={`flex flex-col flex-1 justify-between ${viewMode === 'list' ? 'md:col-span-8' : ''}`}>
          <div>
            {/* Meta info details */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.themeColor} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            {/* Description text */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tech tag list */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white/[0.02] border border-white/5 text-slate-400 group-hover:border-purple-500/20 group-hover:text-purple-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.1)] transition-colors duration-300 uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons row */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
            <div className="flex items-center gap-4">
              <a
                href={project.liveLink}
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                Live Demo <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-slate-700 select-none">|</span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Round action button on right */}
            <button className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 group-hover:border-purple-500/40 flex items-center justify-center text-slate-400 group-hover:text-white shadow-sm transition-all">
              <ArrowUpRight className="w-4.5 h-4.5 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const stats = [
    { value: '15+', label: 'Projects Completed', icon: Rocket, glow: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { value: '100%', label: 'Client Satisfaction', icon: TrendingUp, glow: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  ];

  const filterOptions = ['All', 'Web Applications', 'Mobile Apps', 'AI / ML', 'Full Stack', 'Open Source'];

  const projectList = [
    {
      title: 'AI-Powered Fake News Detector',
      description: 'Developed an NLP-based system to classify and detect fake news content using machine learning models by analyzing linguistic patterns and content authenticity.',
      category: ['Web Applications', 'AI / ML'],
      tags: ['Python', 'FastAPI', 'NLP', 'Machine Learning'],
      icon: Cpu,
      themeColor: 'from-purple-500 to-indigo-600',
      shadowColor: 'rgba(168, 85, 247, 0.25)',
      buttonBg: 'bg-purple-600 hover:bg-purple-500',
      liveLink: '#',
      githubLink: 'https://github.com/visshaalpvt/fake-news-detector',
      mockup: (
        <div className="w-full h-full bg-[#07051a] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-t border-x border-purple-500/20 relative overflow-hidden">
          {/* Top Address/Url bar mockup */}
          <div className="h-7 md:h-8 bg-[#02010a] rounded-lg border border-purple-500/10 flex items-center px-3 mb-3 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="bg-[#0b082c] rounded flex-1 h-5 flex items-center px-3 text-[10px] md:text-xs text-purple-400 select-none">
              https://ai-news-detector.visshaal.dev/analyze
            </div>
          </div>
          {/* Main area */}
          <div className="flex-1 bg-[#0b082c] rounded-lg border border-purple-500/10 p-3 md:p-4 flex flex-col gap-3 relative">
            <span className="text-xs md:text-sm text-slate-400 font-semibold block leading-none">Linguistic Pattern Analysis</span>
            <div className="bg-[#03020e] rounded-lg p-3 text-[10px] md:text-xs text-slate-500 leading-relaxed border border-purple-500/5 flex-1 min-h-[40px]">
              "Breaking: New AI model achieves human-level reasoning across mathematics and coding benchmarks. Experts suggest this is a major leap..."
            </div>
            {/* Analysis Result Banner */}
            <div className="h-8 md:h-10 bg-[#041a0d] border border-green-500/30 rounded-lg flex items-center justify-between px-3 md:px-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs text-green-400 font-bold uppercase">Classification: TRUSTWORTHY</span>
              </div>
              <span className="text-xs md:text-sm text-green-400 font-extrabold">98.2% Accuracy</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'AI Resume Analyzer',
      description: 'Built an AI-driven resume analysis system that parses resumes, extracts skills, and evaluates candidate relevance to reduce manual screening effort.',
      category: ['Web Applications', 'AI / ML', 'Full Stack'],
      tags: ['Python', 'FastAPI', 'NLP'],
      icon: FileText,
      themeColor: 'from-blue-500 to-cyan-600',
      shadowColor: 'rgba(6, 182, 212, 0.25)',
      buttonBg: 'bg-blue-600 hover:bg-blue-500',
      liveLink: '#',
      githubLink: 'https://github.com/visshaalpvt/ai-resume-analyzer',
      mockup: (
        <div className="w-full h-full bg-[#05081c] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-t border-x border-cyan-500/20 relative overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs md:text-sm text-slate-400 font-bold">Resume Parser Dashboard</span>
            <div className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] md:text-xs text-cyan-400 font-bold">PDF Parsed</div>
          </div>
          {/* Main workspace */}
          <div className="flex-1 bg-[#09102b] rounded-lg border border-cyan-500/10 p-3 md:p-4 flex gap-4">
            {/* Skills check */}
            <div className="w-1/2 flex flex-col gap-2.5">
              <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold">Extracted Skills</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded" />
                <span className="text-[10px] md:text-xs text-slate-300">React & TS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded" />
                <span className="text-[10px] md:text-xs text-slate-300">FastAPI & Python</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded" />
                <span className="text-[10px] md:text-xs text-slate-300">NLP / ML</span>
              </div>
            </div>
            {/* Circle score gauge */}
            <div className="w-1/2 flex flex-col items-center justify-center border-l border-slate-900 pl-3">
              <span className="text-[10px] md:text-xs text-slate-500 font-bold mb-2">Relevance Score</span>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-cyan-500/30 flex items-center justify-center">
                <span className="text-sm md:text-lg text-white font-extrabold">85%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Lost Object Finder',
      description: 'Developed a computer vision application capable of detecting and identifying lost or misplaced objects using image recognition techniques.',
      category: ['AI / ML', 'Open Source'],
      tags: ['Python', 'OpenCV', 'Computer Vision'],
      icon: Eye,
      themeColor: 'from-green-500 to-emerald-600',
      shadowColor: 'rgba(16, 185, 129, 0.25)',
      buttonBg: 'bg-green-600 hover:bg-green-500',
      liveLink: '#',
      githubLink: 'https://github.com/visshaalpvt/lost-object-finder',
      mockup: (
        <div className="w-full h-full bg-[#030a05] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-t border-x border-green-500/20 relative overflow-hidden">
          {/* Viewport frame */}
          <div className="flex-1 bg-[#061408] rounded-lg border border-green-500/15 p-3 flex flex-col justify-between relative">
            <span className="text-[10px] md:text-xs text-green-400 font-mono">LIVE FEED [CAM_01]</span>

            {/* Bounding box 1 */}
            <div className="absolute top-[20%] left-[15%] w-20 h-16 md:w-24 md:h-20 border-2 border-green-500 rounded-lg p-1">
              <span className="text-[9px] md:text-[11px] text-green-400 font-mono bg-black/60 px-1 py-0.5 rounded absolute -top-3 -left-[1px]">Wallet (94%)</span>
            </div>

            {/* Bounding box 2 */}
            <div className="absolute bottom-[20%] right-[15%] w-24 h-20 md:w-28 md:h-24 border-2 border-green-500 rounded-lg p-1">
              <span className="text-[9px] md:text-[11px] text-green-400 font-mono bg-black/60 px-1 py-0.5 rounded absolute -top-3 -left-[1px]">Keys (91%)</span>
            </div>

            <div className="h-3 md:h-4 w-full bg-green-500/5 mt-auto rounded-lg border border-green-500/10 flex items-center px-2">
              <div className="h-1 w-[75%] bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'AI Blind Assistance System',
      description: 'Created a real-time assistive system to help visually impaired users understand their surroundings through object detection and audio-based feedback.',
      category: ['AI / ML', 'Open Source'],
      tags: ['Python', 'OpenCV', 'Computer Vision'],
      icon: ShieldAlert,
      themeColor: 'from-purple-500 to-indigo-600',
      shadowColor: 'rgba(168, 85, 247, 0.25)',
      buttonBg: 'bg-purple-600 hover:bg-purple-500',
      liveLink: '#',
      githubLink: 'https://github.com/visshaalpvt/ai-blind-assistance',
      mockup: (
        <div className="w-full h-full bg-[#09051c] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-t border-x border-indigo-500/20 relative overflow-hidden">
          {/* Viewport frame */}
          <div className="flex-1 bg-[#100d2c] rounded-lg border border-indigo-500/15 p-3 flex flex-col justify-between relative">
            <span className="text-[10px] md:text-xs text-indigo-400 font-mono">ASSISTANCE ACTIVE</span>

            {/* Target item */}
            <div className="absolute top-[25%] left-[25%] w-20 h-20 md:w-24 md:h-24 border-2 border-indigo-500 rounded-lg p-1 flex items-center justify-center">
              <span className="text-[9px] md:text-[11px] text-indigo-300 font-mono bg-black/60 px-1 py-0.5 rounded absolute -top-3 -left-[1px]">Chair (89%)</span>
              <div className="w-3 h-3 bg-indigo-500/40 rounded-full animate-ping" />
            </div>

            {/* Audio Output Text */}
            <div className="h-8 md:h-10 bg-indigo-950/60 border border-indigo-500/30 rounded-lg flex items-center justify-center px-3">
              <span className="text-[10px] md:text-xs text-indigo-300 font-bold uppercase tracking-tight">Audio: "Chair ahead, 2 meters"</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Filter logic
  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Background radial glow */}
      <div className="absolute right-[10%] top-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute left-[10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />

      <div className="container-main relative z-10">

        {/* Top Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">

          {/* Header copy */}
          <div className="lg:col-span-7 text-left">
            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-widest uppercase">MY WORK</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Projects That Solve <br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                Real-World Problems.
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              Here are some of the projects I've built with passion and precision. Each project reflects my commitment to clean code, modern design, and impactful solutions.
            </p>
          </div>

          {/* Stats Summary Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0B1022]/45 border border-white/5 rounded-3xl p-5 md:px-6 md:py-5 flex flex-row items-center justify-around gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/5 shadow-sm mb-2">
                      <Icon className="w-4.5 h-4.5 text-purple-400" />
                    </div>
                    <span className="text-lg font-bold text-white leading-none mb-0.5">{stat.value}</span>
                    <span className="text-[8px] text-slate-500 font-semibold tracking-tight leading-none uppercase">{stat.label.split(' ')[0]} {stat.label.split(' ')[1] || ''}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Filters and Toggle Controls row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-row items-center gap-2 flex-wrap justify-start">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 ${activeFilter === opt
                  ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-[#0B1022]/40 text-slate-400 border-white/5 hover:text-slate-200 hover:border-white/10'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Sort Dropdown + view switches */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Sort Mockup dropdown */}
            <div className="px-3.5 py-1.5 rounded-lg bg-[#0B1022]/45 border border-white/5 text-xs font-medium text-slate-350 flex items-center gap-1.5 cursor-pointer hover:border-white/15">
              Newest First <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>

            {/* Grid/List switches */}
            <div className="flex items-center rounded-lg bg-[#0B1022]/45 border border-white/5 p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-purple-500/20 text-purple-400' : 'text-slate-500 hover:text-slate-350'
                  }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-purple-500/20 text-purple-400' : 'text-slate-500 hover:text-slate-350'
                  }`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Cards Container */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} viewMode={viewMode} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Want to see more github panel */}
        <div className="mt-12 p-4 md:py-4 md:px-6 rounded-3xl bg-[#0B1022]/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 shadow-sm shrink-0">
              <Folder className="w-4.5 h-4.5 text-purple-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold">Want to see more?</span>
              <span className="text-slate-400 text-xs mt-0.5">Check out my GitHub for more projects and contributions.</span>
            </div>
          </div>

          <a
            href="https://github.com/visshaalpvt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(168,85,247,0.25)] hover:scale-105"
          >
            View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
