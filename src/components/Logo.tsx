import React from 'react';
import zenomixIcon from '../assets/zenomix-icon.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  lightText?: boolean;
}

export default function Logo({ className = '', iconOnly = false, size = 'md', onClick, lightText = false }: LogoProps) {
  const dimensions = {
    sm: { icon: 'h-6 w-6', text: 'text-lg' },
    md: { icon: 'h-9 w-9', text: 'text-2xl' },
    lg: { icon: 'h-14 w-14', text: 'text-4xl' },
    xl: { icon: 'h-24 w-24', text: 'text-6xl' },
  };

  const currentSize = dimensions[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} onClick={onClick}>
      {/* Official Zenomix "Z" Brand Mark */}
      <img
        src={zenomixIcon}
        alt="Zenomix Logo"
        className={`${currentSize.icon} shrink-0 object-contain transition-transform duration-300 hover:scale-105`}
        draggable={false}
      />

      {!iconOnly && (
        <span className={`${currentSize.text} font-display font-bold tracking-tight flex items-center`}>
          <span className={lightText ? 'text-white' : 'text-slate-900 dark:text-white'}>Z</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 dark:from-sky-300 dark:to-blue-400">enomix</span>
        </span>
      )}
    </div>
  );
}
