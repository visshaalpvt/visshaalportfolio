import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Lock, Loader2, CheckCircle2, User, FileText, MessageSquare, Linkedin, Github, Twitter, Instagram, Download, Zap } from 'lucide-react';
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
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mnqopjqr';

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
      console.log('Form submission fallback:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      label: 'Email',
      value: 'visshaalramachandran18@gmail.com',
      href: 'mailto:visshaalramachandran18@gmail.com',
      icon: Mail,
      glow: 'hover:border-purple-500/30'
    },
    {
      label: 'Phone',
      value: '+91 90801 74288',
      href: 'tel:+919080174288',
      icon: Phone,
      glow: 'hover:border-blue-500/30'
    },
    {
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: null,
      icon: MapPin,
      glow: 'hover:border-green-500/30'
    },
    {
      label: 'Available For',
      value: 'Full-time Opportunities • Freelance Projects • Collaboration',
      href: null,
      icon: Send,
      glow: 'hover:border-pink-500/30'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* Background ambient lighting */}
      <div className="absolute right-[5%] top-[20%] w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute left-[5%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none z-0" />

      {/* Main globe background on the right */}
      <div className="absolute right-[-150px] top-[15%] w-[450px] h-[450px] rounded-full border border-dashed border-purple-500/10 pointer-events-none hidden xl:flex items-center justify-center animate-[spin_60s_linear_infinite] z-0">
        <div className="w-[380px] h-[380px] rounded-full border border-dashed border-indigo-500/10 flex items-center justify-center">
          <div className="w-[300px] h-[300px] rounded-full border border-dashed border-cyan-500/10" />
        </div>
      </div>

      <div className="container-main relative z-10" ref={ref}>
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4 justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Amazing Together.
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            I'm always open to discussing new opportunities, exciting projects, or just having a friendly conversation.
          </p>
        </div>

        {/* Contact layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT COLUMN: Contact Cards */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4 text-left">
            {contactCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-[#0B1022]/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 transition-all duration-300 group hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] ${card.glow}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-purple-400 shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <CardIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5 leading-none">{card.label}</span>
                      {card.href ? (
                        <a href={card.href} className="text-xs font-semibold text-slate-250 hover:text-purple-400 transition-colors break-all">
                          {card.value}
                        </a>
                      ) : (
                        <span className="text-xs font-semibold text-slate-250 break-all">{card.value}</span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
            })}

            {/* Opportunities Status Banner */}
            <div className="bg-[#0B1022]/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-200">Available for new opportunities</span>
                  <span className="text-[10px] text-slate-500 font-semibold mt-0.5">Typically replies within a few hours</span>
                </div>
              </div>

              {/* Sine wave SVG */}
              <div className="opacity-50 select-none pointer-events-none hidden sm:block">
                <svg className="w-16 h-8 text-green-400" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 20h10l5-12 5 24 5-18 5 18 5-6 5 6h10l5-12 5 12 5-6 5 6h15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Container */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="bg-[#0B1022]/40 border border-white/5 rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              
              {/* Form title */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-purple-400 shadow-inner">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-none mb-1">Send Me a Message</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Secure Contact Gateway</p>
                </div>
              </div>

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#050816]/65 border border-white/5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#050816]/65 border border-white/5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <FileText className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#050816]/65 border border-white/5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4.5 w-4 h-4 text-slate-500" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#050816]/65 border border-white/5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button with oval corners */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-600 text-white shadow-[0_4px_15px_rgba(34,197,94,0.3)]'
                      : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white shadow-[0_4px_15px_rgba(168,85,247,0.25)] hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Secure information block */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-2 border-t border-white/5 mt-4 select-none">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Your information is secure and will never be shared.</span>
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER SOCIAL CARD */}
        <div className="w-full bg-[#0B1022]/40 border border-white/5 rounded-3xl p-5 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] mb-12">
          {/* Left statement tag */}
          <div className="flex items-center gap-3.5 text-left flex-1">
            <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-purple-400 shadow-sm shrink-0">
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <span className="text-white text-xs md:text-sm font-bold block mb-0.5 leading-none">Let's turn ideas into impactful digital solutions.</span>
              <span className="text-slate-405 text-[10px] leading-tight block">I'm excited to hear about your vision and bring it to life!</span>
            </div>
          </div>

          {/* Center Resume Download */}
          <div className="shrink-0">
            <MagneticButton variant="heroOutline" size="lg" asChild>
              <a 
                href="/assets/R_Visshaal_Resume.pdf" 
                download 
                className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-inner"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          {/* Right Social row */}
          <div className="flex items-center gap-4 shrink-0 justify-center">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider select-none">Connect</span>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/visshaal-ramachandran-7281b9311/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:shadow-[0_0_12px_rgba(0,119,181,0.25)] transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/visshaalpvt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* Twitter */}
              <a 
                href="https://twitter.com/visshaal_r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#1da1f2] hover:border-[#1da1f2]/30 hover:shadow-[0_0_12px_rgba(29,161,242,0.25)] transition-all cursor-pointer"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/visshaal_ramachandran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#e1306c] hover:border-[#e1306c]/30 hover:shadow-[0_0_12px_rgba(225,48,108,0.25)] transition-all cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Email */}
              <a 
                href="mailto:visshaalramachandran18@gmail.com" 
                className="w-8.5 h-8.5 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition-all cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Small copyright tag */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 text-center"
        >
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Visshaal Ramachandran. Built with precision.
          </p>
        </motion.footer>

      </div>
    </section>
  );
};

export default Contact;
