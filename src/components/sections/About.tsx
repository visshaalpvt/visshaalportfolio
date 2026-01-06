import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    "I'm a technology-driven full stack developer and AI engineer with a strong focus on building real-world, production-ready systems.",
    "As the Co-Founder and Chief Operating Officer at ProVeloce, I work at the intersection of engineering, operations, and AI-driven problem solving — turning complex ideas into clean, scalable digital solutions. My experience spans web and mobile application development, backend API design, and AI-powered systems using NLP and computer vision.",
    "I value clarity, performance, and execution over hype, and I enjoy building products that are practical, impactful, and actually get used in real environments.",
  ];

  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="max-w-4xl">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 last:mb-0"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
