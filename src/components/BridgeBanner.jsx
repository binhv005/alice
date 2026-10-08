import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const BridgeBanner = () => {
  return (
    <section className="pt-12 md:pt-14 pb-8 md:pb-10 text-white text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-xs tracking-wider">
        {/* International Side */}
        <motion.div 
          className="flex-1 text-center md:text-right"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-bold text-gray-200 tracking-luxury uppercase block mb-1 font-sans text-sm [text-wrap:balance]">
            INTERNATIONAL
          </span>
          <span className="text-stone-400 text-xs block [text-wrap:pretty]">
            Standards • Strategy • Professionalism
          </span>
        </motion.div>

        {/* Connector & Alice Logo (Larger Size without outer border) */}
        <motion.div 
          className="flex items-center space-x-4 sm:space-x-8"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArrowRight className="w-6 h-6 text-brand-gold flex-shrink-0" />
          <div className="flex items-center justify-center">
            <img 
              src="/LoGoDuAn.webp" 
              alt="ALICE & CO." 
              className="h-28 sm:h-36 md:h-44 w-auto object-contain brightness-110 hover:scale-105 transition duration-300 drop-shadow-md"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <ArrowLeft className="w-6 h-6 text-brand-gold flex-shrink-0" />
        </motion.div>

        {/* Local Side */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-bold text-gray-200 tracking-luxury uppercase block mb-1 font-sans text-sm [text-wrap:balance]">
            LOCAL
          </span>
          <span className="text-stone-400 text-xs block [text-wrap:pretty]">
            Knowledge • Relationships • Execution
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BridgeBanner;
