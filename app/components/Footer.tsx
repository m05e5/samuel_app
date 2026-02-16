import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#fbbb53] to-[#fbcc82] flex items-center justify-center text-white font-bold">
            SA
          </div>
          <span className="text-lg font-semibold text-gray-800">Samuel App</span>
        </div>



        <div className="flex gap-6 text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#2596be]">Home</Link>
          <Link href="/about_me" className="hover:text-[#2596be]">About</Link>
          <Link href="/contact_me" className="hover:text-[#2596be]">Contact</Link>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} The Business Analysis Circle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
