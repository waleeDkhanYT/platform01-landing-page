import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      title: "Feasibility Study",
      description: "Feasibility study for fabrication and galvanization of towers and solar components"
    },
    {
      title: "Feasibility Study",
      description: "Pre-feasibility study for a chemicals plant for mining applications"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a healthcare regulatory audit services business"
    },
    {
      title: "Feasibility Study, Business Strategy",
      description: "Pre-feasibility study and business strategy for Gold Bar manufacturing business"
    },
    {
      title: "Feasibility Study",
      description: "Pre-feasibility study for a chemicals plant for mining applications"
    }
  ];

  return (
    <div className='bg-[#F3F5F7]'>
      <div className="xl:container mx-auto px-4 lg:px-[68px]">
        {/* <span>1</span> */}
        <p className="pt-4">
          <hr />
          <p className='mt-4 text-[13px] font-sans font-semibold capitalize'>Our Credentials</p>
        </p>

        <section ref={sectionRef} className="py-12 lg:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className='flex flex-col lg:flex-row'>
              <h2 className="font-serif px-0 lg:px-48 xl:px-[310px] text-start font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Decades of experience.<br />
                Billions in advisory value.
              </h2>
            </div>
            <hr />
            <div className='flex justify-start lg:justify-center text-start xl:mr-0 lg:mr-28'>
              <p className='w-9/12 lg:w-6/12 pt-6 text-[#838C94]'>
                We bring a history of performance across corporate strategy, capital structuring, and investment advisory — built on deep expertise and delivered with precision as a Feasibility Study Professional.
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded flex items-center justify-center bg-white hover:bg-foreground/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" color='#838C94' />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded flex items-center justify-center bg-white hover:bg-foreground/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5" color='#838C94' />
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
                  className="flex-none w-[280px] lg:w-[310px]"
                >
                  <h3 className="font-serif text-sm font-bold text-[#838C94] mb-4">{stat.title}</h3>
                  <hr />
                  <p className="text-lg xl:text-[22px] font-semibold">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default StatsSection;