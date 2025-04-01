import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Desarrollador FullStack",
      company: "Nombre de la Empresa",
      period: "Feb 2023 - Presente",
      description: "Desarrollo y mantenimiento de aplicaciones web usando React, Node.js y bases de datos SQL/NoSQL. Implementación de features críticas y optimización de performance.",
      skills: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AWS"]
    },
    // Puedes agregar proyectos personales como experiencia relevante
    {
      id: 2,
      role: "Proyectos Personales",
      company: "Autónomo",
      period: "2021 - Presente",
      description: "Desarrollo de aplicaciones completas para resolver problemas específicos y aprender nuevas tecnologías.",
      skills: ["Next.js", "Tailwind CSS", "Firebase", "Python"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
            Mi <span className="text-primary">Trayectoria</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Cada línea de código cuenta una historia de crecimiento y solución de problemas.
          </p>
        </div>

        <div className="relative  ">
          {/* Línea de tiempo decorativa */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Punto de timeline */}
                <div className="hidden md:block absolute left-1/2 top-12 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>
                
                <div className={`md:w-5/12 p-6 rounded-xl bg-surface border border-primary/10 shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-light">{exp.role}</h3>
                    {index === 0 && (
                      <span className="ml-3 px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        Experiencia Actual
                      </span>
                    )}
                  </div>
                  <h4 className="text-secondary text-lg mb-1">{exp.company}</h4>
                  <p className="text-muted text-sm mb-4">{exp.period}</p>
                  <p className="text-muted mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de "skills" para dar más cuerpo */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-light mb-6">
            <span className="text-primary">Tecnologías</span> que domino
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 
              'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 
              'Tailwind CSS', 'Git', 'AWS', 'Docker'
            ].map((tech) => (
                <span 
                key={tech} 
                className="px-4 py-2 bg-surface text-light rounded-full border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;