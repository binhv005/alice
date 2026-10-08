import React from 'react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      number: "01",
      title: "VIETNAM MARKET ENTRY",
      description: "Market research, business establishment registration, business licensing, recruitment and office sourcing.",
      image: "/AnhSanPham5.png"
    },
    {
      number: "02",
      title: "TRADE & SOURCING",
      description: "Supplier sourcing, on-site factory verification, purchasing management and quality inspection.",
      image: "/AnhSanPham6.webp"
    },
    {
      number: "03",
      title: "LOCAL REPRESENTATION",
      description: "Local representation, meetings, contract negotiations and direct project progress supervision in Vietnam.",
      image: "/AnhSanPham7.webp"
    },
    {
      number: "04",
      title: "RELOCATION & HOUSING",
      description: "Relocation advisory, apartment sourcing and inspection, lease negotiation and handover support for expats.",
      image: "/AnhSanPham8.webp"
    },
    {
      number: "05",
      title: "LOCAL ADDRESS & LOGISTICS",
      description: "Local contact address, mail and parcel receiving, storage and transportation coordination.",
      image: "/AnhSanPham9.webp"
    }
  ];

  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-10 bg-white overflow-hidden" id="services" data-nav-theme="light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold tracking-luxury text-brand-gold uppercase block mb-3 font-sans">
            OUR SERVICES
          </span>
          <h2 className="font-luxury-serif text-3xl sm:text-4xl text-brand-navyDark font-normal max-w-3xl leading-snug [text-wrap:balance]">
            Comprehensive local support for your business and life in&nbsp;Vietnam.
          </h2>
        </motion.div>

        {/* Services Grid: Row 1 (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
          {services.slice(0, 3).map((service, idx) => (
            <motion.div 
              key={service.number}
              className="flex flex-col justify-start group cursor-pointer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="overflow-hidden mb-4 h-48 sm:h-52 w-full bg-stone-200/50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-brand-gold font-mono tracking-luxury mb-1">
                  {service.number}
                </div>
                <h3 className="font-sans text-xs sm:text-sm font-bold tracking-wide uppercase text-brand-navyDark mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid: Row 2 (2 items spanning full width of 3 cards above) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
          {services.slice(3, 5).map((service, idx) => (
            <motion.div 
              key={service.number}
              className="flex flex-col justify-start group cursor-pointer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (idx + 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="overflow-hidden mb-4 h-48 sm:h-52 w-full bg-stone-200/50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-brand-gold font-mono tracking-luxury mb-1">
                  {service.number}
                </div>
                <h3 className="font-sans text-xs sm:text-sm font-bold tracking-wide uppercase text-brand-navyDark mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
