import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-medium">
            Decades of experience.<br/>
            Billions in advisory value.
          </h2>
          <div className="flex justify-center gap-3">
            <button 
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground/5 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground/5 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Stats Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex-none w-[280px] md:w-[320px] lg:w-[300px] bg-secondary p-6 lg:p-8 rounded-lg"
              >
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 font-medium">{stat.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed font-normal">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
