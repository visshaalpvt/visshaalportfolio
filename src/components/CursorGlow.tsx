import { useEffect, useRef } from 'react';

interface CursorGlowProps {
    color?: string;
    size?: number;
    blur?: number;
}

const CursorGlow = ({
    color = 'rgba(0, 255, 255, 0.15)',
    size = 600,
    blur = 150
}: CursorGlowProps) => {
    const glowRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    useEffect(() => {
        let lastUpdate = 0;
        const throttleDelay = 16; // ~60fps

        const handleMouseMove = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastUpdate < throttleDelay) return;
            lastUpdate = now;

            mousePos.current = {
                x: e.clientX + window.scrollX,
                y: e.clientY + window.scrollY
            };
        };

        const animate = () => {
            // Smooth lerp animation - slightly slower for less CPU usage
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.12;
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.12;

            if (glowRef.current) {
                // Use translate3d for GPU acceleration
                glowRef.current.style.transform = `translate3d(${currentPos.current.x - size / 2}px, ${currentPos.current.y - size / 2}px, 0)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [size]);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed z-0"
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color} 0%, rgba(180, 120, 255, 0.08) 40%, transparent 70%)`,
                filter: `blur(${blur}px)`,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform',
            }}
        />
    );
};

export default CursorGlow;
