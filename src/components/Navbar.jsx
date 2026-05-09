export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#050816]/80
        backdrop-blur-xl
        border-b border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <a
          href="#home"
          className="
            text-2xl
            md:text-3xl
            font-extrabold
            tracking-wide
            text-purple-400
            hover:text-purple-300
            transition
          "
        >
          {"<Buddy.Dev />"}
        </a>

        {/* Nav Links */}
        <div
          className="
            hidden md:flex
            items-center
            gap-10
            text-gray-300
            font-medium
          "
        >

          <a
            href="#home"
            className="
              hover:text-purple-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
              hover:text-purple-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all
            "
          >
            About
          </a>

          <a
            href="#skills"
            className="
              hover:text-purple-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all
            "
          >
            Skills
          </a>

          <a
            href="#projects"
            className="
              hover:text-purple-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              hover:text-purple-400
              transition
              relative
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all
            "
          >
            Contact
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:flex
            items-center
            gap-2
            bg-purple-600
            hover:bg-purple-700
            px-6
            py-3
            rounded-2xl
            font-medium
            transition-all
            duration-300
            shadow-lg
            hover:scale-105
          "
        >
          Resume
        </a>

      </div>
    </nav>
  );
}