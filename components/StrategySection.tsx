import React from 'react';
import { motion } from 'framer-motion';

type StrategyData = {
  title: string;
  story: {
    title: string;
    text: string;
  };
  goals: {
    title: string;
    short: string;
    mid: string;
    long: string;
  };
  audience: {
    title: string;
    description: string;
    needs: string;
    emotions: string;
  };
  positioning: {
    title: string;
    usp: string;
  };
  products: {
    title: string;
    current: string;
    pricing: string;
    futureColors: string[];
  };
  marketing: {
    title: string;
    channels: string;
    partners: string;
  };
  aiTech: {
    title: string;
    description: string;
    features: string[];
  };
};

interface StrategySectionProps {
  content: StrategyData;
}

const StrategySection: React.FC<StrategySectionProps> = ({ content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-sans tracking-widest text-gray-400 mb-6 uppercase">
            Internal Brief
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            {content.title}
          </h2>
          <div className="h-1 w-24 bg-white/20 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Origin Story - Full Width on Mobile/Tablet, or Span 2 on Large? */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm lg:col-span-1">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.story.title}</h3>
            <p className="text-lg text-gray-200 font-sans italic leading-relaxed">
              "{content.story.text}"
            </p>
          </motion.div>

          {/* AI Advantage - Special Highlight */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-8 rounded-xl backdrop-blur-sm lg:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-sans text-white mb-2">{content.aiTech.title}</h3>
            <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 text-[10px] tracking-wider uppercase rounded mb-6 border border-blue-500/30">Competitive Edge</span>
            
            <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1">
                  <p className="text-gray-200 font-sans leading-relaxed mb-4">
                    {content.aiTech.description}
                  </p>
               </div>
               <div className="flex-1">
                  <ul className="space-y-3">
                    {content.aiTech.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                         <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                         <span className="text-sm text-gray-300 font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm lg:col-span-2">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.goals.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">Short Term</span>
                <span className="text-gray-200 font-sans font-light">{content.goals.short}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">Mid Term</span>
                <span className="text-gray-200 font-sans font-light">{content.goals.mid}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-2">Long Term</span>
                <span className="text-gray-200 font-sans font-light">{content.goals.long}</span>
              </div>
            </div>
          </motion.div>

          {/* Audience Card */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.audience.title}</h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Target</span>
                <p className="text-gray-200 font-sans font-light">{content.audience.description}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Needs</span>
                <p className="text-gray-200 font-sans font-light">{content.audience.needs}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Emotions</span>
                <p className="text-gray-200 font-sans font-light italic">"{content.audience.emotions}"</p>
              </div>
            </div>
          </motion.div>

          {/* Positioning */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm lg:col-span-2">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.positioning.title}</h3>
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1">
                 <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2">Unique Selling Proposition</span>
                 <p className="text-lg text-gray-200 font-sans leading-relaxed">
                   {content.positioning.usp}
                 </p>
               </div>
            </div>
          </motion.div>

           {/* Products & Pricing */}
           <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.products.title}</h3>
            <div className="space-y-6">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Core Product</span>
                <p className="text-gray-200 font-sans font-light">{content.products.current}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Price Point</span>
                <p className="text-xl text-white font-sans">{content.products.pricing}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2">Future Palette</span>
                <div className="flex flex-wrap gap-2">
                  {content.products.futureColors.map((color, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-sans">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Marketing */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm lg:col-span-2">
            <h3 className="text-xl font-sans text-white mb-6 border-b border-white/10 pb-4">{content.marketing.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Channels</span>
                <p className="text-gray-200 font-sans font-light">{content.marketing.channels}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Partnerships</span>
                <p className="text-gray-200 font-sans font-light">{content.marketing.partners}</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;
