import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'SIMATS School of Engineering, Saveetha University',
    period: '2024 - Present',
    description: 'Specializing in Artificial Intelligence and Full Stack Development. Current CGPA: 8.85/10',
    icon: GraduationCap,
    isCurrent: true,
  },
  {
    degree: 'Higher Secondary Education (HSE) - Computer Science',
    institution: 'Velammal Vidyalaya, Alapakkam',
    period: '2022 - 2024',
    description: 'Completed Higher Secondary Education with specialization in Computer Science stream',
    icon: BookOpen,
    isCurrent: false,
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Jawahar Vidyalaya Senior Secondary School',
    period: '2022',
    description: 'Completed SSLC with distinction',
    icon: School,
    isCurrent: false,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding">
      <div className="container-main" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.4)] bg-cyan-400 text-black z-10">
                <edu.icon className="w-4 h-4" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className="p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]"
                  style={{
                    background: edu.isCurrent
                      ? 'linear-gradient(145deg, rgba(0, 255, 255, 0.1) 0%, rgba(20, 28, 45, 0.95) 100%)'
                      : 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: edu.isCurrent
                      ? '1px solid rgba(0, 255, 255, 0.4)'
                      : '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${edu.isCurrent ? 'bg-cyan-400 text-black' : 'bg-cyan-500/15 text-cyan-400 border border-cyan-400/20'}`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm mb-2 font-medium">{edu.institution}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
