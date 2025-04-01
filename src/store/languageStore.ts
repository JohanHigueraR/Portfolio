// /lib/store/languageStore.ts
import { create } from 'zustand';
import { Language } from '../types/types';


interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void;
  translationKey: number; // Nuevo campo
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ 
    language: lang,
    translationKey: Math.random() 
  }),
  translationKey: 0,
}));