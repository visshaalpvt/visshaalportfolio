import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Trophy, X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const achievements = [
  {
    place: '1st Place',
    event: "ThinkFinity '25",
    venue: 'Sriram Engineering College',
    image: '/hackathons/thinkfinity-1st-place.png',
    description: 'Winning moment at ThinkFinity hackathon'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-team-real.jpg',
    description: 'Winning team at QuestInnovate hackathon at SRM Vadapalani'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25 (Certificate)",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-certificate-real.jpg',
    description: 'Certificate of Merit for AI Fake News Detector',
    hidden: true
  },
  {
    place: '2nd Runner-Up',
    event: "InnoThon '25",
    venue: 'KCG College of Technology',
    image: '/hackathons/innothon-2nd-place.jpg',
    description: 'Team Tech Slashers winning ₹10,000 prize'
  },
  {
    place: '1st Place',
    event: 'AI in Digital Marketing Hackathon',
    venue: 'SRM Ramapuram University',
    image: null,
    description: '1st Place at AI in Digital Marketing Hackathon at SRM Ramapuram University'
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Embla Carousel with Autoplay - continuous movement
  const autoplayOptions = { delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay(autoplayOptions)]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const achievementsWithImages = achievements.filter(a => a.image);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievementsWithImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + achievementsWithImages.length) % achievementsWithImages.length);
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Hackathons & Achievements
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.filter(a => !a.hidden).map((achievement, index) => (
            <motion.div
              key={achievement.event}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 rounded-2xl text-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                border: achievement.place.includes('1st')
                  ? '1px solid rgba(0, 255, 255, 0.3)'
                  : '1px solid rgba(251, 191, 36, 0.3)',
              }}
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-yellow-500/5" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
                  <Trophy className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
                </div>
                <div className={`text-sm font-bold mb-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] ${achievement.place.includes('1st') ? 'text-cyan-400' : 'text-amber-400'}`}>
                  {achievement.place}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.event}
                </h3>
                {achievement.venue && (
                  <p className="text-sm text-gray-400">
                    {achievement.venue}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Winning Moments Carousel with Auto-play */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            📸 <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Winning Moments</span>
          </h3>

          {/* Carousel Container */}
          <div className="relative px-12">
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {achievementsWithImages.map((achievement, index) => (
                  <div
                    key={achievement.event}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0"
                  >
                    <div
                      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                      onClick={() => openLightbox(index)}
                      style={{
                        background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                        border: '1px solid rgba(0, 255, 255, 0.2)',
                      }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={achievement.image!}
                          alt={achievement.description}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* No overlay - clean image */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {achievementsWithImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? 'bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors p-2"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={achievementsWithImages[currentImageIndex].image!}
                alt={achievementsWithImages[currentImageIndex].description}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
              {/* Clean image view - no text overlay */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
