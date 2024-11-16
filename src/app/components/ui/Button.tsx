'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', className, ...props }) => {
  const variants = {
    default: 'bg-blue-500 hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };

  return (
    <button
      className={clsx(
        'rounded px-4 py-2 transition-colors duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;