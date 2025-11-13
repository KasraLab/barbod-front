import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeading,
  iconTrailing,
  loading = false,
  fullWidth = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all duration-180 rounded-[var(--radius-md)] border';
  
  const variantStyles = {
    primary: 'bg-brand-gradient text-[color:var(--text-inverse)] border-transparent hover:opacity-90 active:opacity-80 shadow-[var(--shadow-md)]',
    secondary: 'bg-[color:var(--surface-card)] text-[color:var(--text-primary)] border-[color:var(--border-subtle)] hover:bg-[color:var(--surface-elevated)] hover:border-[color:var(--outline-focus)]',
    tertiary: 'bg-transparent text-[color:var(--brand-azure)] border-[color:var(--brand-azure)] hover:bg-[color:var(--brand-azure)] hover:bg-opacity-10',
    ghost: 'bg-transparent text-[color:var(--text-secondary)] border-transparent hover:bg-[color:var(--surface-card)] hover:text-[color:var(--text-primary)]'
  };
  
  const sizeStyles = {
    xs: 'h-6 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6',
    xl: 'h-14 px-8'
  };
  
  const disabledStyles = 'opacity-40 cursor-not-allowed';
  
  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? disabledStyles : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && iconLeading}
      {children}
      {!loading && iconTrailing}
    </motion.button>
  );
}
