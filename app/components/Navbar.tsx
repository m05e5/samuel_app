import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { SiDatacamp } from "react-icons/si";
import { navLinks } from "@/app/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="container-max flex items-center justify-between px-6 py-4">
        <Link href="/#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] text-base font-bold text-white">
            SS
          </div>
          <div className="text-lg font-semibold text-gray-900">
            Samuel Shaibu
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/samuel-shaibu/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 transition hover:text-black"
          >
            <FaLinkedin size={19} />
          </a>
          <a
            href="https://www.datacamp.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="DataCamp"
            className="text-gray-700 transition hover:text-black"
          >
            <SiDatacamp size={19} />
          </a>
          <a
            href="https://aaboutdata.substack.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Substack"
            className="text-gray-700 transition hover:text-black"
          >
            <BsSubstack size={19} />
          </a>
        </div>
      </div>
    </header>
  );
}