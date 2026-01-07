import { motion, type Variants } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import Hyperspeed from '@/components/Hyperspeed';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // INTENSE Hyperspeed preset - maximum cyberpunk vibes
  const hyperspeedOptions = {
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 12,
    islandWidth: 3,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 160,
    speedUp: 3,
    carLightsFade: 0.3,
    totalSideLightSticks: 60,
    lightPairsPerRoadWay: 80,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.15, 0.6] as [number, number],
    lightStickHeight: [1.5, 2.0] as [number, number],
    movingAwaySpeed: [80, 120] as [number, number],
    movingCloserSpeed: [-160, -220] as [number, number],
    carLightsLength: [400 * 0.05, 400 * 0.3] as [number, number],
    carLightsRadius: [0.06, 0.18] as [number, number],
    carWidthPercentage: [0.3, 0.5] as [number, number],
    carShiftX: [-0.8, 0.8] as [number, number],
    carFloorSeparation: [0, 5] as [number, number],
    colors: {
      roadColor: 0x050508,
      islandColor: 0x080810,
      background: 0x000000,
      shoulderLines: 0x00ffff,
      brokenLines: 0x00ffff,
      leftCars: [0xff00ff, 0xd856bf, 0xb478ff, 0xff6b9d],
      rightCars: [0x00ffff, 0x03b3c3, 0x0ea5e9, 0x00d4aa],
      sticks: 0x00ffff
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Hyperspeed Background - HIGH INTENSITY */}
      <div className="absolute inset-0 z-0 opacity-90" style={{ height: '100%', width: '100%' }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Seamless gradient overlay for text readability - extends beyond viewport */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-transparent" style={{ height: '120%' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-main section-padding text-center relative z-10"
      >
        {/* Animated Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Visshaal Ramachandran
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            <span className="text-white font-semibold">Full Stack Developer</span>
            <span className="mx-3 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">&</span>
            <span className="text-white font-semibold">AI Engineer</span>
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-3">
            Co-Founder & Chief Operating Officer at{' '}
            <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">ProVeloce</span>
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
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
            className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
