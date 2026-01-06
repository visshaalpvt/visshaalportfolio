import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Fake News Detector',
    description: 'Developed an NLP-based system to classify and detect fake news content using machine learning models by analyzing linguistic patterns and content authenticity.',
    techStack: ['Python', 'FastAPI', 'NLP', 'Machine Learning'],
    role: 'Full-stack development and AI model integration',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Built an AI-driven resume analysis system that parses resumes, extracts skills, and evaluates candidate relevance to reduce manual screening effort.',
    techStack: ['Python', 'FastAPI', 'NLP'],
    role: 'Backend development, AI logic, API design',
  },
  {
    title: 'Lost Object Finder (Computer Vision)',
    description: 'Developed a computer vision application capable of detecting and identifying lost or misplaced objects using image recognition techniques.',
    techStack: ['Python', 'OpenCV', 'Computer Vision'],
    role: 'Model development and system implementation',
  },
  {
    title: 'AI Blind Assistance System (Computer Vision)',
    description: 'Created a real-time assistive system to help visually impaired users understand their surroundings through object detection and audio-based feedback.',
    techStack: ['Python', 'OpenCV', 'Computer Vision'],
    role: 'Core system design and AI implementation',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-gradient-hero">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-foreground font-medium">Role:</span> {project.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
