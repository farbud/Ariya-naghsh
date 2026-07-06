import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AfterPrintPage() {
  return (
    <>
      <main className="bg-white text-slate-800">
        {/* Hero */}
        <section className="relative h-[70vh]">
          <Image
            src="/images/after-print.jpg"
            alt="پس از چاپ"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col text-center px-6">
            <h1 className="text-5xl font-bold text-white">خدمات پس از چاپ</h1>

            <p className="text-lg text-gray-200 mt-5 max-w-2xl leading-8">
              افزایش زیبایی، دوام و ارزش محصولات چاپی با انواع خدمات تکمیلی.
            </p>
          </div>
        </section>

        {/* معرفی */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold mb-6">خدمات تکمیلی چاپ</h2>

          <p className="text-lg text-gray-600 leading-8">
            خدمات پس از چاپ نقش مهمی در کیفیت نهایی محصول دارند. از سلفون و
            طلاکوب گرفته تا یووی موضعی، برجسته‌سازی و صحافی، همگی باعث افزایش
            جذابیت و ماندگاری محصولات چاپی می‌شوند.
          </p>
        </section>

        {/* خدمات */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {[
              "سلفون مات و براق",
              "طلاکوب",
              "UV موضعی",
              "برجسته‌سازی",
              "صحافی",
              "دایکات",
              "لب‌چسب",
              "برش اختصاصی",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-center text-3xl font-bold mb-10">نمونه خدمات</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["after-print.jpg", "offset.jpg", "packaging.jpg"].map((img) => (
              <div
                key={img}
                className="relative h-72 overflow-hidden rounded-xl"
              >
                <Image
                  src={`/images/${img}`}
                  alt=""
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white text-center py-16">
          <h2 className="text-4xl font-bold">
            کیفیت نهایی محصولتان را چند برابر کنید
          </h2>

          <p className="mt-4">
            خدمات تکمیلی چاپ، ارزش محصول شما را افزایش می‌دهد.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
