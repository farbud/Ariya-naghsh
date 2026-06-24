"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-80 max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
        >
          چاپ و بسته‌بندی حرفه‌ای
          <span className="block text-6xl text-blue-400">
            برای برندهایی که دیده می‌شوند
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          آریا نقش با سال‌ها تجربه در زمینه چاپ، بسته‌بندی و طراحی، به
          کسب‌وکارها کمک می‌کند هویت بصری حرفه‌ای‌تری داشته باشند.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="rounded-xl  bg-blue-500 px-8 py-6 font-semibold my-5 text-white transition hover:bg-blue-600">
            مشاهده خدمات
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-6 my-5 font-semibold text-white transition hover:border-white/50">
            نمونه کارها
          </button>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-155 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-0 top-0 -z-10 h-80 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 -z-10 h-80 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
    </section>
  );
}
