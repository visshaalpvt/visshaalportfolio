import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);
    if (isTouch) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')) {
        setIsHovering(true);
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // GSAP animation loop for smooth interpolation
    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(0.15, gsap.ticker.deltaRatio());
      pos.current.x += (target.current.x - pos.current.x) * dt;
      pos.current.y += (target.current.y - pos.current.y) * dt;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
    });

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      gsap.ticker.remove(ticker as unknown as gsap.TickerCallback);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Glow trail */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Outer ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full border transition-all duration-300 ease-out"
          style={{
            width: isHovering ? '56px' : '36px',
            height: isHovering ? '56px' : '36px',
            marginLeft: isHovering ? '-28px' : '-18px',
            marginTop: isHovering ? '-28px' : '-18px',
            borderColor: isHovering
              ? 'rgba(139, 92, 246, 0.6)'
              : 'rgba(255, 255, 255, 0.15)',
            backgroundColor: isHovering
              ? 'rgba(139, 92, 246, 0.08)'
              : 'transparent',
            boxShadow: isHovering
              ? '0 0 20px rgba(139, 92, 246, 0.3)'
              : 'none',
            transform: isClicking ? 'scale(0.85)' : 'scale(1)',
          }}
        />
      </div>

      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full transition-all duration-150 ease-out"
          style={{
            width: isHovering ? '6px' : '5px',
            height: isHovering ? '6px' : '5px',
            marginLeft: isHovering ? '-3px' : '-2.5px',
            marginTop: isHovering ? '-3px' : '-2.5px',
            backgroundColor: isHovering
              ? 'rgba(139, 92, 246, 1)'
              : 'rgba(255, 255, 255, 0.9)',
            boxShadow: isHovering
              ? '0 0 12px rgba(139, 92, 246, 0.8)'
              : '0 0 6px rgba(255, 255, 255, 0.3)',
            transform: isClicking ? 'scale(0.6)' : 'scale(1)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
