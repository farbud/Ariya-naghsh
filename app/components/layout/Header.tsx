"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          آریا نقش
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="text-gray-300 hover:text-white">
            خانه
          </Link>

          <Link href="/services" className="text-gray-300 hover:text-white">
            خدمات
          </Link>

          <Link href="/portfolio" className="text-gray-300 hover:text-white">
            نمونه کارها
          </Link>

          <Link href="/about" className="text-gray-300 hover:text-white">
            درباره ما
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-white">
            تماس با ما
          </Link>
        </nav>

        <button className="hidden rounded-xl bg-white px-5 py-2 text-black md:block">
          دریافت مشاوره
        </button>
      </div>
    </header>
  );
}
