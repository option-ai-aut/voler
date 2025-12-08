import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { ProductSpec } from '../types';

interface SpecsSectionProps {
  content: {
    badge: string;
    title: string;
    detailView: string;
    items: ProductSpec[];
  };
}

const SpecCard: React.FC<{ spec: ProductSpec, index: number }> = ({ spec, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.06] transition-all duration-500 group shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
  >
    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
      <h3 className="text-2xl font-sans font-medium text-white">{spec.category}</h3>
      <span className="text-voler-gold font-sans text-lg opacity-60">0{index + 1}</span>
    </div>
    
    {/* Clean Grid Layout for Specs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
      {spec.details.map((detail, i) => (
        <div key={i} className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.25em] text-voler-gold mb-2 opacity-80">{detail.label}</span>
          <span className="text-base font-medium text-white leading-tight">{detail.value}</span>
          {detail.description && (
            <span className="text-xs text-gray-400 font-light mt-1 leading-relaxed border-l border-white/10 pl-2 ml-[-8px] mt-2 block">
                {detail.description}
            </span>
          )}
        </div>
      ))}
      </div>
  </motion.div>
);

const SpecsSection: React.FC<SpecsSectionProps> = ({ content }) => {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ transform: 'scale(1)', transformOrigin: 'center center' });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      
      setZoomStyle({
        transform: 'scale(2)', // Zoom level
        transformOrigin: `${x}% ${y}%`
      });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setZoomStyle({ transform: 'scale(1)', transformOrigin: 'center center' });
  };

  return (
    <section id="specs" className="py-16 md:py-24 lg:py-32 relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-white/5 pb-8">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <span className="inline-block px-3 py-1 border border-voler-gold/20 rounded-full text-[10px] font-bold tracking-[0.2em] text-voler-gold uppercase mb-4 bg-voler-gold/5">
                {content.badge}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white">{content.title}</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Visual Side (Image) - Model Picture Here */}
           <div className="lg:col-span-5 relative order-1 lg:order-none mb-12 lg:mb-0">
              <div className="sticky top-32 space-y-8">
                  
                  {/* Model Image - NEW PLACE */}
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                     <img 
                      src={IMAGES.HERO_MODEL} 
                      alt="Voler Model" 
                      className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Detail Zoom Image */}
                  <div 
                    ref={imageRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="aspect-[3/4] rounded-2xl overflow-hidden bg-voler-dark relative border border-white/10 shadow-2xl shadow-black/60 cursor-crosshair group hidden lg:block"
                  >
                    <img 
                      src={IMAGES.PRODUCT_DETAIL} 
                      alt="Voler Mock Neck Tee Detail" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform"
                      style={zoomStyle}
                    />
                    
                    {/* Minimal Label - Fades out on hover */}
                    <div className={`absolute top-6 left-6 z-20 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
                         <p className="text-white font-sans text-xl drop-shadow-lg">{content.detailView}</p>
                    </div>
                  </div>
              </div>
           </div>

           {/* Specs Grid */}
           <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-none">
              {content.items.map((spec, idx) => (
                <SpecCard key={idx} spec={spec} index={idx} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;