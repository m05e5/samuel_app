import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { SiDatacamp } from "react-icons/si";
import { navLinks } from "@/app/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container-max px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] text-sm font-bold text-white">
                SS
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Samuel Shaibu
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              Data Scientist and Technical Writer focused on analytics,
              experimentation, technical education, and clear communication.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-500 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/samuel-shaibu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 transition hover:text-black"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://aaboutdata.substack.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Substack"
              className="text-gray-600 transition hover:text-black"
            >
              <BsSubstack size={18} />
            </a>
            <a
              href="https://www.datacamp.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="DataCamp"
              className="text-gray-600 transition hover:text-black"
            >
              <SiDatacamp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Samuel Shaibu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}