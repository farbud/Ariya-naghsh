import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/layout/Header";

export const metadata: Metadata = {
  title: "آریا نقش",
  description: "چاپ و بسته‌بندی حرفه‌ای",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased font-fa bg-[#e0e3ee] text-black">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
