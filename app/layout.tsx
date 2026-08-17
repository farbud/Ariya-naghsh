import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn, Geist } from "next/font/google";
import Header from "@/app/components/layout/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "آریا نقش",
  description: "چاپ و بسته‌بندی حرفه‌ای",
};

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body
        className={`antialiased bg-[#e0e3ee] text-black vazir.variable font-fa`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
