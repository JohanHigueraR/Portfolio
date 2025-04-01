import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    projectUrl: string;
    githubUrl?: string;
};

function ProjectsPreview() {
    const featuredProjects: Project[] = [
        {
            id: '1',
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce with React, Node.js and MongoDB. Includes payment gateway and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB'],
            imageUrl: '/projects/ecommerce.jpg',
            projectUrl: '/projects/ecommerce',
            githubUrl: 'https://github.com/yourusername/ecommerce'
        },
        {
            id: '2',
            title: 'Task Management App',
            description: 'Real-time task manager with drag-and-drop interface and team collaboration features.',
            tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
            imageUrl: '/projects/taskmanager.jpg',
            projectUrl: '/projects/task-manager'
        },
        {
            id: '3',
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce with React, Node.js and MongoDB. Includes payment gateway and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB'],
            imageUrl: '/projects/ecommerce.jpg',
            projectUrl: '/projects/ecommerce',
            githubUrl: 'https://github.com/yourusername/ecommerce'
        },

        // Agrega más proyectos aquí
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Some of my most significant work. Each project represents unique challenges and solutions.
                    </p>
                    <Link
                        href="/projects"
                        className="inline-block mt-6 text-primary hover:text-secondary font-medium transition-colors"
                    >
                        View All Projects →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Componente de tarjeta de proyecto
const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group relative h-full bg-surface rounded-xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
        <div className="relative h-48 overflow-hidden">
            <Image
                src={project.imageUrl}
                alt={`Captura del proyecto ${project.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/20" />
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
            <p className="text-muted mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex space-x-4">
                <Link
                    href={project.projectUrl}
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                    View Project
                </Link>
                {project.githubUrl && (
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-muted hover:text-light transition-colors"
                    >
                        GitHub
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default ProjectsPreview;