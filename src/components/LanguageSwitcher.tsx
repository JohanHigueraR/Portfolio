'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '../store/languageStore';

export default function LanguageSwitcher() {
  
  const [isHovered, setIsHovered] = useState(false);
    const {language, setLanguage} = useLanguageStore()


  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleLanguage}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`
          relative flex items-center justify-center
          h-12 w-24 rounded-full
          overflow-hidden
          transition-all duration-500
        `}
        aria-label={`Idioma actual: ${language.toUpperCase()}`}
        whileTap={{ scale: 0.95 }}
      >
     
        {/* Bandera inglesa */}
        <motion.div
          className={`absolute ${
            language === 'en' ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          animate={{
            x: language === 'en' ? 0 : -30,
            y: language === 'en' ? 0 : 10,
            rotate: language === 'en' ? 0 : -15,
            scale: language === 'en' ? 1 : 0.8
          }}
        >
          <svg className="w-8 h-8" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
          </svg>
        </motion.div>

        {/* Bandera española */}
        <motion.div
          className={`absolute ${
            language === 'es' ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          animate={{
            x: language === 'es' ? 0 : 30,
            y: language === 'es' ? 0 : 10,
            rotate: language === 'es' ? 0 : 15,
            scale: language === 'es' ? 1 : 0.8
          }}
        >
          <svg className="w-8 h-8" viewBox="0 0 640 480">
            <path fill="#c60b1e" d="M0 0h640v480H0z"/>
            <path fill="#ffc400" d="M0 120h640v240H0z"/>
          </svg>
        </motion.div>
      </motion.button>

      {/* Tooltip flotante */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-surface text-xs text-light rounded-full shadow-lg whitespace-nowrap"
          >
            {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            <motion.span
              className="absolute -top-1 left-1/2 w-2 h-2 bg-surface transform -translate-x-1/2 rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}