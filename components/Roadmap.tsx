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
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-serif">{content.title}</h2>
        </div>

        <div className="relative border-l border-gray-700 ml-4 lg:ml-0 lg:pl-0 space-y-12">
          {content.items.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isCurrent = item.status === 'current';
            
            return (
              <div 
                key={index} 
                className="lg:flex items-center group relative pl-8 lg:pl-0"
              >
                 {/* Timeline Dot */}
                 <div className={`
                    absolute left-[-5px] lg:left-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-3 h-3 rounded-full border-2 z-10
                    ${isCompleted ? 'bg-voler-gold border-voler-gold' : isCurrent ? 'bg-transparent border-voler-gold animate-pulse' : 'bg-transparent border-gray-600'}
                 `}></div>

                 {/* Date (Left on Desktop) */}
                 <div className="lg:w-1/2 lg:pr-12 lg:text-right mb-2 lg:mb-0">
                    <span className={`text-sm tracking-widest font-bold ${isCurrent ? 'text-voler-gold' : 'text-gray-400'}`}>
                      {item.date}
                    </span>
                 </div>

                 {/* Content (Right on Desktop) */}
                 <div className="lg:w-1/2 lg:pl-12">
                    <h3 className={`text-xl font-medium font-sans ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 max-w-xs font-sans">
                      {item.description}
                    </p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;