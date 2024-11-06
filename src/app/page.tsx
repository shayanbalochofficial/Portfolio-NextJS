
// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans">
      {/* Desktop Navigation */}
      <nav
        id="desktop-nav"
        className="hidden md:flex justify-between items-center p-6 shadow-md"
      >
        <div className="text-2xl font-bold">Shayan Baloch</div>
        <ul className="flex space-x-8">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Navigation */}
      <nav
        id="hamburger-nav"
        className="md:hidden flex justify-between items-center p-6 shadow-md"
      >
        <div className="text-2xl font-bold">Shayan Baloch</div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Profile Section */}
      <section
        id="profile"
        className="flex flex-col items-center text-center py-20"
      >
        <div className="section__pic-container w-64 h-64 mb-4">
          <Image
            src="/assets/Capture 1-modified.png"
            alt="Profile"
            width={256}
            height={256}
            className="rounded-full"
          />
        </div>
        <p className="text-lg">Hello, I&apos;m</p>
        <h1 className="title text-4xl font-bold">Shayan Baloch</h1>
        <p className="section__text__p2 text-2xl">Frontend Developer</p>
        <div className="flex space-x-4 mt-4">
          <button
            className="btn btn-color-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 border border-transparent hover:border-blue-500 transition duration-300"
            onClick={() => window.open("/assets/MyResume.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 transition duration-300 hover:text-white "
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact Info
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-20">
        <p className="text-lg">Get To Know More</p>
        <h1 className="title text-3xl font-bold mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
          <Image
            src="/assets/Capture 1.jpg"
            alt="About Me"
            width={275}
            height={275}
            className="rounded-lg"
          />
          <p className="text-gray-600 text-justify">
            Passionate Front End Web Developer with a solid foundation in HTML5,
            CSS, JavaScript, Typescript, and Python. Eager to leverage skills
            gained through recent training to contribute innovative solutions in
            a collaborative team environment.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="text-center py-20">
        <p className="text-lg">Explore My</p>
        <h1 className="title text-3xl font-bold mb-6">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold">Frontend Development</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>HTML - Experienced</li>
              <li>CSS - Experienced</li>
              <li>JavaScript - Basic</li>
              <li>TypeScript - Learning</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Backend Development</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>SQL - Basic</li>
              <li>React - Learning</li>
              <li>Next.js - Learning</li>
              <li>Git - Basic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center py-20">
        <p className="text-lg">Browse My Recent</p>
        <h1 className="title text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Recipe Page</h2>
            <button
              className="text-blue-500 underline mt-2"
              onClick={() => window.open("https://github.com/")}
            >
              View Code
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Age Calculator</h2>
            <button
              className="text-blue-500 underline mt-2"
              onClick={() =>
                window.open("https://shayan-age-calculator.netlify.app")
              }
            >
              Live Demo
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Project Three</h2>
            <button
              className="text-blue-500 underline mt-2"
              onClick={() =>
                window.open("https://github.com/shayanbalochofficial")
              }
            >
              View Code
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-20">
        <p className="text-lg">Get in Touch</p>
        <h1 className="title text-3xl font-bold mb-6">Contact Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-4">
            <Image src="/assets/email.png" alt="Email" width={32} height={32} />
            <Link
              href="mailto:shayanbalochofficial@gmail.com"
              className="text-gray-600"
            >
              shayanbalochofficial@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/shayanbaloch/"
              className="text-gray-600"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; 2024 Shayan Baloch. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
