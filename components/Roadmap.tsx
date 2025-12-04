import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapItem } from '../types';

interface RoadmapProps {
  content: {
    badge: string;
    title: string;
    items: RoadmapItem[];
  };
}

const Roadmap: React.FC<RoadmapProps> = ({ content }) => {
  return (
    <section id="roadmap" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-voler-gold text-xs font-bold tracking-[0.2em] uppercase">{content.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-serif italic">{content.title}</h2>
        </div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-0 md:pl-0 space-y-12">
          {content.items.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isCurrent = item.status === 'current';
            
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:flex items-center group relative pl-8 md:pl-0"
              >
                 {/* Timeline Dot */}
                 <div className={`
                    absolute left-[-5px] md:left-auto md:absolute md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 z-10
                    ${isCompleted ? 'bg-voler-gold border-voler-gold' : isCurrent ? 'bg-transparent border-voler-gold animate-pulse' : 'bg-transparent border-gray-600'}
                 `}></div>

                 {/* Date (Left on Desktop) */}
                 <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0">
                    <span className={`text-sm tracking-widest font-bold ${isCurrent ? 'text-voler-gold' : 'text-gray-400'}`}>
                      {item.date}
                    </span>
                 </div>

                 {/* Content (Right on Desktop) */}
                 <div className="md:w-1/2 md:pl-12">
                    <h3 className={`text-xl font-medium ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 max-w-xs">
                      {item.description}
                    </p>
                 </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;