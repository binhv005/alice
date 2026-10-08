import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
  icon
}) => {
  const baseClasses = "inline-flex items-center justify-center text-xs font-semibold tracking-luxury uppercase transition-all duration-300 font-sans cursor-pointer";
  
  const variants = {
    primary: "px-7 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark font-bold shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5",
    outline: "px-7 py-3.5 border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold bg-white/5 backdrop-blur-sm hover:-translate-y-0.5",
    outlineGold: "px-6 py-2.5 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-navyDark hover:-translate-y-0.5 shadow-sm",
    dark: "px-7 py-3.5 bg-brand-navyDark hover:bg-brand-navyCard text-white border border-brand-gold/30 hover:border-brand-gold hover:-translate-y-0.5"
  };

  const combinedClass = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick}>
        {children}
        {icon && <span className="ml-2 font-mono">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {children}
      {icon && <span className="ml-2 font-mono">{icon}</span>}
    </button>
  );
};

export default Button;
