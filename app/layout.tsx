import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/layout/Header";

export const metadata: Metadata = {
  title: "آریا نقش",
  description: "چاپ و بسته‌بندی حرفه‌ای",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
