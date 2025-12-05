import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'dark', 
  hoverEffect = false,
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden backdrop-blur-2xl rounded-[32px] border";
  const variantStyles = variant === 'dark' 
    ? "bg-white/5 border-white/10 shadow-2xl shadow-black/50" 
    : "bg-white/10 border-white/20 shadow-xl";
  
  const hoverStyles = hoverEffect ? "hover:bg-white/10 transition-colors duration-300" : "";

  return (
    <motion.div 
      className={`${baseStyles} ${variantStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {/* Glossy sheen reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Inner Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};