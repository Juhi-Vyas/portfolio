export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-purple-400 font-semibold mb-4 tracking-wide uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Get to know me
          </h2>

          <p className="text-gray-300 leading-9 text-lg max-w-2xl">
            I’m a B.Tech CSE graduate and full-stack developer
            passionate about building scalable and responsive web
            applications using modern technologies like React.js,
            Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>

          {/* Small Tags */}
          <div className="flex flex-wrap gap-4 mt-10">

            <span
              className="
                bg-purple-500/10
                border border-purple-500/20
                px-5 py-3
                rounded-2xl
                text-purple-300
              "
            >
              Full Stack Development
            </span>

            <span
              className="
                bg-white/5
                border border-white/10
                px-5 py-3
                rounded-2xl
                text-gray-300
              "
            >
              Responsive UI
            </span>

            <span
              className="
                bg-white/5
                border border-white/10
                px-5 py-3
                rounded-2xl
                text-gray-300
              "
            >
              REST APIs
            </span>

          </div>
        </div>

        {/* Right Side Card */}
        <div>

          <div
            className="
              bg-gradient-to-br
              from-purple-500/20
              to-black/30
              border border-white/10
              rounded-[32px]
              p-12
              backdrop-blur-xl
              shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            <p className="text-gray-400 text-lg mb-4">
              Specialization
            </p>

            <h3 className="text-6xl md:text-7xl font-bold text-purple-400 mb-6">
              MERN
            </h3>

            <p className="text-gray-300 text-xl leading-8">
              Building modern full-stack applications with
              scalable backend architecture and responsive
              frontend experiences.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}