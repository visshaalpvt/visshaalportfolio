import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, Brain, Eye, Server, Rocket } from 'lucide-react';

const workItems = [
  {
    icon: Globe,
    title: 'Web & Web Application Development',
    description: 'Designing and building modern, scalable web applications with a focus on performance and user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Developing clean, functional mobile applications with strong backend integration.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    description: 'Building intelligent systems such as resume analyzers, fake news detection platforms, and automation tools.',
  },
  {
    icon: Eye,
    title: 'Computer Vision Systems',
    description: 'Creating vision-based applications including object detection and assistive technologies.',
  },
  {
    icon: Server,
    title: 'Backend APIs & Automation',
    description: 'Designing high-performance APIs using FastAPI and Node.js for real-world use cases.',
  },
  {
    icon: Rocket,
    title: 'Startup MVP Building',
    description: 'Helping ideas turn into working products by building MVPs end-to-end.',
  },
];

const WorkFocus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            What I Work On
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFocus;
