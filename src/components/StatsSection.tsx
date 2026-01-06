import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  // Configure the Autoplay plugin options
  const autoplayOptions = {
    delay: 3000, // Increase delay time in milliseconds (e.g., 5000ms = 5 seconds)
    stopOnInteraction: false, // Optional: Autoplay will not stop if the user interacts with the carousel
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true
  }, [Autoplay(autoplayOptions)]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const stats = [
    {
      title: "Feasibility Study",
      description: "Feasibility study for a healthcare regulatory audit services business"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a multi-sport complex with international-standard facilities"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a Hot Dip Galvanizing plant with a capacity of 50,000 TPA"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for Manufacturing of Food Packaging Materials from PET and PP"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for Fabrication and Galvanization of Steel Towers, and Solar Beams, Torque Tubes & Fasteners"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a 50,000 TPA hot-dip galvanizing plant"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a Healthcare Products Manufacturing business with applications in Oncology and Critical Care"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a Ductile Iron Pipe Manufacturing greenfield project"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a Ductile Iron Pipe Manufacturing greenfield project"
    },
    {
      title: "Feasibility Study, Business Strategy",
      description: "Pre-feasibility study and business strategy for Gold Bar manufacturing business"
    },
    {
      title: "Feasibility Study, Business Strategy",
      description: "Feasibility study and strategy for a digital content creator marketplace"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for a Tertiary Care Diagnostics and Treatment Center with 6 phases"
    },
    {
      title: "Feasibility Study, Business Strategy",
      description: "Pre-feasibility study and business strategy for a gold bar manufacturing business"
    },
    {
      title: "Feasibility Study",
      description: "Pre-feasibility study for a Chemical Manufacturing Plant with applications in Mining sector"
    },
    {
      title: "Feasibility Study, Business Strategy",
      description: "Feasibility study and strategy for a niche care services center"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for scaffolding, tube mills, and formwork manufacturing"
    },
    {
      title: "Feasibility Study",
      description: "Feasibility study for Expansion of Manufacturing of Food Packaging Materials"
    }
  ];

  return (
    <div className='bg-[#F3F5F7]'>
      <div className="xl:container mx-auto px-2 md:px-4 lg:px-8">
        {/* <span>1</span> */}
        {/* <p className="pt-4">
          <hr />
          <p className='mt-4 text-[13px] font-sans font-semibold capitalize'>Our Credentials</p>
        </p> */}

        <section ref={sectionRef} className="py-8 lg:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className='text-center mx-auto items-center'>
              {/* <p className='text-sm md:text-lg lg:text-xl font-sans font-semibold capitalize text-[#838C94]'>Our Credentials</p> */}
              <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4">
                Decades of experience, Billions in advisory value
              </h2>
              {/* <div className='flex-1 flex-col'>
                <p className='text-sm md:text-lg lg:text-xl font-sans font-semibold capitalize text-center md:text-start text-[#838C94]'>Our Credentials</p>
                <h2 className="text-center md:text-start font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4">
                  Decades of experience.<br />
                  Billions in advisory value.
                </h2>
              </div>
              <div className='flex-1'>
                <p className='pt-0 lg:pt-8 text-center md:text-end text-[#838C94] text-sm md:text-base'>
                  We bring a history of performance across corporate strategy, capital structuring, and investment advisory — built on deep expertise and delivered with precision as a Feasibility Study Professional.
                </p>
              </div> */}
            </div>
            {/* <div className='flex flex-col lg:flex-row'>
              <p className='text-sm font-sans font-semibold capitalize pt-20 text-[#838C94]'>Our Credentials</p>
              <h2 className="font-serif px-0 lg:px-48 xl:px-52 text-start font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Decades of experience.<br />
                Billions in advisory value.
              </h2>
            </div>
            <hr />
            <div className='flex justify-start lg:justify-center text-start xl:mr-0 lg:mr-28'>
              <p className='w-9/12 lg:w-6/12 pt-6 text-[#838C94]'>
                We bring a history of performance across corporate strategy, capital structuring, and investment advisory — built on deep expertise and delivered with precision as a Feasibility Study Professional.
              </p>
            </div> */}
            <div className="flex justify-end gap-2">
              <button
                onClick={scrollPrev}
                className="w-9 md:w-12 h-9 md:h-12 rounded flex items-center justify-center bg-white hover:bg-foreground/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" color='#838C94' />
              </button>
              <button
                onClick={scrollNext}
                className="w-9 md:w-12 h-9 md:h-12 rounded flex items-center justify-center bg-white hover:bg-foreground/5 transition-colors"
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
                  <h3 className="text-sm md:text-base lg:text-lg xl:text-[22px] font-bold text-[#838C94] mb-2">{stat.title}</h3>
                  <hr />
                  <p className="text-sm md:text-base lg:text-lg font-semibold">{stat.description}</p>
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