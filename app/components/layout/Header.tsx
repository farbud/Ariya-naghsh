"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-20 w-full bg-[#0F172A]/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          آریا نقش
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            خانه
          </Link>

          <Link
            href="/services"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            خدمات
          </Link>

          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            نمونه کارها
          </Link>

          <Link
            href="/about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            درباره ما
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            تماس با ما
          </Link>
        </nav>

        {/* Desktop Button
        <button className="hidden rounded-lg bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600 md:block">
          دریافت مشاوره
        </button> */}

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden w-full bg-[#0F172A] border-t border-white/10">
          <div className="flex flex-col p-6 gap-5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              خانه
            </Link>

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              خدمات
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              نمونه کارها
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              درباره ما
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              تماس با ما
            </Link>
            {/* 
            <button className="mt-3 rounded-lg bg-blue-500 py-3 text-white">
              دریافت مشاوره
            </button> */}
          </div>
        </nav>
      )}
    </header>
  );
}
