import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      title: "Starting a New Business in Saudi Arabia 2024",
      excerpt: "A comprehensive guide to navigating the regulatory landscape and market opportunities.",
      category: "Business Guide"
    },
    {
      title: "The Role of AI in Modern Feasibility Studies",
      excerpt: "How artificial intelligence is transforming the way we analyze project viability.",
      category: "Technology"
    },
    {
      title: "Vision 2030: Investment Opportunities",
      excerpt: "Exploring the strategic sectors driving Saudi Arabia's economic transformation.",
      category: "Market Analysis"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background" id="insights">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Quote className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Insights and Thought<br/>Leadership
            </h2>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-sans text-sm font-medium mt-6 lg:mt-0 hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-secondary rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <span className="text-xs text-primary font-sans font-medium uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans">{article.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
