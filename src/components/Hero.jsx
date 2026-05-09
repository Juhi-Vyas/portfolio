
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/20">
            Full Stack Developer
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Hi, I'm <span className="text-purple-500">Buddy</span> 👋
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl mt-6 leading-9 max-w-2xl">
            I build exceptional digital experiences using React.js,
            Node.js, MongoDB, and modern web technologies.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-2xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-7 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        <div className="flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3 shadow-[0_0_80px_rgba(168,85,247,0.4)]">
            <img
              src='/public/profile1.png'
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  )
}