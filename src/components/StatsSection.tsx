import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      title: "Leading Feasibility Experts",
      description: "Over 15 years of specialized consulting experience in comprehensive feasibility analysis for diverse industries."
    },
    {
      title: "Saudi Market Specialists",
      description: "Deep understanding of local regulations, market dynamics, and investment landscapes across Saudi Arabia."
    },
    {
      title: "The Feasibility Advantage",
      description: "Our proven methodology has helped clients make informed decisions on investments worth billions."
    },
    {
      title: "Catalyst for Possibilities",
      description: "We transform complex data into actionable insights that drive successful project outcomes."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Decades of experience.<br/>
            Billions in advisory value.
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
              <ArrowRight className="w-5 h-5 text-foreground rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors">
              <ArrowRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-background p-6 lg:p-8 rounded-lg"
            >
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">{stat.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
