export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-28">
      <div className="text-center mb-16">
        <p className="text-purple-400 font-semibold mb-3 tracking-wide uppercase">
          Contact Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto">
          Interested in collaborating, freelance work, or full-time
          opportunities? Feel free to connect with me.
        </p>
      </div>

      <div
        className="
          max-w-4xl
          mx-auto
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-8 md:p-12
          backdrop-blur-lg
          shadow-[0_0_40px_rgba(168,85,247,0.15)]
        "
      >
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=juhi2781@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl transition-all duration-300 font-medium"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Juhi-Vyas"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/juhi-vyas-818a43284/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/8dQ15ewSle/ "
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            Leetcode
          </a>
        </div>
      </div>
    </section>
  );
}
