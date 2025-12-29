import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground">
            Our Feasibility Study Operations has been about aligning Real Market Analysis for 
            Ventures and Projects with minimal cost and effective on all Financial 
            Viability Goals. Expert Consultancy Services are offered to fill your business 
            goals optimally with practical feasibility understanding in Saudi Arabia 
            with 15+ years of Consulting Sector experience.
          </p>

          <div className="mt-12 flex flex-wrap gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-4xl lg:text-5xl font-serif text-primary mb-2">15+</p>
              <p className="text-sm text-muted-foreground font-sans">Years of Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-4xl lg:text-5xl font-serif text-primary mb-2">500+</p>
              <p className="text-sm text-muted-foreground font-sans">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-4xl lg:text-5xl font-serif text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground font-sans">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
