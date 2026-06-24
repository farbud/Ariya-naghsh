"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "بسته‌بندی محصول",
    category: "بسته‌بندی",
  },
  {
    title: "کاتالوگ برند",
    category: "چاپ",
  },
  {
    title: "طراحی جعبه لوکس",
    category: "بسته‌بندی",
  },
  {
    title: "بروشور تبلیغاتی",
    category: "چاپ",
  },
  {
    title: "هویت بصری برند",
    category: "طراحی",
  },
  {
    title: "پوستر تبلیغاتی",
    category: "طراحی",
  },
];

const categories = ["همه", "بسته‌بندی", "چاپ", "طراحی"];

export default function Portfolio() {
  const [active, setActive] = useState("همه");

  const filtered =
    active === "همه" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold">
          نمونه‌کارهای آریا نقش
        </h2>

        <p className="mt-4 text-center text-gray-400">
          بخشی از پروژه‌های انجام شده در حوزه چاپ و طراحی
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === cat
                  ? "bg-blue-500 border-blue-500"
                  : "border-white/20 text-white hover:border-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {/* Fake image block */}
              <div className="h-40 rounded-xl bg-linear-to-tr from-blue-500/20 to-cyan-500/10" />

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-400">{item.category}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-blue-500/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
