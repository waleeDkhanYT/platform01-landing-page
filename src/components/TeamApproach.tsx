import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import TeamMemberModal from "@/components/TeamMemberModal";
import Emp1 from '@/assets/emp1.avif';
import Emp2 from '@/assets/emp2.avif';
import Emp3 from '@/assets/emp3.avif';
import Emp4 from '@/assets/emp4.avif';
import Emp5 from '@/assets/emp5.avif';

const TeamApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const teamMembers = [
    {
      name: "Mustafa Nadeem, CFA",
      role: "Managing Director",
      description: "Consulting",
      image: Emp5,

      background: "13+ years in Advisory, Private Equity, Strategy Consulting, Corporate Finance, and Equity Research",
      sectors: "Industrials, Healthcare, Technology, Education, Food & Agriculture, Real Estate, Financial Services and Private Capital",
      priorExperience: "British International Investment Plc, ValuStrat Consulting, Elixir Securities, and HULT International",
      education: "Masters in Finance with Distinction from London Business School (ranked #1 program globally) and BBA Finance from Institute of Business Administration (AACSB accredited)",
      qualifications: "Chartered Financial Analyst accredited by the CFA Institute, USA",
      email: "mustafa.nadeem@p01cglobal.com",
      phone: "+966114149349"
    },
    {
      name: "Saad Jilani",
      role: "Senior Practitioner and SME",
      description: "Energy, Industrials, & Aviation",
      image: Emp1,

      background: "Extensive experience advising clients in energy, industrials, and aviation sectors.",
      sectors: "Energy, Industrials, Aviation",
      priorExperience: "Advisory and consulting roles across regional and international projects.",
      education: "Engineering and Management background",
      qualifications: "Industry-certified professional",
      email: "saad.jilani@p01cglobal.com",
      phone: "+966114149349"
    },
    {
      name: "Shwetabh Sameer, CFA",
      role: "Senior Practitioner and SME",
      description: "Technology & Venture Capital",
      image: Emp2,

      background:
        "12+ years in Venture Capital, Investments and Corporate Finance",

      sectors:
        "Technology (Fintech, Data Science, AI, etc.) and Venture Capital",

      priorExperience:
        "Molten Ventures, Paua, Seedcamp, Octopus Ventures, and Speedinvest",

      education:
        "Masters in Finance with Distinction from London Business School (ranked #1 program globally); additional degrees in Data Science and Mechanical Engineering",

      qualifications:
        "CFA, FRM, and CIPM Charterholder",
      email: "shwetabh.sameer@p01cglobal.com",
      phone: "+966114149349"
    },
    {
      name: "Shafi Akhund, FMVA",
      role: "Senior Consultant",
      description: "Strategy & Advisory",
      image: Emp3,

      background: "Strategy and advisory professional with experience across multiple industries.",
      sectors: "Strategy, Business Advisory",
      priorExperience: "Worked with startups and enterprises on growth and transformation initiatives.",
      education: "Finance and Business background",
      qualifications: "FMVA Certified",
      email: "shafi.akhund@p01cglobal.com",
      phone: "+966114149349"
    },
    {
      name: "Mohammad Ovais, CFA",
      role: "Senior Practitioner and SME",
      description: "Infrastructure & Healthcare",
      image: Emp4,

      background: "Specialist in infrastructure and healthcare feasibility studies and investments.",
      sectors: "Infrastructure, Healthcare",
      priorExperience: "Advised public and private sector clients on large-scale projects.",
      education: "Finance and Engineering background",
      qualifications: "CFA Charterholder",
      email: "mohammad.ovais@p01cglobal.com",
      phone: "+966114149349"
    }
  ]

  return (
    <div className="xl:container mx-auto px-4 lg:px-8">
      {/* <hr className="mt-12" />
      <p className="text-[13px] pt-4 font-sans font-semibold capitalize">
        Our Feasibility Study Firm Consulting Team
      </p> */}
      <section ref={ref} className="pb-12 md:pb-20 lg:pb-24 bg-background" id="services">
        <div>
          {/* Section Header */}
          {/* <div className='flex flex-col md:flex-row justify-between md:gap-x-4 md:mb-0 mb-4'> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-2 md:mb-16"
          >

            <h2 className="font-bold text-xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
              Our Feasibility Consulting Team
            </h2>
          </motion.div>

          {/* Description */}
          {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 text-[#838C94] text-center md:text-end text-sm sm:text-base"
            >
              Our Unique "Practitioner-Driven" Approach <br /> Feasibility Study Consulting Services
            </motion.p> */}
          {/* </div> */}

          {/* Team Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(member)}
              >
                {
                  member.name === selectedMember?.name && (
                    <TeamMemberModal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                      member={selectedMember}
                    />
                  )
                }
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-[#F3F5F7] rounded-lg mb-4 overflow-hidden relative">
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  </div>
                </div> */}
                </div>

                <h3 className="text-xl md:text-2xl text-foreground leading-5 md:leading-6 mb-1 font-bold">{member.name}</h3>
                <p className="text-xs md:text-sm text-[#838C94] font-medium">{member.description ? member.description : ""}</p>
                <p className="text-xs md:text-sm text-[#838C94] font-medium mb-2">{member.role}</p>
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