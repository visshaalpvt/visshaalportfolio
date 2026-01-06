import { motion, type Variants } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-main section-padding text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
        >
          Visshaal Ramachandran
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            <span className="text-foreground font-medium">Full Stack Developer</span>
            <span className="mx-3 text-primary">&</span>
            <span className="text-foreground font-medium">AI Engineer</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-3">
            Co-Founder & Chief Operating Officer at{' '}
            <span className="text-primary font-medium">ProVeloce</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Building scalable web, mobile, and AI-driven systems — from idea to production.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="hero" size="lg" asChild>
            <a href="#projects">View My Work</a>
          </MagneticButton>
          <MagneticButton variant="heroOutline" size="lg" asChild>
            <a href="#contact">Let's Build Together</a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
