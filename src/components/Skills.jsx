import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-28">

      <div className="text-center mb-16">

        <p className="text-purple-400 font-semibold mb-3">
          Skills & Technologies
        </p>

        <h2 className="text-5xl font-bold">
          My Tech Stack
        </h2>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 backdrop-blur-lg"
          >

            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-2xl font-bold text-purple-400 mb-5">
              {skill.charAt(0)}
            </div>

            <p className="text-gray-200 text-center">
              {skill}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}