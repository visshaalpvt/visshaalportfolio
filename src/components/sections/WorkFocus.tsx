import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Brain, Server, Rocket } from 'lucide-react';

const workItems = [
    {
        icon: Globe,
        title: 'Full Stack Development',
        description: 'Building modern web & mobile applications with React, Node.js, and cloud technologies.',
    },
    {
        icon: Brain,
        title: 'AI & Machine Learning',
        description: 'Creating intelligent systems including computer vision, NLP, and automation tools.',
    },
    {
        icon: Server,
        title: 'Backend & APIs',
        description: 'Designing high-performance APIs and scalable backend systems using FastAPI & Node.js.',
    },
    {
        icon: Rocket,
        title: 'Startup MVP Building',
        description: 'Transforming ideas into working products with end-to-end development.',
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
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4"
                    >
                        What I Work On
                    </motion.h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 0.1 + index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group p-8 rounded-3xl cursor-default relative overflow-hidden transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-[#0B1022]/40 border border-white/5 hover:border-cyan-500/20"
                        >
                            {/* Glow overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-inner">
                                    <item.icon className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkFocus;
