"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 20, suffix: "+", label: "سال سابقه" },
  { number: 3000, suffix: "+", label: "پروژه موفق" },
  { number: 800, suffix: "+", label: "مشتری" },
  { number: 50, suffix: "+", label: "نیروی متخصص" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-5xl font-bold text-blue-400">
              {inView ? <CountUp end={item.number} duration={2} /> : 0}
              {item.suffix}
            </h3>

            <p className="mt-4 text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
