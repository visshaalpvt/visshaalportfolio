import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WorkFocus from '@/components/sections/WorkFocus';
import Projects from '@/components/sections/Projects';
import Leadership from '@/components/sections/Leadership';
import Achievements from '@/components/sections/Achievements';
import TechStack from '@/components/sections/TechStack';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  return (
    <main className="min-h-screen bg-background relative" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'auto' }}>
      {/* Optimized Performance Background (Replaces heavy WebGL & JS cursor) */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(0, 255, 255, 0.08) 0%, rgba(180, 120, 255, 0.03) 40%, transparent 80%)',
          zIndex: 0
        }}
      />

      {/* Content - seamless design with no gaps */}
      <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Hero />
        <About />
        <WorkFocus />
        <Projects />
        <Leadership />
        <Achievements />
        <TechStack />
        <Education />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
