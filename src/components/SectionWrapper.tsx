import React from 'react'

function SectionWrapper({ children, id, className = '' }) {
  return (
    <section id={id} className={`relative py-20 overflow-hidden group ${className}`}>
    {/* Patrón de puntos conectados */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.5)_1px,transparent_1px)]"></div>
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,transparent_19px,rgba(56,189,248,0.3)_19px,rgba(56,189,248,0.3)_20px,transparent_20px)]"></div>
      <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_bottom,transparent_19px,rgba(56,189,248,0.3)_19px,rgba(56,189,248,0.3)_20px,transparent_20px)]"></div>
    </div>

    {/* Efecto hover para interactividad */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
  )
}

export default SectionWrapper