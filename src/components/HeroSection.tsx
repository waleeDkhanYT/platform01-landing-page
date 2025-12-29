import { motion } from 'framer-motion';
import { useState } from 'react';
import heroBg from '@/assets/feasibility-study.avif';
import PCAwards from '@/assets/pc-award.png';
import { MdArrowForwardIos } from "react-icons/md";
import Award1 from '@/assets/award1.jpg';
import Award2 from '@/assets/award2.png';
import Award3 from '@/assets/award3.webp';
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[97%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* <div className="absolute inset-0 bg-navy/80" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 xl:container mx-auto px-4 lg:px-20 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6 xl:gap-4 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white pt-20 lg:pt-0 "
          >
            <p className="text-xs font-sans capitalize tracking-[0.2em] text-white/70 mb-6">
              Market Feasibility Study Services
            </p>

            <h1 className="font-serif font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-8">
              Building Solid Foundations for Success - Feasibility Study Strategist
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img src={PCAwards} alt='PC Awards' className='w-20 lg:w-28 h-12 lg:h-16' />
           
                <span className="text-sm text-white">
                  <p>Top Strategist GCC</p>
                  <p>Industrials, Healthcare & Technology</p>
                </span>
              </div>
            </div>
            
          </motion.div>

        
         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col lg:flex-row items-center lg:gap-x-3'
          >
           <div className='flex gap-x-3 lg:flex-col'>
              <img src={Award1} alt='Award' className='w-28 lg:w-40 h-28 lg:h-32 mb-4 lg:mb-6 rounded-md object-cover shadow-2xl' />
              <img src={Award2} alt='Award' className='w-28 lg:w-40 h-28 lg:h-32 mb-4 lg:mb-6 rounded-md object-cover shadow-2xl' />
              <img src={Award3} alt='Award' className='w-28 lg:w-40 h-28 lg:h-32 mb-4 lg:mb-6 rounded-md object-cover shadow-2xl' />
           </div>
            <div className="bg-white px-6 py-6 shadow-2xl w-full">
              <h2 className="font-serif font-bold text-3xl mb-3">
                Submit an Inquiry
              </h2>

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
                  className={`w-full flex justify-between items-center px-[17px] py-[12px] text-sm font-medium transition ${
                    isFormValid
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-primary opacity-50 text-white cursor-not-allowed'
                  }`}
                >
                  <p>Submit an inquiry</p>
                  <MdArrowForwardIos />
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
