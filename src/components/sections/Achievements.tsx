import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Trophy, Star, Award, Users, ChevronLeft, ChevronRight, ArrowUpRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

<<<<<<< HEAD
const AnimatedCounter = ({ value, duration = 1.5 }: { value: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) return;

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
    }, Math.max(stepTime, 20));

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
=======
const achievements = [
  {
    place: '2nd Prize',
    event: 'Chakravyuha 2k26',
    venue: 'JJ College of Engineering, Trichy',
    image: null,
    description: 'Winner of 2nd Prize at Chakravyuha 2k26 Hackathon'
  },
  {
    place: 'Winner',
    event: 'AI Ignite National Hackathon',
    venue: 'Pondicherry',
    image: '/hackathons/aiignite-pondicherry.jpg',
    description: 'Winning moment at AI Ignite, Pondicherry'
  },
  {
    place: 'Winner',
    event: 'Hackathon Win',
    venue: 'Rathinam Engineering College',
    image: '/hackathons/rathinam-coimbatore.png',
    description: 'Winning moment at Rathinam Engineering College, Coimbatore'
  },
  {
    place: '1st Place',
    event: "ThinkFinity '25",
    venue: 'Sriram Engineering College',
    image: '/hackathons/thinkfinity-1st-place.png',
    description: 'Winning moment at ThinkFinity hackathon'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-team-real.jpg',
    description: 'Winning team at QuestInnovate hackathon at SRM Vadapalani'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25 (Certificate)",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-certificate-real.jpg',
    description: 'Certificate of Merit for AI Fake News Detector',
    hidden: true
  },
  {
    place: '2nd Runner-Up',
    event: "InnoThon '25",
    venue: 'KCG College of Technology',
    image: '/hackathons/innothon-2nd-place.jpg',
    description: 'Team Tech Slashers winning ₹10,000 prize'
  },
  {
    place: '1st Place',
    event: 'AI in Digital Marketing Hackathon',
    venue: 'SRM Ramapuram University',
    image: null,
    description: '1st Place at AI in Digital Marketing Hackathon at SRM Ramapuram University'
  },
];
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const stats = [
    { value: '15+', label: 'Achievements Earned', icon: Trophy, glow: 'text-purple-400' },
    { value: '5+', label: 'Hackathons Participated', icon: Star, glow: 'text-blue-400' },
    { value: '3+', label: 'Leadership Roles', icon: Award, glow: 'text-green-400' },
    { value: '10K+', label: 'People Impacted', icon: Users, glow: 'text-pink-400' },
  ];

  const timelineEvents = [
    {
      year: '2025',
      title: "1st Place – ThinkFinity '25",
      desc: 'Winning moment at ThinkFinity hackathon at Sriram Engineering College.',
      icon: Trophy,
      color: 'border-purple-500/40 text-purple-300'
    },
    {
      year: '2025',
      title: "1st Place – QuestInnovate '25",
      desc: 'Winning team at QuestInnovate hackathon at SRM Vadapalani for building AI Fake News Detector.',
      icon: Trophy,
      color: 'border-blue-500/40 text-blue-300'
    },
    {
      year: '2025',
      title: "2nd Runner-Up – InnoThon '25",
      desc: 'Team Tech Slashers winning ₹10,000 prize at KCG College of Technology.',
      icon: Award,
      color: 'border-green-500/40 text-green-300'
    },
    {
      year: '2025',
      title: '1st Place – AI in Digital Marketing',
      desc: '1st Place at AI in Digital Marketing Hackathon at SRM Ramapuram University.',
      icon: Star,
      color: 'border-pink-500/40 text-pink-300'
    }
  ];

  const keyAchievements = [
    {
      badge: 'Hackathon',
      title: "ThinkFinity '25",
      desc: 'Secured 1st Place at ThinkFinity \'25 Hackathon hosted by Sriram Engineering College.',
      tag: '1st Place',
      graphic: (
        <svg className="w-12 h-12 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" fill="rgba(234,179,8,0.15)" />
        </svg>
      )
    },
    {
      badge: 'Hackathon',
      title: "QuestInnovate '25",
      desc: 'Won 1st Place for building AI-Powered Fake News Detector at SRM Vadapalani.',
      tag: '1st Place',
      graphic: (
        <svg className="w-12 h-12 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="rgba(59,130,246,0.1)" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      badge: 'Hackathon',
      title: "InnoThon '25",
      desc: 'Won 2nd Runner-Up with Team Tech Slashers at KCG College of Technology, securing ₹10,000 prize.',
      tag: '2nd Runner-Up',
      graphic: (
        <svg className="w-12 h-12 text-green-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect width="18" height="14" x="3" y="5" rx="2" fill="rgba(16,185,129,0.1)" />
          <path d="M7 11h6" />
          <path d="M7 15h3" />
        </svg>
      )
    },
    {
      badge: 'Hackathon',
      title: 'AI in Digital Marketing',
      desc: 'Won 1st Place at AI in Digital Marketing Hackathon hosted by SRM Ramapuram University.',
      tag: '1st Place',
      graphic: (
        <svg className="w-12 h-12 text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  const winningMoments = [
    {
      place: '1st Place',
      event: "ThinkFinity '25",
      venue: 'Sriram Engineering College',
      image: '/hackathons/thinkfinity-1st-place.png',
      description: 'Winning moment at ThinkFinity hackathon'
    },
    {
      place: '1st Place',
      event: "QuestInnovate '25",
      venue: 'SRM Vadapalani',
      image: '/hackathons/questinnovate-1st-place.png',
      description: 'Won 1st place for AI Fake News Detector'
    },
    {
      place: '2nd Runner-Up',
      event: "InnoThon '25",
      venue: 'KCG College of Technology',
      image: '/hackathons/innothon-2nd-runner-up.png',
      description: 'Team Tech Slashers receiving cash prize'
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % winningMoments.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + winningMoments.length) % winningMoments.length);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Background radial glow */}
      <div className="absolute left-[10%] top-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-[10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />

      <div className="container-main relative z-10" ref={ref}>

        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          {/* Header copy */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">HONORS & MILESTONES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Awards, Hackathons <br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                & Achievements.
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              Highlights of my competitive coding, academic awards, hackathon wins, and professional certifications.
            </p>
          </div>

          {/* Stats metrics */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-4 flex items-start gap-3 transition-all duration-300 hover:border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-inner mt-0.5">
                      <Icon className={`w-4 h-4 ${stat.glow}`} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-extrabold text-white leading-none">
                        <AnimatedCounter value={stat.value} />
                      </h4>
                      <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">

          {/* LEFT: Timeline events column */}
          <div className="lg:col-span-5 bg-[#0B1022]/40 border border-white/5 rounded-[28px] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">HACKATHON WINS TIMELINE</span>
              </div>

              <div className="relative flex flex-col gap-6 pl-6">
                {/* Vertical timeline line */}
                <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[1px] bg-white/10" />

                {timelineEvents.map((ev, idx) => {
                  const EvIcon = ev.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      key={idx}
                      className="relative flex flex-col gap-1.5 text-left"
                    >
                      {/* Node indicator */}
                      <div className="absolute -left-[24px] top-1 z-10 w-3.5 h-3.5 rounded-full bg-[#050816] border border-cyan-400 flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                          {ev.year}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {ev.title}
                        </h4>
                      </div>
                      <p className="text-slate-400 text-xs leading-normal">
                        {ev.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Featured key achievements & Oracle Credential */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Staggered cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-purple-300 transition-colors uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-tight mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="w-full h-16 flex items-center justify-center mt-auto border-t border-white/5 pt-4">
                    <div className="group-hover:scale-105 transition-transform duration-300">
                      {item.graphic}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications row */}
            <div className="mt-2 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">PROFESSIONAL CERTIFICATIONS</span>
              </div>

              {/* Big Animated Certificate Showcase Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="relative bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group overflow-hidden"
              >
                {/* Ambient glowing orb inside card */}
                <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-red-500/10 blur-[60px] pointer-events-none group-hover:bg-red-500/20 transition-all duration-700" />

                {/* Certificate Icon / Badge representation */}
                <div className="relative shrink-0 w-24 h-24 md:w-30 md:h-30 rounded-2xl bg-gradient-to-br from-red-600/20 via-orange-500/10 to-transparent border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.25)] group-hover:scale-105 transition-all duration-500 bg-slate-950">
                  <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(239,68,68,0.1)" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-red-600 text-[9px] font-extrabold text-white uppercase tracking-wider shadow border border-red-500/40">Oracle</span>
                </div>

                {/* Details Column */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-[10px] font-extrabold uppercase tracking-wider mb-4 select-none">
                    Active Professional Credential
                  </div>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors duration-300">
                    Oracle Certified Professional: Java SE 21 Developer
                  </h4>
                  <p className="text-slate-350 text-sm font-semibold mb-1">
                    Issued by: <span className="text-white font-bold">Oracle Corporation</span>
                  </p>
                  <p className="text-slate-400 text-xs mb-6">
                    Completion Date: <span className="text-slate-300 font-bold">May 13, 2026</span>
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <a
                      href="/assets/Oracle_eCertificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-95 shadow-[0_4px_15px_rgba(239,68,68,0.3)] transition-all hover:scale-105 border border-red-400/25"
                    >
                      View Certificate (PDF) <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* Winning Moments image carousel */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6 text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">📸 WINNING MOMENTS GALLERY</span>
          </div>

          <div className="relative px-10">
            {/* Nav buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-white/[0.08]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-white/[0.08]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Embla slider */}
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-[#0B1022]/40" ref={emblaRef}>
              <div className="flex">
                {winningMoments.map((moment, index) => (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-4">
                    <div
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-md"
                    >
                      <img
                        src={moment.image}
                        alt={moment.description}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">{moment.place} – {moment.event}</span>
                        <p className="text-white text-xs font-bold mt-1 leading-tight">{moment.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-1.5 mt-5">
              {winningMoments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-cyan-400 w-6' : 'bg-slate-800'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                onClick={closeLightbox}
              >
                <X className="w-8 h-8" />
              </button>

              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-[#0B1022]/60 border border-white/5 rounded-full text-slate-400 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-[#0B1022]/60 border border-white/5 rounded-full text-slate-400 hover:text-white transition-all"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl max-h-[85vh] p-4 flex flex-col items-center justify-center gap-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={winningMoments[currentImageIndex].image}
                  alt={winningMoments[currentImageIndex].description}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <div>
                  <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">{winningMoments[currentImageIndex].place} – {winningMoments[currentImageIndex].event}</span>
                  <p className="text-white text-sm font-semibold mt-1">{winningMoments[currentImageIndex].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-16 p-4 md:py-4 md:px-6 rounded-3xl bg-[#0B1022]/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 shadow-sm shrink-0">
              <Star className="w-4.5 h-4.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold">Driven by passion. Defined by impact.</span>
              <span className="text-slate-400 text-xs mt-0.5 font-normal">I'm just getting started — the best is yet to come.</span>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_4px_15px_rgba(168,85,247,0.25)] hover:scale-105"
          >
            Let's Achieve More Together <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
