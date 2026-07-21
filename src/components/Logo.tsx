import React, { useState, useEffect } from 'react';
import logoDesktop from '../assets/logoDesktop.png';
import logoMobile from '../assets/logomobile.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  lightText?: boolean;
  isDark?: boolean;
}

export default function Logo({ className = '', iconOnly = false, size = 'md', onClick, lightText = false, isDark = false }: LogoProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dimensions = {
    sm: { icon: 'h-16 w-auto', text: 'text-lg' },
    md: { icon: 'h-20 w-auto', text: 'text-2xl' },
    lg: { icon: 'h-20 w-auto', text: 'text-4xl' },
    xl: { icon: 'h-32 w-auto', text: 'text-6xl' },
  };

  const currentSize = dimensions[size];
  const logoSrc = isMobile ? logoMobile : logoDesktop;

  return (
    <div className={`flex items-center select-none ${className}`} onClick={onClick}>
      {/* Official Zenomix Logo */}
      <img
        src={logoSrc}
        alt="Zenomix Logo"
        className={`${currentSize.icon} shrink-0 object-contain transition-transform duration-300 hover:scale-105`}
        draggable={false}
      />
    </div>
  );
}
