import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { SiDatacamp } from "react-icons/si";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-sm font-medium hover:opacity-80">
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-40 shadow-sm">
      <div className="container-max px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] flex items-center justify-center text-white font-bold">
            SA
          </div>
          <div className="text-lg font-semibold">Samuel App</div>
        </div>

        <nav className="flex items-center gap-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about_me">About</NavItem>
          <NavItem href="/contact_me">Contact</NavItem>
        </nav>
        <div className="flex gap-2.5 items-center">
          <a href="#contact">
            <FaLinkedin size={20} />
          </a>
          <a href="#contact">
            <SiDatacamp size={20} />
          </a>
          <a href="#contact">
            <BsSubstack size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
