"use client"
import React from 'react';

function Button({
  children,
  variant = 'primary',
  className = '',
  scrollToId,
  ...props
}) {
  const variants = {
    primary: `
      bg-white text-gray-900 
      hover:bg-gray-100 
      focus:ring-white/30
      border border-gray-300/10
    `,
    secondary: `
      bg-gray-800 text-white 
      hover:bg-gray-700 
      focus:ring-gray-500/30
      border border-gray-700
    `,
    accent: `
      bg-blue-600 text-white 
      hover:bg-blue-500 
      focus:ring-blue-400/30
    `,
    ghost: `
      text-gray-300 hover:text-white 
      hover:bg-gray-800 
      focus:ring-gray-500/20
      border border-gray-700/50
    `
  };
  const handleClick = (e) => {
    if (scrollToId) {
      e.preventDefault();
      if (window.smoothScrollTo) {
        console.log('entrando al if')
        window.smoothScrollTo(scrollToId);
      } else {
        // Fallback para navegadores sin soporte
        console.log('entrando al else')
        document.getElementById(scrollToId)?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      className={`
        px-5 py-2.5 rounded-md
        font-medium text-sm
        transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
        ${variants[variant]}
        ${className}
      `}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;