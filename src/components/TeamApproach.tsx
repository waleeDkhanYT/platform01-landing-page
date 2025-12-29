import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import Emp1 from '@/assets/emp1.avif';
import Emp2 from '@/assets/emp2.avif';
import Emp3 from '@/assets/emp3.avif';
import Emp4 from '@/assets/emp4.avif';

const TeamApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Saad Jilani",
      role: "Senior Practitioner and SME",
      description: "Energy, Industrials, & Aviation",
      image: Emp1
    },
    {
      name: "Shwetabh Sameer, CFA",
      role: "Senior Practitioner and SME",
      description: "Technology & Venture Capital",
      image: Emp2
    },
    {
      name: "Shafi Akhund, FMVA",
      role: "Senior Consultant",
      description: "Strategy & Advisory",
      image: Emp3
    },
    {
      name: "Mohammad Ovais, CFA",
      role: "Senior Practitioner and SME",
      description: "Infrastructure & Healthcare",
      image: Emp4
    }
  ];

  return (
    <div className="xl:container mx-auto px-4 lg:px-20">
      <hr/>
    <p className="text-[13px] pt-4 font-sans font-semibold capitalize">
            Our Feasibility Study Firm Consulting Team
          </p>
          <section ref={ref} className="py-20 lg:py-28 bg-background" id="services">
      <div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
            Our Unique<br /> "Practitioner-Driven"<br /> Approach - Feasibility<br /> Study Consulting<br /> Services
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex text-[#838C94] font-sans mb-16 leading-relaxed"
        >
          <span className='pl-0 lg:pl-80 text-[13px] lg:text-[14px] tracking-wide'>Our Feasibility Study practice is based on our unique model of "Practitioner-Driven" approach that brings together Relevant Sector Experience from Global Fortune 500 Corporations and Global Financial Institutions with years of Financial Expertise of consulting in the region.</span>
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
              <div className="aspect-[3/4] bg-[#F3F5F7] rounded-lg mb-4 overflow-hidden relative">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  </div>
                </div> */}
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-1 font-bold">{member.name}</h3>
              <p className="text-sm text-[#838C94] font-sans font-medium">{member.description ? member.description : ""}</p>
              <p className="text-sm text-[#838C94] font-sans font-medium mb-2">{member.role}</p>
              <hr />
              <div className='flex justify-between'>
                <button className='pt-2'>View Bio</button>
                <ArrowRight color='#838C94' className='pt-2' size={35} />
              </div>
              {/* <p className="text-sm text-muted-foreground font-sans">{member.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default TeamApproach;
