import React from 'react';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export const Clients = () => {
  const clients = [
    {
      number: "01",
      title: "INTERNATIONAL BUSINESSES & INVESTORS",
      description: "Businesses preparing to enter or currently operating in Vietnam needing reliable, discreet, and legally robust on-the-ground management.",
      image: "/AnhSanPham5.png"
    },
    {
      number: "02",
      title: "EXPATS & INTERNATIONAL FAMILIES",
      description: "Foreign professionals and families relocating to Ho Chi Minh City looking for smooth transitions, bespoke housing, and vetted living solutions.",
      image: "/AnhSanPham8.webp"
    },
    {
      number: "03",
      title: "GLOBAL EXECUTIVES",
      description: "Senior leaders and international entrepreneurs visiting Vietnam for short-term business engagements, requiring discreet executive concierge support.",
      image: "/AnhSanPham7.webp"
    }
  ];

  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-white overflow-hidden" id="clients">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading 
            eyebrow="WHO WE SUPPORT"
            title="Tailored support for international entities and individuals."
          />
        </motion.div>

        {/* Profile Cards (3 cards in 1 row on desktop/tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
          {clients.map((client, idx) => (
            <motion.div 
              key={client.number}
              className="bg-white border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 group overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top: Image */}
              <div className="w-full h-56 sm:h-64 overflow-hidden relative flex-shrink-0">
                <img 
                  src={client.image} 
                  alt={client.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-brand-navyDark/10 group-hover:bg-transparent transition duration-300"></div>
              </div>

              {/* Bottom: Text */}
              <div className="w-full p-6 sm:p-8 flex flex-col flex-1 justify-start">
                <div className="text-xs sm:text-sm font-bold text-brand-gold tracking-luxury mb-2 font-mono">
                  {client.number}
                </div>
                <h3 className="font-luxury-serif text-lg sm:text-xl font-bold tracking-wide uppercase text-brand-navyDark mb-3 group-hover:text-brand-gold transition leading-snug">
                  {client.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
