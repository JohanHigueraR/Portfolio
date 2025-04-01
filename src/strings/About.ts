// /lib/strings/AboutStrings.ts
export const AboutStrings = {
    en: {
      greeting: "Hello, I'm",
      title: "Johan Higuera",
      subtitle: "FullStack Developer",
      description: "I'm a FullStack Developer with experience in React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
      cta: "Contact Me"
    },
    es: {
      greeting: "Hola, soy",
      title: "Johan Higuera",
      subtitle: "Desarrollador FullStack",
      description: "Soy Desarrollador FullStack con experiencia en React, Next.js, Node.js, Express, MongoDB y PostgreSQL.",
      cta: "Contáctame"
    }
  } as const;
  
  export type Language = keyof typeof AboutStrings;