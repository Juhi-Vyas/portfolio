import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      {/* Heading */}
      <div className="text-center mb-16">

        <p
          className="
            text-purple-400
            font-semibold
            tracking-[3px]
            uppercase
            mb-4
          "
        >
          Skills & Technologies
        </p>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-black
            mb-6
          "
        >
          My Tech Stack
        </h2>

        <p
          className="
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
            leading-8
          "
        >
          Technologies and tools I use to build modern,
          scalable, and responsive full-stack applications.
        </p>

      </div>

      {/* Skills Grid */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
          gap-6
        "
      >

        {skills.map((skill, index) => (

          <div
            key={index}
            className="
              group
              relative
              bg-gradient-to-b
              from-white/5
              to-white/[0.02]
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              flex-col
              items-center
              justify-center
              overflow-hidden
              backdrop-blur-xl
              hover:border-purple-500/40
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* Hover Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                bg-purple-500/5
                transition-all
                duration-500
              "
            ></div>

            {/* Icon Container */}
            <div
              className="
                relative
                w-20
                h-20
                rounded-2xl
                bg-white/10
                border
                border-white/20
                flex
                items-center
                justify-center
                mb-5
                group-hover:scale-110
                transition-all
                duration-500
              "
            >

              <img
                src={`/${skill.toLowerCase()}.svg`}
                alt={skill}
                className="
                  w-12
                  h-12
                  object-contain
                "
              />

            </div>

            {/* Skill Name */}
            <h3
              className="
                text-lg
                font-semibold
                text-gray-100
                text-center
                group-hover:text-purple-300
                transition-all
                duration-300
              "
            >
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}