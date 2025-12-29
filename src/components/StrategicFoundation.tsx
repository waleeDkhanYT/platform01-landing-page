import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Phone } from 'lucide-react';

const StrategicFoundation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "15+ years of Saudi Market Insights",
    "Deep Sector Knowledge",
    "Proven Track Record",
    "Data-Driven Approach"
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-sans uppercase tracking-[0.15em] text-muted-foreground mb-4">
              OUR APPROACH
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6">
              A Strategic Foundation for Feasibility Study Saudi Arabia, Not Just an Evaluation
            </h2>

            <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
              We look at feasibility from multiple perspectives and try to give practical data to 
              help reduce risk in investment decisions. Whether it's the overall investment plan, 
              project technical setup, or financial projections, we take a multi-dimensional approach.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-sans">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-sans text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-sans text-sm font-medium hover:bg-foreground/5 transition-colors"
              >
                View Services
              </a>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-background p-6 lg:p-8 rounded-lg">
              <p className="text-3xl lg:text-4xl font-serif text-foreground mb-2">$2B+</p>
              <p className="text-sm text-muted-foreground font-sans">Investment Value Analyzed</p>
            </div>
            <div className="bg-background p-6 lg:p-8 rounded-lg">
              <p className="text-3xl lg:text-4xl font-serif text-foreground mb-2">50+</p>
              <p className="text-sm text-muted-foreground font-sans">Industries Covered</p>
            </div>
            <div className="bg-background p-6 lg:p-8 rounded-lg">
              <p className="text-3xl lg:text-4xl font-serif text-foreground mb-2">100%</p>
              <p className="text-sm text-muted-foreground font-sans">Saudi Market Focused</p>
            </div>
            <div className="bg-background p-6 lg:p-8 rounded-lg">
              <p className="text-3xl lg:text-4xl font-serif text-foreground mb-2">24/7</p>
              <p className="text-sm text-muted-foreground font-sans">Client Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicFoundation;
