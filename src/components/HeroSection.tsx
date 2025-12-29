import { motion } from 'framer-motion';
import { useState } from 'react';
import heroBg from '@/assets/feasibility-study.avif';
import PCAwards from '@/assets/pc-award.png';

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* <div className="absolute inset-0 bg-navy/80" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 xl:container mx-auto px-4 lg:px-20 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white pt-20 lg:pt-0 col-span-2"
          >
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/70 mb-6">
              Market Feasibility Study Services
            </p>

            <h1 className="font-serif font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-8">
              Building Solid Foundations for Success - Feasibility Study Strategist
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img src={PCAwards} alt='PC Awards' className='w-20 lg:w-28 h-12 lg:h-16' />
                {/* <div className="flex items-center justify-center">
                </div> */}
                <span className="text-sm text-white">
                  <p>Top Strategist GCC</p>
                  <p>Industrials, Healthcare & Technology</p>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg px-6 py-4 lg:px-8 lg:py-6 shadow-2xl">
              <h2 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-2">
                Submit an Inquiry
              </h2>
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
                  Submit an Inquiry
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs font-sans tracking-widest uppercase"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
