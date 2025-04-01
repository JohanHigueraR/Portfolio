'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efecto de scroll para navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú mobile al navegar
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`
      animate-fade-in animation-delay-100
      fixed w-full top-0 z-50
      transition-all duration-500
      ${isScrolled ? 'bg-surface/90 backdrop-blur-md py-2 shadow-xl' : 'bg-surface/80 backdrop-blur-sm py-3'}
      border-b border-primary/10
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo - Efecto neón en hover */}
          <Link href="/" className="group flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="
                text-light text-2xl font-mono font-bold
                group-hover:text-primary transition-all duration-300
                group-hover:drop-shadow-[0_0_8px_rgba(49,151,149,0.6)]
              ">
                {"<JH/>"}
              </div>
              <span className="
                hidden md:block text-light text-lg font-medium
                bg-gradient-to-r from-light to-muted bg-clip-text 
              ">
                Johan Higuera
              </span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/" text="Home" currentPath={pathname} />
            <NavLink href="/projects" text="Projects" currentPath={pathname} />



            <LanguageSwitcher></LanguageSwitcher>
            <Button variant="accent" scrollToId="contact" >
              Hire Me
            </Button>

          </div>

          {/* Botón Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                text-light hover:text-primary focus:outline-none
                transition-all duration-300
              "
            >
              <div className="space-y-2">
                <span className={`block h-0.5 w-6 bg-light transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-light transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-light transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3 bg-surface/95 backdrop-blur-lg border-t border-primary/10">
          <MobileNavLink href="/" text="Home" currentPath={pathname} />
          <MobileNavLink href="/projects" text="Projects" currentPath={pathname} />

          <button
            className="
    w-full px-3 py-3 text-left
    flex items-center space-x-2
    text-muted hover:text-light
    transition-colors duration-300
  "
          >
            <span>🌐</span>
            <span>English/Español</span>
          </button>
          <Link
            href="/contact"
            className="
              block mt-4 px-4 py-3 rounded-md
              bg-gradient-to-r from-primary to-secondary
              text-dark font-semibold text-center
              hover:shadow-lg hover:shadow-primary/30
              transition-all duration-300
            "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, text, currentPath }: { href: string; text: string; currentPath: string }) => (
  <Link href={href} className="relative group">
    <span className={`
      relative z-10 block px-3 py-2 text-sm font-medium
      transition-colors duration-300
      ${currentPath === href ? 'text-light' : 'text-muted hover:text-light'}
    `}>
      {text}
    </span>

    {/* Indicador activo mejorado */}
    {<span className={`
      absolute bottom-0 left-0 right-0 h-0.5 bg-primary
      transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
      ${currentPath === href ?
        'opacity-100 translate-y-0' :
        'opacity-0 translate-y-1 group-hover:opacity-50 group-hover:translate-y-0'
      }
      ${currentPath === href ? 'before:opacity-100' : 'before:opacity-0'}
    `} />}
  </Link>
);

// Componente MobileNavLink mejorado (reemplaza el actual)
const MobileNavLink = ({ href, text, currentPath }: { href: string; text: string; currentPath: string }) => (
  <Link href={href} className="relative block">
    <span className={`
      relative z-10 block px-3 py-3 text-base font-medium
      transition-all duration-300
      ${currentPath === href ?
        'text-primary pl-5' :
        'text-muted hover:text-light hover:pl-5'
      }
    `}>
      {text}
    </span>

    {/* Indicador mobile con efecto de bola */}
    <span className={`
      absolute left-0 top-1/2 h-2 w-2 bg-primary rounded-full
      transform -translate-y-1/2
      transition-all duration-300
      ${currentPath === href ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
    `} />
  </Link>
);

export default NavBar;