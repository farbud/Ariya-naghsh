"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative  -mt-10 flex min-h-screen items-center w-full justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-125 blur-50"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute w-full inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(131, 129, 129, 0.112) 0%,
              rgba(68, 66, 66, 0.65) 40%,
              rgba(57, 57, 57, 0.376)) 70%,
              rgba(8, 8, 8, 0.696) 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-extrabold leading-tight text-slate-800 md:text-7xl"
        >
          چاپ و بسته‌بندی حرفه‌ای
          <span className="mt-4 block text-blue-600">
            برای برندهایی که دیده می‌شوند
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8  max-w-3xl text-lg leading-9 text-slate-700 md:text-xl"
        >
          کاغذ ساده را به هویت برند شما تبدیل می‌کنیم.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        ></motion.div>
      </div>
    </section>
  );
}
