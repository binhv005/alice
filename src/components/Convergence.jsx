import React from 'react';
import { Scale, Briefcase, Package, Languages, Network, UserCheck, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const Convergence = () => {
  const nodes = [
    { icon: Scale, label: "Lawyer", desc: "Legal guidance on licensing, contracts and compliance in Vietnam." },
    { icon: Briefcase, label: "Consultant", desc: "Market entry strategy and practical business advisory." },
    { icon: Package, label: "Sourcing Agency", desc: "Supplier search, factory checks and quality inspection." },
    { icon: Languages, label: "Translator", desc: "Clear communication across languages in every meeting." },
    { icon: Network, label: "Coordinator", desc: "One point of contact to keep every workstream on track." },
    { icon: UserCheck, label: "Local Representative", desc: "On-site presence for meetings, negotiations and supervision." },
    { icon: User, label: "Personal Assistant", desc: "Everyday support for life and logistics in Vietnam." },
  ];

  return (
    <section className="pt-16 md:pt-20 pb-4 md:pb-6 bg-brand-cream overflow-hidden" id="synergy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          className="mb-12 text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold tracking-luxury text-brand-gold uppercase block mb-3 font-sans">
            HOW WE WORK
          </span>
          <h2 className="font-luxury-serif text-3xl sm:text-4xl lg:text-5xl text-[#173A6D] font-medium tracking-wide leading-tight">
            One Trusted <span className="italic">Local Partner.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-12">

          {/* Left: Image (30% width) */}
          <motion.div
            className="overflow-hidden min-h-[320px] lg:min-h-[460px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/AnhSanPham8.webp"
              alt="One trusted local partner"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Provider list */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium text-stone-500 block mb-5 font-sans">
              Instead of coordinating:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-stone-200/70">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E4EAF3] text-brand-navyDark flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-brand-navyDark mb-1">{node.label}</h3>
                      <p className="text-xs text-stone-500 leading-relaxed [text-wrap:pretty]">{node.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Convergence;
