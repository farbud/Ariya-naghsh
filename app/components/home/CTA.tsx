"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 blur-3xl" /> */}

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-gray-800 md:text-5xl font-bold font-title farsi-title"
        >
          آماده شروع یک پروژه حرفه‌ای هستید؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-800 text-lg"
        >
          آریا نقش کنار شماست تا ایده‌هات رو به یک محصول واقعی و ماندگار تبدیل
          کنه
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="rounded-xl px-8 py-4  bg-blue-500 font-semibold text-white hover:bg-blue-600 transition">
            تماس با ما
          </button>

          <button className="rounded-xl border  bg-blue-500 border-white/20 px-8 py-4 font-semibold hover:border-white/50 transition">
            مشاهده نمونه‌کارها
          </button>
        </motion.div>
      </div>
    </section>
  );
}
