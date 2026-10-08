import React from 'react';

export const SectionHeading = ({ 
  eyebrow, 
  title, 
  subtitle, 
  light = false,
  align = 'left',
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className={`text-xs font-bold tracking-luxury uppercase block mb-2 font-sans ${
          light ? 'text-brand-gold' : 'text-brand-goldDark'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-luxury-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight [text-wrap:balance] ${
        light ? 'text-white' : 'text-brand-charcoal'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-xs sm:text-sm font-light leading-relaxed [text-wrap:pretty] ${
          light ? 'text-gray-300' : 'text-stone-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
