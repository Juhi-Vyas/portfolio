import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-28">

      <div className="text-center mb-16">

        <p className="text-purple-400 font-semibold mb-3">
          Featured Projects
        </p>

        <h2 className="text-5xl font-bold">
          Some Things I Built
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </section>
  )
}