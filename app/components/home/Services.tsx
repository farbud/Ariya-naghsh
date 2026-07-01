"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "چاپ افست",
    image: "/images/offset.jpg",
    description: "چاپ افست با کیفیت بالا برای انواع محصولات تبلیغاتی و تجاری.",
  },
  {
    title: "بسته‌بندی",
    image: "/images/packaging.jpg",
    description: "طراحی و تولید انواع بسته‌بندی حرفه‌ای برای برند شما.",
  },
  {
    title: "طراحی گرافیک",
    image: "/images/design.jpg",
    description: "طراحی لوگو، هویت بصری، کاتالوگ، بروشور و انواع طرح‌های چاپی.",
  },
  {
    title: "پس از چاپ",
    image: "/images/after-print.jpg",
    description: "خدمات سلفون، یووی، طلاکوب، برجسته‌سازی و صحافی.",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-slate-800">
          خدمات آریا نقش
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          مجموعه‌ای کامل از خدمات چاپ، طراحی و بسته‌بندی برای رشد برند شما.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition  hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                  اطلاعات بیشتر
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
