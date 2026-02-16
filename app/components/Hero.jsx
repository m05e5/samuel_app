"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation once the component mounts
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="flex items-center justify-center gap-12 px-16 py-24 bg-black text-white min-h-screen">

      {/* LEFT section */}
      <div
        className={`transform transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
        `}
      >
        <div className="relative w-96 h-[500px] overflow-hidden rounded-xl">
          {/* Image */}
          <Image
            src="/samuel_pic.jpg"
            alt="Illustration"
            width={500}
            height={500}
            className="object-contain"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 
                   bg-linear-to-b 
                   from-transparent 
                   to-black"
          />
        </div>

      </div>

      {/* RIGHT section */}
      <div
        className={`max-w-xl transform transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}
        `}
      >
        <h1 className="text-6xl font-bold mb-6">Who am I?</h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          I’m Flo, a UX/UI designer based in Italy. I have 10 years experience in
          user interfaces and product design. I can help you build innovative
          digital products from UX research to UI design and prototyping.
        </p>

        <button className="border-2 cursor-pointer border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
          Learn more
        </button>
      </div>
    </section>
  );
}
