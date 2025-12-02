import ProjectCard from '@/components/ProjectCard';
import { getProjectsByCategory } from '@/data/projects';

export default function PerformancePage() {
  const performanceProjects = getProjectsByCategory('performance');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-block p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
          </svg>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
          Performance Testing Projects
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover my performance testing projects that focus on load testing, stress testing, 
          and optimization. These projects help identify bottlenecks and ensure applications can handle scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {performanceProjects.map((project, index) => (
          <div key={project.id} className={`animate-fade-in animate-delay-${Math.min((index + 1) * 100, 500)}`}>
            <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            />
          </div>
        ))}
      </div>

      {performanceProjects.length === 0 && (
        <div className="text-center py-20 animate-fade-in">
          <p className="text-slate-600 text-lg">No performance projects available yet.</p>
        </div>
      )}
    </div>
  );
}
