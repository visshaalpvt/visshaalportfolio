import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  { place: '1st Place', event: "ThinkFinity '25", venue: 'Sri Sairam Engineering College' },
  { place: '1st Place', event: 'QuestInnovate', venue: 'SRM Vadapalani' },
  { place: '1st Place', event: 'AI with Digital Marketing Hackathon', venue: '' },
  { place: '2nd Place', event: "InnoThon '25", venue: 'KCG College of Technology' },
];

const Achievements = () => {
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
            Hackathons & Achievements
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.event}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div className={`text-sm font-bold mb-2 ${achievement.place === '1st Place' ? 'text-primary' : 'text-muted-foreground'}`}>
                {achievement.place}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {achievement.event}
              </h3>
              {achievement.venue && (
                <p className="text-sm text-muted-foreground">
                  {achievement.venue}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
