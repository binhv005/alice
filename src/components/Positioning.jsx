import React from 'react';
import { Globe, Handshake, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

export const Positioning = () => {
  const pillars = [
    { icon: Globe, title: "International Standards" },
    { icon: Handshake, title: "Deep Local Relationships" },
    { icon: Crosshair, title: "On-the-Ground Execution" }
  ];

  return (
    <section className="pt-14 md:pt-16 pb-6 md:pb-8 bg-brand-cream overflow-hidden" id="who-we-are">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Tag, headline, gold accent */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold tracking-luxury text-brand-gold uppercase block mb-4 font-sans">
              WHO WE ARE
            </span>
            <h2 className="font-luxury-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#173A6D] font-normal leading-[1.15] tracking-wide">
              ONE PARTNER.<br />
              LOCAL EXPERTISE.<br />
              INTERNATIONAL STANDARDS.
            </h2>
            <div className="w-14 h-[2px] bg-brand-gold mt-6"></div>
          </motion.div>

          {/* Right: Description + 3 pillars in a row */}
          <motion.div
            className="lg:col-span-6 lg:border-l lg:border-stone-300 lg:pl-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs sm:text-sm text-[#173A6D]/85 leading-relaxed mb-8 font-normal max-w-md [text-wrap:pretty]">
              ALICE &amp; CO. provides on-the-ground support for international businesses, investors, expats and executives navigating Vietnam.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-0">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    className={`flex flex-col items-center text-center sm:items-start sm:text-left sm:px-6 ${idx === 0 ? 'sm:pl-0' : ''} ${
                      idx > 0 ? 'border-l border-stone-300' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-[#173A6D] mb-3 sm:mb-4" strokeWidth={1.1} />
                    <span className="text-[11px] sm:text-[13px] font-bold text-[#173A6D] leading-snug font-sans">
                      {pillar.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
