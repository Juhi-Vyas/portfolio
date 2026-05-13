export default function ProjectCard({ project }) {
  return (
    <div
      className="
        bg-white/5
        border border-white/10
        rounded-3xl
        overflow-hidden
        hover:scale-[1.02]
        transition-all
        duration-300
        backdrop-blur-lg
      "
    >

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72  bg-black"
      />

      <div className="p-8">

        <span className="text-purple-400 text-sm uppercase tracking-widest">
          {project.category}
        </span>

        <h3 className="text-3xl font-bold mt-3 mb-5">
          {project.title}
        </h3>

        <p className="text-gray-300 leading-8 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-sm text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-5 flex-wrap">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  )
}