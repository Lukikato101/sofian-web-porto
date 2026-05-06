import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-zinc-800 bg-[#0b0b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              My <span className="text-violet-500">Portfolio</span>
            </h1>
            <p className="text-zinc-400 mt-2 text-sm max-w-sm">
              Building with discipline, rational thinking, and practical
              problem-solving.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
            <a
              href="#home"
              className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-zinc-300 hover:text-violet-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-violet-700 transition-all duration-300"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-violet-700 transition-all duration-300"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-violet-700 transition-all duration-300"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-violet-700 transition-all duration-300"
            >
              <i className="ri-youtube-fill text-xl"></i>
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Sofian Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;