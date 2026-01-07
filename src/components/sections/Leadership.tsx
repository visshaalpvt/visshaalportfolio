import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Megaphone } from 'lucide-react';

const leadershipRoles = [
    {
        icon: Users,
        title: 'Vice President — Hackathon Club (SIMATS)',
        description: 'Led and coordinated hackathon initiatives within the university, contributing to event planning, team coordination, and fostering an innovation-driven culture.',
        image: '/leadership/hackathon-club-vp.jpg',
    },
    {
        icon: Megaphone,
        title: 'Marketing Team Lead — Google Developer Groups (GDG SIMATS)',
        description: 'Led marketing and outreach for developer-focused events, managing promotions, content planning, and community engagement to increase student participation.',
        image: '/leadership/gdg-simats-marketing-lead.png',
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
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Leadership & Community
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
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
                            className="group p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
                            style={{
                                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                                border: '1px solid rgba(0, 255, 255, 0.15)',
                            }}
                        >
                            {/* Glow overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
                                    <role.icon className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                    {role.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {role.description}
                                </p>

                                {/* Leadership Poster Image */}
                                {role.image && (
                                    <div className="mt-6 rounded-xl overflow-hidden border border-cyan-400/20 shadow-lg max-h-80">
                                        <img
                                            src={role.image}
                                            alt={role.title}
                                            className="w-full h-full max-h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
