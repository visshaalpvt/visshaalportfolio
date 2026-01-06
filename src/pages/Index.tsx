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
  return (
    <main className="min-h-screen bg-background">
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
    </main>
  );
};

export default Index;
