'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useLanguageStore } from '../store/languageStore';

export default function AnimatedText({
    children,
    className = '',
    key

}: {
    children: ReactNode;
    className?: string;
    key?: string;
}) {
    const { language } = useLanguageStore()
    return (
        <div className={`${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    
                    initial={{ opacity: 0, y: 10, x: language === 'en' ? -20 : 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -10, x: language === 'en' ? 20 : -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}