import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;

      if (currentScrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Detect active section — use 40% of viewport for stable detection
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const active = [...sections].reverse().find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.4;
        }
        return false;
      });

      if (active) {
        setActiveSection(active);
      }
    };
    
    // Set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work Focus', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Custom smooth scroll with consistent duration regardless of distance
  const smoothScrollTo = (targetY: number, duration = 900) => {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + diff * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      smoothScrollTo(offsetPosition);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-main py-4 flex items-center justify-start gap-8">
          {/* Logo with slow float & mouse reaction */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group relative z-10 shrink-0"
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(0);
            }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            <img 
              src="/navbar_brand_logo.png" 
              alt="Visshaal" 
              className="h-11 w-auto object-contain pointer-events-none select-none relative z-10"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.a>

          {/* Desktop Navigation Links — start from left after logo */}
          <div className="hidden lg:flex items-center gap-1.5 relative bg-white/[0.02] border border-white/5 rounded-full p-1 backdrop-blur-md overflow-x-auto max-w-[calc(100%-250px)]">
            {navLinks.map((link) => {
              const linkSection = link.href.replace('#', '');
              const isActive = activeSection === linkSection || (linkSection === 'home' && activeSection === '');
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors relative tracking-wide uppercase whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-400 font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {/* Threads style sliding pill background */}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-white/[0.06] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {link.name}

                  {/* Active glowing dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 relative z-10 ml-auto shrink-0">
            {/* Theme Toggle Button */}
            <motion.button 
              onClick={toggleTheme}
              className="p-2 text-slate-400 hover:text-white rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer"
              aria-label="Toggle Theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </motion.button>

            {/* Let's Talk Button */}
            <motion.a
              href="/resume/140426-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-sm font-medium px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:block text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

<<<<<<< HEAD
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-24 z-40 bg-[#050816]/95 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`block text-sm font-semibold uppercase tracking-wider p-3 rounded-2xl border transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cyan-400 bg-white/[0.04] border-white/10'
                      : 'text-slate-400 border-transparent hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border lg:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 }}
              className={`block text-lg font-medium transition-colors ${activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume/140426-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: navLinks.length * 0.05 }}
            className="block text-lg font-medium text-primary transition-colors"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-md lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
