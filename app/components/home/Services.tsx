"use client";

import { motion } from "framer-motion";
import {
  Package,
  Printer,
  Palette,
  FileText,
  Layers,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    title: "چاپ افست",
    icon: Printer,
  },
  {
    title: "بسته‌بندی",
    icon: Package,
  },
  {
    title: "طراحی گرافیک",
    icon: Palette,
  },
  {
    title: "پیش از چاپ",
    icon: FileText,
  },
  {
    title: "چاپ اختصاصی",
    icon: Layers,
  },
  {
    title: "خدمات تکمیلی",
    icon: BadgeCheck,
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">خدمات آریا نقش</h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          مجموعه‌ای کامل از خدمات چاپ، طراحی و بسته‌بندی برای رشد برند شما.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <Icon size={40} />

                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-gray-400">
                  ارائه خدمات تخصصی با بالاترین کیفیت و استانداردهای روز.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
