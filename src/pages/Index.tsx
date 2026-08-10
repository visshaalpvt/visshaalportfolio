import { useState, useRef, useEffect } from 'react';
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
<<<<<<< HEAD
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import BackgroundLayers from '@/components/BackgroundLayers';
=======
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64

const Index = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFinished) return;

    // Try to play with sound
    video.muted = false;
    video.play().catch(() => {
      // If browser blocks unmuted autoplay, start muted then unmute after first touch
      video.muted = true;
      video.play().catch(() => {});

      const unmuteOnTouch = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
        }
        document.removeEventListener('touchstart', unmuteOnTouch);
        document.removeEventListener('click', unmuteOnTouch);
      };
      document.addEventListener('touchstart', unmuteOnTouch, { once: true });
      document.addEventListener('click', unmuteOnTouch, { once: true });
    });
  }, [videoFinished]);

  useEffect(() => {
    if (videoFinished) {
      document.documentElement.classList.add('custom-cursor-active');
    } else {
      document.documentElement.classList.remove('custom-cursor-active');
    }
  }, [videoFinished]);

  const handleVideoEnded = () => {
    setVideoFinished(true);
  };

  if (!videoFinished) {
    return (
      <main className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Full-screen video — always with sound */}
        <video
          ref={videoRef}
          src="/assets/intro_video.mp4"
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Floating Skip button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5">
          <button
            onClick={handleVideoEnded}
            className="px-8 py-3.5 rounded-full bg-slate-950/85 hover:bg-slate-900/90 text-white font-bold text-sm tracking-wide transition-all hover:scale-[1.05] border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.35)] backdrop-blur-md"
          >
            Skip Intro & Enter Portfolio
          </button>
        </div>
      </main>
    );
  }

  return (
<<<<<<< HEAD
    <SmoothScroll>
      <main className="min-h-screen bg-[#050816] relative overflow-hidden">
        <CustomCursor />
        <BackgroundLayers />

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
    </SmoothScroll>
=======
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
>>>>>>> 84b2f6de4df558a620b09f8a66d44b3c5017ee64
  );
};

export default Index;
