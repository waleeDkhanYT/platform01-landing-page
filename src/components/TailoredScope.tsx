import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const TailoredScope = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { title: "Full Analysis of the Investment", description: "Comprehensive review of all investment aspects" },
    { title: "Financial Profitability Modeling", description: "Detailed financial projections and scenarios" },
    { title: "Market Landscape with Benchmarks", description: "Competitive analysis and market positioning" },
    { title: "Business Model Mapping", description: "Strategic business model development" },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6">
              Tailored Scope for Optimal Value – Feasibility Study Company
            </h2>
            
            <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
              Every project is unique, and our feasibility studies are customized to address 
              your specific requirements, industry context, and strategic objectives.
            </p>
          </motion.div>

          {/* Right - Service Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background p-6 rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="font-serif text-2xl text-foreground mb-6">Reach Out for a Free Call</h3>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-md font-sans font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Schedule Meeting
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TailoredScope;
