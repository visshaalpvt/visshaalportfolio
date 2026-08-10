import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGSAPRevealProps {
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerHook?: string; // e.g. "top 80%"
}

export const useGSAPReveal = <T extends HTMLElement>({
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  triggerHook = 'top 85%',
}: UseGSAPRevealProps = {}) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' });
      return;
    }

    // Find all animatable child elements (elements with data-reveal attribute or headers/cards)
    const targets = element.querySelectorAll('[data-reveal]');
    const animateTargets = targets.length > 0 ? Array.from(targets) : [element];

    // Set initial states
    gsap.set(animateTargets, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: 'blur(10px)',
    });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: triggerHook,
      onEnter: () => {
        gsap.to(animateTargets, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: duration,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
          overwrite: 'auto',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, duration, stagger, triggerHook]);

  return containerRef;
};
