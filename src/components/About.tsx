"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button';
import { useLanguageStore } from '../store/languageStore';
import { AboutStrings } from '../strings/About';
import AnimatedText from './AnimatedText';

function About() {
    const { language, translationKey } = useLanguageStore()
    const strings = AboutStrings[language]
    return (
        <div className=" animate-fade-in animation-delay-100 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32 md:py-44">
            <div className='max-w-6xl w-full flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2 space-y-6'>
                    <AnimatedText>
                        <div className='text-accent text-lg font-mono'>{strings.greeting}</div>
                        <h1 className='text-light text-4xl sm:text-5xl font-bold'>{strings.title}</h1>
                        <h2 className='text-primary text-2xl sm:text-3xl font-semibold'>{strings.subtitle}</h2>
                        <p className='text-muted text-base sm:text-lg leading-relaxed'>
                            {strings.description}
                        </p>
                        <Button variant="accent" scrollToId={"contact"} >
                            {strings.cta}
                        </Button>
                    </AnimatedText>
                </div>

                {/* Imagen */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='rounded-full p-1 bg-gradient-to-r from-primary to-secondary'>
                        <div className='relative w-64 h-64 sm:w-80 sm:h-80 hover:scale-105 transition-transform duration-500'>
                            <Image
                                src="/developer.png"
                                alt="Johan Higuera - FullStack Developer"
                                fill
                                className='object-cover rounded-full border-4 border-primary shadow-lg shadow-primary/20'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About