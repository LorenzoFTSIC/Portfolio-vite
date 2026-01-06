import { useState, useMemo } from 'react';
import "../../data/projects.json"
import projects from "../../data/projects.json";
import type { Project } from "../../types/Projects.tsx"


const ProjectShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('');

  // get all unique technologies used from projects
  const allTechnologies = useMemo<string[]>(() => {
    const techSet = new Set<string>();
    projects.forEach((project: Project) => {
      project.technologies.forEach((tech: string) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // filter displayed projects based off search and filters
  const filteredProjects = useMemo<Project[]>(() => {
    return projects.filter((project: Project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = selectedTech === '' || project.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    })
    .sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });
  }, [searchTerm, selectedTech]);

  return (
    <div className="min-h-screen p-8" style={{ paddingLeft: '15vw', paddingRight: '15vw' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="bubble bubbleTop border-4 textStroke" style={{ backgroundColor: '#14171c', borderColor: '#344d6c', color: '#cccccc' }}>
            <h1 className="textStroke">My Projects</h1>
          </div>
        </div>

        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search projects by title..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-4 outline-none shadow-md focus:shadow-lg transition-shadow textStroke"
              style={{ 
                backgroundColor: '#14171c', 
                borderColor: '#344d6c', 
                borderRadius: '15px',
                color: '#cccccc'
              }}
            />
          </div>

          <div className="relative md:w-64">
            <select
              value={selectedTech}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTech(e.target.value)}
              className="w-full px-4 py-3 border-4 outline-none appearance-none cursor-pointer shadow-md focus:shadow-lg transition-shadow textStroke"
              style={{ 
                backgroundColor: '#14171c', 
                borderColor: '#344d6c', 
                borderRadius: '15px',
                color: '#cccccc'
              }}
            >
              <option value="">All Technologies</option>
              {allTechnologies.map((tech: string) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 font-medium textStroke" style={{ color: '#cccccc' }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bubble border-4 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ backgroundColor: '#14171c', borderColor: '#344d6c' }}
              >
                {/* project image */}
                <div className="h-48 overflow-hidden bg-gray-700 border-b-4" style={{ borderColor: '#344d6c' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* project content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold textStroke" style={{ color: '#cccccc' }}>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="border-2 text-xs px-3 py-1 font-bold" style={{ 
                        borderColor: '#344d6c', 
                        backgroundColor: '#344d6c',
                        color: '#cccccc',
                        borderRadius: '15px'
                      }}>
                        ★
                      </span>
                    )}
                  </div>

                  <p className="text-sm mb-4" style={{ color: '#cccccc' }}>
                    {project.description}
                  </p>

                  {/* project technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="border-2 text-xs px-2 py-1 font-medium"
                        style={{ 
                          borderColor: '#344d6c', 
                          backgroundColor: '#1a1d24',
                          color: '#cccccc',
                          borderRadius: '8px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 font-medium" style={{ color: '#cccccc' }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* project links */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 border-2 px-3 py-2 text-sm font-bold transition-all hover:opacity-80"
                        style={{ 
                          borderColor: '#344d6c', 
                          backgroundColor: '#14171c',
                          color: '#cccccc',
                          borderRadius: '8px'
                        }}
                      >
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 border-2 px-3 py-2 text-sm font-bold transition-all hover:opacity-80"
                        style={{ 
                          borderColor: '#344d6c', 
                          backgroundColor: '#14171c',
                          color: '#cccccc',
                          borderRadius: '8px'
                        }}
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bubble border-4 p-8 inline-block shadow-lg" style={{ backgroundColor: '#14171c', borderColor: '#344d6c' }}>
              <p className="text-lg font-bold mb-4 textStroke" style={{ color: '#cccccc' }}>
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTech('');
                }}
                className="border-2 px-6 py-2 font-bold transition-all hover:opacity-80"
                style={{ 
                  borderColor: '#344d6c', 
                  backgroundColor: '#14171c',
                  color: '#cccccc',
                  borderRadius: '8px'
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;