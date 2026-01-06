import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Megaphone } from 'lucide-react';

const leadershipRoles = [
  {
    icon: Users,
    title: 'Vice President — Hackathon Club (SIMATS)',
    description: 'Led and coordinated hackathon initiatives within the university, contributing to event planning, team coordination, and fostering an innovation-driven culture.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Team Lead — Google Developer Groups (GDG SIMATS)',
    description: 'Led marketing and outreach for developer-focused events, managing promotions, content planning, and community engagement to increase student participation.',
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Leadership & Community
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <role.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {role.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
