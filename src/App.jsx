// App.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DataImage, { listProyek, listTools } from "./data";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#0b0b12] text-white min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0b12]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a
              href="#home"
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
            >
              My <span className="text-violet-500">Portfolio</span>
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5"
              aria-label="Toggle Menu"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </nav>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-[#11111a] border-t border-zinc-800 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg hover:text-violet-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* LEFT */}
              <div
                data-aos="fade-right"
                className="order-2 lg:order-1 text-center lg:text-left"
              >
                <div className="inline-flex mx-auto lg:mx-0 items-center gap-4 bg-zinc-800/70 border border-zinc-700 px-4 sm:px-6 py-4 rounded-2xl mb-8 max-w-full">
                  <img
                    src={DataImage.HeroImage}
                    alt="Profile"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    Driven by discipline, focused on solving real problems, and guided by rational thinking to build meaningful impact.
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                  Hi, I&apos;m{" "}
                  <span className="text-violet-500">Sofian</span>
                </h1>

                <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                  Software and robotics enthusiast focused on simulation,
                  programming, system design, and prototyping. Building
                  structured technical skills through projects, engineering
                  practice, and continuous learning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="bg-violet-700 hover:bg-violet-600 px-8 py-4 rounded-2xl font-semibold text-center transition-all duration-300"
                  >
                    Contact Me
                  </a>

                  <a
                    href="#projects"
                    className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 px-8 py-4 rounded-2xl font-semibold text-center transition-all duration-300"
                  >
                    View Projects
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div
                data-aos="fade-left"
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <img
                    src={DataImage.HeroImage}
                    alt="Hero"
                    className="w-full h-auto rounded-[2rem] object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-12"
              data-aos="fade-up"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About Me
              </h2>

              <p className="text-zinc-400 leading-relaxed text-base sm:text-lg max-w-4xl mb-12">
                I continuously improve through projects, structured learning,
                and technical experimentation. My focus is software,
                robotics systems, and solving practical engineering problems.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                <div className="bg-zinc-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-bold">
                    5<span className="text-violet-500">+</span>
                  </h3>
                  <p className="text-zinc-400 mt-2">Completed Projects</p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-6">
                  <h3 className="text-4xl font-bold">
                    1<span className="text-violet-500">+</span>
                  </h3>
                  <p className="text-zinc-400 mt-2">Years Experience</p>
                </div>
              </div>

              {/* TOOLS */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                Stack & Tools
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {listTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300"
                  >
                    <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-12 h-12 object-contain shrink-0"
                      loading="lazy"
                    />

                    <div>
                      <h4 className="font-semibold">{tool.nama}</h4>
                      <p className="text-sm text-zinc-400">{tool.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Projects
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Selected technical projects showcasing structured engineering
                and software development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {listProyek.map((proyek) => (
                <article
                  key={proyek.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      {proyek.nama}
                    </h3>

                    <p className="text-zinc-400 mb-5 leading-relaxed">
                      {proyek.desk}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proyek.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-lg text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proyek.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-violet-700 hover:bg-violet-600 py-3 rounded-2xl font-semibold"
                    >
                      View Project
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Contact Me
              </h2>

              <p className="text-zinc-400">
                Open for collaboration, technical projects, and networking.
              </p>
            </div>

            <form
              action="https://api.formsubmits.com/api/submissions/eae4ddc8-6682-4606-a65d-91ccb6362b40"
              method="POST"
              autoComplete="off"
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-violet-500"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-violet-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Message"
                  className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-violet-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-violet-700 hover:bg-violet-600 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;