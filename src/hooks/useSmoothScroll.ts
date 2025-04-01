'use client';

import { useEffect } from 'react';

const useSmoothScroll = () => {

  useEffect(() => {
    console.log('scroll')
    const smoothScroll = (targetId) => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // ms
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(Math.min(timeElapsed / duration, 1));
        window.scrollTo(0, startPosition + distance * run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    // Hacemos el hook disponible globalmente para usarlo en cualquier botón
    window.smoothScrollTo = smoothScroll;
    
    return () => {
      delete window.smoothScrollTo;
    };
  }, []);
};

export default useSmoothScroll; 