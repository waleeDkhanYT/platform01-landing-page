import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Check } from "lucide-react";

import heroBg from '@/assets/feasibility-study.avif';
import LogoWhite from '@/assets/logowhite.png';
import PCAwards from '@/assets/pc-award.png';
import Award1 from '@/assets/award1.png';
import Award2 from '@/assets/award2.png';
import Award3 from '@/assets/award3.png';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type TouchedType = {
  [K in keyof FormDataType]?: boolean;
};

const HeroSection = () => {

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [touched, setTouched] = useState<TouchedType>({});
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const isEmpty = (field: keyof FormDataType) =>
    formData[field].trim() === '';


  const isFormValid =
    !isEmpty('name') &&
    !isEmpty('email') &&
    !isEmpty('phone') &&
    !isEmpty('company') &&
    !isEmpty('message');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F3F5F7]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[90%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* <div className="absolute inset-0 bg-navy/80" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 xl:container mx-auto px-2 md:px-4 lg:px-8 pb-20 lg:pt-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 xl:gap-4 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white col-span-2"
          >
            <img src={LogoWhite} alt="Logo" className='w-44 h-[75px]' />
            {/* Market Feasibility Study Services */}
            <p className="text-xs md:text-sm font-sans capitalize tracking-[0.2em] text-white mb-6">
              Our Feasibility Study Expert service has been designed for clients looking for Premium and Bespoke
              Consulting services delivered through our unique "Practitioner-Driven" approach that brings deep
              Industry Expertise with Financial Acumen to deliver High-Quality strategic insights. Through our
              feasibility study consulting services in Saudi Arabia, we deliver investment-grade insights that
              align with Vision 2030 and institutional financing requirements.
            </p>

            <ul className="text-[10px] md:text-xs font-sans capitalize tracking-[0.2em] text-white mb-6">
              <li className='flex gap-2'><Check size={20} /> 250+ Projects successfully delivered by Team Members for projects worth above SAR 100 billion</li>
              <li className='flex gap-2'><Check size={20} /> Accredited Team from Top Business Schools and with Global Professional Qualifications</li>
              <li className='flex gap-2'><Check size={20} /> Last 12 Months: Prepared SIDF feasibility studies for projects worth over SAR 2 billion</li>
              <li className='flex gap-2'><Check size={25} /> Experienced Team from Global Financial Institutions, Fortune 500 Companies, Big 4 Advisory, and other Reputable Firms</li>
              <li className='flex gap-2'><Check size={40} /> Enables financing from DFIs (SIDF, ADF, CDF, etc. included), commercial banks, NBFCs, and
                institutional investors by ensuring a bankable feasibility study that meets global standards.</li>
            </ul>

            <div className='flex flex-row gap-x-3 mb-4 lg:mb-0 items-center justify-center lg:justify-start'>
              <img src={Award1} alt='Award' className='w-12 md:w-20 lg:w-28 h-16 md:h-24 lg:h-28 rounded-md object-contain' />
              <img src={Award2} alt='Award' className='w-12 md:w-20 lg:w-28 h-16 md:h-24 lg:h-28 rounded-md object-contain' />
              <img src={Award3} alt='Award' className='w-12 md:w-20 lg:w-28 h-12 md:h-24 lg:h-28 rounded-md object-contain bg-white' />
            </div>
            {/* 
            <h1 className="font-serif font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-8">
              Building Solid Foundations for Success - Feasibility Study Strategist
            </h1> */}

            {/* <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img src={PCAwards} alt='PC Awards' className='w-20 lg:w-28 h-12 lg:h-16' />

                <span className="text-sm text-white">
                  <p>Top Strategist GCC</p>
                  <p>Industrials, Healthcare & Technology</p>
                </span>
              </div>
            </div> */}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col lg:flex-row items-center justify-between'
          >
            <div className="bg-white px-6 py-6 shadow-2xl w-full">
              <h2 className="font-serif font-bold text-3xl mb-3">
                Submit an Inquiry
              </h2>
              <hr />
              <form onSubmit={handleSubmit} className="space-y-4">
                {(
                  [
                    ['name', 'Full Name'],
                    ['email', 'Email'],
                    ['phone', 'Phone'],
                    ['company', 'Company'],
                  ] as const
                ).map(([field, label]) => (
                  <div key={field}>
                    <input
                      type="text"
                      name={field}
                      placeholder={label}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-1 text-sm py-3 border-b border-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    {touched[field] && isEmpty(field) && (
                      <p className="text-red-500 text-sm mt-1">
                        {label} is required
                      </p>
                    )}
                  </div>
                ))}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-1 text-sm py-3 border-b border-gray-300  focus:ring-2 focus:ring-primary resize-none"
                  />
                  {touched.message && isEmpty('message') && (
                    <p className="text-red-500 text-sm mt-1">
                      Message is required
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full flex justify-between items-center px-[17px] py-[12px] text-sm font-medium transition ${isFormValid
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary opacity-50 text-white cursor-not-allowed'
                    }`}
                >
                  <p>Submit an inquiry</p>
                  <ChevronRight />
                </button>
              </form>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
