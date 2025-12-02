import ProjectCard from '@/components/ProjectCard';
import { getProjectsByCategory } from '@/data/projects';

export default function AutomationPage() {
  const automationProjects = getProjectsByCategory('automation');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Automation Testing Projects
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Explore my test automation projects featuring various frameworks, tools, and approaches. 
          From UI automation to API testing, each project demonstrates best practices in modern QA automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {automationProjects.map((project, index) => (
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

      {automationProjects.length === 0 && (
        <div className="text-center py-20 animate-fade-in">
          <p className="text-slate-600 text-lg">No automation projects available yet.</p>
        </div>
      )}
    </div>
  );
}
