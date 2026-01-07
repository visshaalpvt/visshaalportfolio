import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Briefcase, Rocket, Code2, Zap, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '4+', label: 'Hackathon Wins', icon: Trophy },
    { value: '10+', label: 'Projects Built', icon: Briefcase },
    { value: '1', label: 'Active Startup', icon: Rocket },
  ];

  const codeSnippet = `const developer = {
  name: 'Visshaal R',
  role: 'Full Stack Developer',
  startup: 'ProVeloce',
  skills: ['React', 'Python', 'AI/ML'],
  status: 'Open to collaborate! 🚀'
};`;

  return (
    <section id="about" className="section-padding overflow-hidden" style={{ background: 'transparent' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              I'm a technology-driven full stack developer and AI engineer with a strong
              focus on building real-world, production-ready systems. I really enjoy solving
              problems as well as making things functional and easy to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              As the <span className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">Co-Founder & COO of ProVeloce</span>,
              I'm building a skill-based EdTech platform that bridges the gap between
              traditional education and real-world industry demands.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[120px] p-5 rounded-xl text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.9) 0%, rgba(12, 16, 28, 0.95) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-border bg-[#1a1a2e] p-4 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">developer.js</span>
              </div>
              <pre className="text-gray-300 overflow-x-auto">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line.includes('const') && (
                        <><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {'{'}</>
                      )}
                      {line.includes('name:') && (
                        <><span className="text-gray-500">  </span><span className="text-cyan-300">name</span>: <span className="text-green-400">'Visshaal R'</span>,</>
                      )}
                      {line.includes('role:') && (
                        <><span className="text-gray-500">  </span><span className="text-cyan-300">role</span>: <span className="text-green-400">'Full Stack Developer'</span>,</>
                      )}
                      {line.includes('startup:') && (
                        <><span className="text-gray-500">  </span><span className="text-cyan-300">startup</span>: <span className="text-green-400">'ProVeloce'</span>,</>
                      )}
                      {line.includes('skills:') && (
                        <><span className="text-gray-500">  </span><span className="text-cyan-300">skills</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'AI/ML'</span>],</>
                      )}
                      {line.includes('status:') && (
                        <><span className="text-gray-500">  </span><span className="text-cyan-300">status</span>: <span className="text-green-400">'Open to collaborate! 🚀'</span></>
                      )}
                      {line.includes('};') && (
                        <>{'};'}</>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/30 rounded-lg flex items-center justify-center text-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400">
                <Zap className="w-4 h-4" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 border-2 border-purple-400/30 rounded-lg flex items-center justify-center text-purple-400">
                <Users className="w-4 h-4" />
              </div>

              {/* Main Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Animated Border Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full border border-cyan-400/30" />

                {/* Photo */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                  <img
                    src="/profile-photo.jpg"
                    alt="Visshaal R - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-card border border-border rounded-full shadow-lg">
                  <span className="text-sm font-medium text-primary">Co-Founder & COO</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
