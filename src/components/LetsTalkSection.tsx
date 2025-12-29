import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const LetsTalkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Let's Talk – Feasibility Report of a Project
            </h2>
            
            <p className="text-white/70 font-sans mb-8 leading-relaxed">
              Ready to take the next step? Our team is here to guide you through every aspect 
              of your feasibility study, from initial assessment to final recommendations.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-md font-sans text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:+966" 
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-md font-sans text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="font-serif text-2xl mb-4">Stay Updated</h3>
              <p className="text-white/70 font-sans text-sm mb-6">
                Subscribe to our newsletter for the latest insights on feasibility studies and market trends.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-navy rounded-md font-sans text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
