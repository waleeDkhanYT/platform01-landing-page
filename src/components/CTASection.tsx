import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6">
              Ready to Discuss Your Project?
            </h2>
            
            <p className="text-muted-foreground font-sans mb-8 leading-relaxed">
              Our experts are ready to help you navigate your feasibility study requirements. 
              Get in touch for a comprehensive consultation tailored to your specific needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Call us directly</p>
                  <p className="text-foreground font-sans font-medium">+966 11 XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Email us</p>
                  <p className="text-foreground font-sans font-medium">info@platform01consulting.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Visit our office</p>
                  <p className="text-foreground font-sans font-medium">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary p-8 lg:p-10 rounded-lg"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Why Choose Platform01?</h3>
            
            <ul className="space-y-4">
              {[
                "Comprehensive market analysis and research",
                "Financial modeling and projections",
                "Risk assessment and mitigation strategies",
                "Regulatory compliance guidance",
                "Post-study implementation support"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground font-sans">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#" 
              className="inline-flex items-center justify-center w-full mt-8 bg-primary text-primary-foreground py-4 rounded-md font-sans font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Schedule Your Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
