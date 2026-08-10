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
    <section id="projects" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">AI-powered solutions</span> that make an impact
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.6) 0%, rgba(12, 16, 28, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 255, 0.1)',
              }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Content */}
              <div className="relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Role</p>
                    <p className="text-sm text-gray-200">{project.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
