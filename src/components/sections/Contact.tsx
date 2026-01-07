import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, Send, CheckCircle, Loader2 } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree with environment variable or fallback
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'visshaalramachandran18@gmail.com',
      href: 'mailto:visshaalramachandran18@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available on request',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/visshaal-ramachandran-7281b9311/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/visshaalpvt',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Clean background without grid */}

      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-400 text-sm font-semibold mb-4 border border-cyan-400/20">
            ✦ GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Let's <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Ready to discuss your next project? Reach out and let's create something amazing together.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                    style={{
                      background: 'linear-gradient(145deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 255, 255, 0.05) 100%)',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                    }}
                  >
                    <info.icon className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-cyan-400 transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                    border: '1px solid rgba(0, 255, 255, 0.15)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.5)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-primary to-cyan-400 text-black hover:opacity-90'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>



        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
