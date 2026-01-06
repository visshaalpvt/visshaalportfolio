import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:visshaalramachandran18@gmail.com',
      value: 'visshaalramachandran18@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/visshaal-ramachandran-7281b9311/',
      value: 'linkedin.com/in/visshaal-ramachandran',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/visshaalpvt',
      value: 'github.com/visshaalpvt',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="text-gradient"> Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Open to collaborations, startups, and challenging problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton variant="hero" size="lg" asChild>
              <a href="mailto:visshaalramachandran18@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </MagneticButton>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Visshaal Ramachandran. Built with precision.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
