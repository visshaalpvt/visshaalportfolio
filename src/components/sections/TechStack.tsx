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
    <section id="skills" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
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
              className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                border: '1px solid rgba(0, 255, 255, 0.15)',
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:text-cyan-400 transition-colors">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-gray-200 border border-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 cursor-default"
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
