import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CtaBox = () => {
  return (
    <section className="bg-brand-navyDark pt-0 pb-14 md:pb-16 px-6 overflow-hidden" id="cta-box">
      <motion.div 
        className="max-w-5xl mx-auto border border-brand-gold/50 p-8 md:p-12 bg-brand-navyCard/60 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div className="text-xs font-semibold text-brand-gold tracking-luxury uppercase mb-2 font-sans">
            TAKE THE NEXT STEP
          </div>
          <h3 className="font-luxury-serif text-2xl sm:text-3xl text-white font-normal mb-2 [text-wrap:balance]">
            READY TO NAVIGATE VIETNAM WITH&nbsp;CONFIDENCE?
          </h3>
          <p className="text-xs text-gray-300 [text-wrap:pretty]">
            Tell us what you need. We'll help you find the right local&nbsp;solution.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark text-xs font-bold tracking-luxury uppercase transition duration-300 whitespace-nowrap shadow-lg hover:-translate-y-0.5"
          >
            LET'S TALK <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a 
            href="tel:+84334095326"
            className="text-xs text-gray-300 hover:text-brand-gold transition duration-200 flex items-center space-x-2 font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>CALL +84 33 409 5326</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBox;
