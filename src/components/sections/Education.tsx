import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-start gap-6 p-8 rounded-2xl bg-card border border-border max-w-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              B.Tech — Information Technology
            </h3>
            <p className="text-lg text-muted-foreground mb-1">
              Saveetha School of Engineering (SIMATS)
            </p>
            <p className="text-sm text-muted-foreground">
              Second Year Undergraduate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
