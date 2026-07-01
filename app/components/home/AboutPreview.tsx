"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold leading-tight">چرا آریا نقش؟</h2>

          <p className="mt-6 text-gray-800 leading-relaxed">
            آریا نقش با بیش از دو دهه تجربه در صنعت چاپ و بسته‌بندی، همواره تلاش
            کرده ترکیبی از کیفیت، دقت و خلاقیت را ارائه دهد. هدف ما تبدیل
            ایده‌های شما به محصولی ماندگار و حرفه‌ای است.
          </p>

          <ul className="mt-8 space-y-4 text-gray-800">
            <li>✔ استفاده از دستگاه‌های مدرن چاپ</li>
            <li>✔ تیم طراحی حرفه‌ای</li>
            <li>✔ تحویل سریع و دقیق</li>
            <li>✔ کیفیت تضمین‌شده</li>
          </ul>

          <button className="mt-10 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
            درباره ما بیشتر
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-100 w-full rounded-3xl bg-linear-to-tr from-blue-500/20 to-cyan-500/10 blur-[0.5px] border border-white/10 flex items-center justify-center text-gray-400">
            <video>
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Glow Effect */}
          {/* <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-500/10 blur-2xl" /> */}
        </motion.div>
      </div>
    </section>
  );
}
