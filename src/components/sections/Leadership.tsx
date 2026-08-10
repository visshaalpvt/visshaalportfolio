import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
    const [tilts, setTilts] = useState<{[key: number]: {x: number, y: number}}>({});

    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setTilts(prev => ({
            ...prev,
            [index]: {
                x: (y / (rect.height / 2)) * -8,
                y: (x / (rect.width / 2)) * 8
            }
        }));
    };

    const handleMouseLeave = (index: number) => {
        setTilts(prev => ({
            ...prev,
            [index]: { x: 0, y: 0 }
        }));
    };

    return (
        <section id="leadership" className="section-padding">
            <div className="container-main" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">
                        Leadership & Community
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {leadershipRoles.map((role, index) => {
                        const tilt = tilts[index] || { x: 0, y: 0 };
                        return (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1 + index * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                onMouseMove={(e) => handleMouseMove(index, e)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                style={{
                                    perspective: 1000,
                                    transformStyle: 'preserve-3d',
                                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                    transition: 'transform 0.15s ease-out',
                                }}
                                className="group p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-[#0B1022]/40 border border-white/5 hover:border-purple-500/20"
                            >
                                {/* Glow overlay on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-inner">
                                        <role.icon className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                        {role.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {role.description}
                                    </p>

                                    {/* Leadership Poster Image */}
                                    {role.image && (
                                        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-lg max-h-80 relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                                            <img
                                                src={role.image}
                                                alt={role.title}
                                                className="w-full h-full max-h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
