import { useEffect, useRef, useCallback } from 'react';

const BackgroundLayers = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const spotlightRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Mouse spotlight tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(139,92,246,0.04), transparent 60%)`;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Floating particles (canvas-based, GPU accelerated)
  useEffect(() => {
    if (isMobile) return; // Skip particles on mobile
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; }> = [];
    const PARTICLE_COUNT = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Layer 1: Base background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Layer 2: Aurora gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(139,92,246,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 50% 80%, rgba(6,182,212,0.08) 0%, transparent 50%)
          `,
          animation: 'aurora-drift 20s ease-in-out infinite alternate',
        }}
      />

      {/* Layer 3: Slow-moving dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'grid-drift 60s linear infinite',
        }}
      />

      {/* Layer 4: Floating particles (canvas) */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ opacity: 0.6 }}
        />
      )}

      {/* Layer 5: Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Layer 6: Blurred gradient blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.2))',
          top: '10%',
          left: '15%',
          animation: 'blob-float-1 25s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{
          background: 'linear-gradient(225deg, rgba(6,182,212,0.25), rgba(236,72,153,0.15))',
          bottom: '15%',
          right: '10%',
          animation: 'blob-float-2 30s ease-in-out infinite alternate',
        }}
      />

      {/* Layer 7: Shooting stars (CSS only) */}
      {!isMobile && (
        <>
          <div className="shooting-star" style={{ top: '15%', left: '10%', animationDelay: '0s' }} />
          <div className="shooting-star" style={{ top: '35%', left: '50%', animationDelay: '5s' }} />
          <div className="shooting-star" style={{ top: '55%', left: '80%', animationDelay: '12s' }} />
          <div className="shooting-star" style={{ top: '75%', left: '30%', animationDelay: '18s' }} />
        </>
      )}

      {/* Layer 8: Mouse spotlight */}
      <div ref={spotlightRef} className="absolute inset-0" />
    </div>
  );
};

export default BackgroundLayers;
