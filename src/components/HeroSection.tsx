import { motion } from 'framer-motion';
import { useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-white/70 mb-6">
              Feasibility Study Consultant
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Building Solid Foundations for Success – Feasibility Study Strategist
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs">★</span>
                </div>
                <span className="text-sm text-white/80">4.9 rated on Clutch</span>
              </div>
            </div>

            <p className="text-white/70 text-sm font-sans max-w-md">
              Trusted by over 500+ clients worldwide for comprehensive feasibility studies and strategic consulting.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg p-8 lg:p-10 shadow-2xl">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-2">
                Schedule a Meeting
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Let's discuss your project requirements
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-md text-sm font-sans placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-md text-sm font-sans placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-md text-sm font-sans placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-md text-sm font-sans placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border-0 rounded-md text-sm font-sans placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-md font-sans font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Book a Free Consultation
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting, you agree to our Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-sans tracking-widest uppercase"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
