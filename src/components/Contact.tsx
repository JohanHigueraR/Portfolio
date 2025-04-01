'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCopy, FiCheck } from 'react-icons/fi';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'higuerad321@gmail.com'; // Reemplaza con tu email real

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className=" animate-fade-in animation-delay-100 relative py-20 overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
            ¿Listo para <span className="text-primary">trabajar juntos</span>?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Siempre estoy abierto a discutir nuevos proyectos, oportunidades o simplemente charlar sobre tecnología.
          </p>
        </div>

        <div className="bg-surface/50 backdrop-blur-md rounded-xl border border-primary/10 p-8 max-w-3xl mx-auto shadow-2xl">
          {/* Email con botón de copiar */}
          <div className="flex items-center justify-between bg-dark/50 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <FiMail className="text-primary text-xl mr-3" />
              <span className="text-light font-mono">{email}</span>
            </div>
            
            <button
              onClick={copyToClipboard}
              className={`flex items-center px-3 py-2 rounded-md transition-all ${copied ? 'bg-blue-600 text-white ': 'bg-blue-700 text-white'}`}
              aria-label="Copiar email"
            >
              {copied ? (
                <>
                  <FiCheck className="mr-1" /> ¡Copiado!
                </>
              ) : (
                <>
                  <FiCopy className="mr-1" /> Copiar
                </>
              )}
            </button>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-wrap justify-center gap-4">
            <SocialLink 
              href="https://github.com/JohanHigueraR" 
              icon={<FiGithub className="text-xl" />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/johan-daniel-higuera-rodriguez-ba6593208/" 
              icon={<FiLinkedin className="text-xl" />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="https://wa.me/543202612584" 
              icon={<FaWhatsapp className="text-xl" />} 
              label="WhatsApp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente reutilizable para enlaces sociales
const SocialLink = ({ 
  href, 
  icon, 
  label, 
  isButton = false 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  isButton?: boolean;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center ${isButton ? 
      'px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/10' : 
      'px-4 py-2 hover:bg-dark/50 text-light'
    } rounded-lg transition-all group`}
  >
    <span className="mr-2 group-hover:text-primary transition-colors">
      {icon}
    </span>
    {label}
  </Link>
);

export default Contact;