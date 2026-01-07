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
import PrismaticBurst from '@/components/PrismaticBurst';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'auto' }}>
      {/* Cursor-following glow effect - optimized */}
      <CursorGlow color="rgba(0, 255, 255, 0.10)" size={600} blur={120} />

      {/* PrismaticBurst Background - Fixed overlay with intense rays */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
      >
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.8}
          speed={0.3}
          distort={1.2}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#00ffff', '#b478ff', '#ff6b9d', '#00d4aa', '#ff00ff', '#0ea5e9']}
        />
      </div>

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
