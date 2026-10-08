import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollPercentage((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldLight z-50 transition-all duration-100 ease-out"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ScrollProgress;
