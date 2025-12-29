import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TeamApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Ahmed Al-Rashid",
      role: "Managing Director",
      description: "20+ years in strategic consulting and feasibility analysis across MENA region."
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Research",
      description: "Expert in market analysis and data-driven feasibility assessments."
    },
    {
      name: "Omar Hassan",
      role: "Financial Director",
      description: "Specialist in financial modeling and investment viability studies."
    },
    {
      name: "Dr. Fatima Al-Saud",
      role: "Technical Advisor",
      description: "PhD in Economics with focus on Saudi Vision 2030 projects."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-[0.15em] text-muted-foreground mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
            Our Unique Practitioner-Driven Approach: Feasibility Study Consulting Services
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground font-sans max-w-3xl mb-16 leading-relaxed"
        >
          Our team combines decades of hands-on experience with cutting-edge analytical 
          methodologies to deliver feasibility studies that stand up to scrutiny and 
          drive successful project outcomes.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-secondary rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <span className="font-serif text-3xl text-muted-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-sans font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground font-sans">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamApproach;
