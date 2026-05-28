import React from 'react';
import logoImg from '../../assets/logo.png';

interface BrandLogoProps {
  className?: string;
  height?: number | string;
}

export default function BrandLogo({ className = '', height = 48 }: BrandLogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="Northin Hotel" 
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      className={`object-contain ${className}`}
    />
  );
}
