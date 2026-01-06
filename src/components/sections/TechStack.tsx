import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    technologies: ['Python', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    technologies: ['MongoDB', 'MySQL'],
  },
  {
    category: 'AI / ML',
    technologies: ['NLP', 'Computer Vision', 'Machine Learning'],
  },
  {
    category: 'Tools',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
];

const TechStack = () => {
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
            Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
