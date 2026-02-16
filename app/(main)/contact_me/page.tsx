"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Clock,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function page() {
  return (
    <section>
        <Navbar />
      <div className="flex items-center justify-center gap-12 px-16 py-24 bg-black text-white min-h-[400px]">
        <div className={`max-w-xl`}>
          <h1 className="text-6xl font-bold mb-6">Who am I?</h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I’m Flo, a UX/UI designer based in Italy. I have 10 years experience
            in user interfaces and product design. I can help you build
            innovative digital products from UX research to UI design and
            prototyping.
          </p>

          <button className="border-2 cursor-pointer border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition">
            Learn more
          </button>
        </div>
      </div>
      <div className="bg-white py-24">
        {/* Card */}
        <div className="flex flex-col justify-between md:flex-row rounded-xl overflow-hidden shadow-2xl bg-white mx-auto  max-w-[1000px]">
          
          {/* LEFT – FORM */}
          <div className="w-full md:w-6/12 p-10">
            <h2 className="text-2xl font-semibold mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt.
            </p>

            <form className="space-y-6">
              {/* Name + Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1
                               focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm text-gray-600">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1
                               focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 resize-none
                             focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white
                           px-8 py-3 rounded-md text-sm font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT – INFO */}
          <div className="relative w-full md:w-5/12 text-white">
            {/* Background image */}
            <Image
              src="/samuel_pic2.jpg"
              alt="City background"
              fill
              className="object-cover"
            />

            {/* Dark transparent overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-300 text-sm mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <ul className="space-y-4 text-sm text-gray-200">
                  <li className="flex items-center gap-3">
                    <MapPin size={18} />
                    4b Long Street, Miami, USA
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} />
                    +3230-45-45-67
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} />
                    greendream@mail.com
                  </li>
                </ul>
              </div>

              {/* Social icons */}
              <div className="flex gap-4 mt-10 text-gray-300">
                <Facebook className="hover:text-white cursor-pointer" />
                <Twitter className="hover:text-white cursor-pointer" />
                <Instagram className="hover:text-white cursor-pointer" />
                <Globe className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

        </div>
    </div>
    </section>
  );
}
