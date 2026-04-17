"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white pt-28 pb-16"
    >
      <div className="container-max px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#fbcc82]">
              Data Scientist · Technical Writer
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Samuel Shaibu
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              I build data-driven solutions and write clear technical content
              that helps people understand, apply, and trust complex ideas.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
              My work spans data science, analytics, experimentation, technical
              writing, and educational content across Python, SQL, Excel, and
              machine learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#articles"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                View Writing
              </a>

              <a
                href="#contact"
                className="rounded-md border border-white px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
              <Image
                src="/samuel_pic.jpg"
                alt="Portrait of Samuel Shaibu"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}