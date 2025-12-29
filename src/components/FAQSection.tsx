import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Platform01 consulting services limited to start-ups? If not, who can benefit from it?",
      answer: "No, our services cater to businesses of all sizes – from startups to established corporations. We work with investors, entrepreneurs, government entities, and organizations looking to validate new projects, expand operations, or enter new markets."
    },
    {
      question: "How long does a typical feasibility study take?",
      answer: "The timeline varies based on project complexity and scope. A standard feasibility study typically takes 4-8 weeks, while more comprehensive studies for large-scale projects may require 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across multiple sectors including real estate, healthcare, hospitality, manufacturing, technology, retail, and infrastructure. Our team's diverse background allows us to adapt our methodology to any industry context."
    },
    {
      question: "Do you provide support after the feasibility study is completed?",
      answer: "Yes, we offer post-study support including implementation guidance, progress monitoring, and strategic advisory services. We believe in building long-term partnerships with our clients to ensure project success."
    },
    {
      question: "What makes Platform01 different from other consulting firms?",
      answer: "Our practitioner-driven approach sets us apart. Our team consists of professionals who have not only studied feasibility but have also implemented projects themselves. This hands-on experience provides unique insights that purely academic approaches cannot offer."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-sans">
              Find answers to common questions about our feasibility study services 
              and consulting approach.
            </p>
          </motion.div>

          {/* Right FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-border pb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left py-2"
                >
                  <span className="font-sans font-medium text-foreground">{faq.question}</span>
                  <div className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground font-sans text-sm pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
