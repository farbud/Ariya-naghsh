"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TEXT = "کاغذ ساده را به هویت برند شما تبدیل می‌کنیم.";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ⌨️ Typewriter
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTyped(TEXT.slice(0, i));
      i++;
      if (i > TEXT.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // 🖱️ Mouse tracking light
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#05060a] text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-125 object-cover blur-[2px]"
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
              rgba(205, 200, 200, 0.65) 20%,
              rgba(87, 87, 87, 0.376)) 30%,
              rgba(173, 173, 173, 0.696) 10%
            )
          `,
        }}
      />

      {/* 🌌 Dynamic Glow */}
      <div
        className="absolute h-150 w-150 rounded-full bg-blue-500/20 blur-[180px]"
        style={{
          transform: `translate(${mouse.x * 50}px, ${mouse.y * 50}px)`,
          transition: "0.2s ease-out",
        }}
      />

      <div
        className="absolute -bottom-50 -right-50 h-125 w-125 rounded-full bg-cyan-400/10 blur-[200px]"
        style={{
          transform: `translate(${-mouse.x * 40}px, ${-mouse.y * 40}px)`,
          transition: "0.2s ease-out",
        }}
      />

      {/* 🌟 Soft Center Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 mb-20">
        {/* 🧊 3D Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight"
          style={{
            transform: "perspective(900px)",
            textShadow: `
              0 2px 0 #0f172a,
              0 10px 40px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* ⌨️ Typewriter */}
          <span className="relative inline-block text-red-600">
            {typed}
            <span className="animate-pulse text-blue-400">|</span>
          </span>

          {/* ✨ Subtitle Gradient */}
          <span className="block mt-6 text-transparent bg-linear-to-r from-blue-400 via-cyan-300 to-white bg-clip-text">
            برای برندهایی که دیده می‌شوند
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
