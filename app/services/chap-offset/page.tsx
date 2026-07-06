import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ChapOffsetPage() {
  return (
    <>
      <main className="bg-white text-slate-800">
        {/* HERO */}
        <section className="relative h-[70vh] w-full">
          <Image
            src="/images/offset.jpg"
            alt="چاپ افست"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              چاپ افست حرفه‌ای
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-2xl">
              بهترین کیفیت چاپ برای بروشور، کارت ویزیت، کاتالوگ و بسته‌بندی برند
              شما
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">چاپ افست چیست؟</h2>

          <p className="text-lg leading-8 text-gray-700">
            چاپ افست یکی از دقیق‌ترین و اقتصادی‌ترین روش‌های چاپ صنعتی است که
            برای تیراژهای بالا استفاده می‌شود. در این روش تصویر ابتدا روی زینک
            منتقل شده و سپس با کمک لاستیک چاپ روی کاغذ اجرا می‌شود. نتیجه، کیفیت
            بسیار بالا و رنگ‌های دقیق است.
          </p>
        </section>

        {/* FEATURES */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">🎯 کیفیت بالا</h3>
              <p className="text-gray-600">
                مناسب برای چاپ‌های حرفه‌ای با دقت رنگ فوق‌العاده
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">💰 هزینه اقتصادی</h3>
              <p className="text-gray-600">
                هرچه تیراژ بیشتر شود، هزینه کمتر می‌شود
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">⚡ سرعت بالا</h3>
              <p className="text-gray-600">
                مناسب برای سفارش‌های انبوه و زمان محدود
              </p>
            </div>
          </div>
        </section>

        {/* SAMPLE WORKS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            نمونه کارهای چاپ افست
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["offset.jpg", "design.jpg", "packaging.jpg"].map((img, i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={`/images/${img}`}
                  alt="نمونه کار"
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            سوالات متداول
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">
                چاپ افست برای چه تیراژی مناسب است؟
              </h3>
              <p className="text-gray-600 mt-2">
                معمولاً برای تیراژ بالای 500 عدد به صرفه است.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                آیا امکان چاپ فوری وجود دارد؟
              </h3>
              <p className="text-gray-600 mt-2">
                بله، بسته به نوع سفارش امکان چاپ سریع وجود دارد.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">کیفیت چاپ چگونه است؟</h3>
              <p className="text-gray-600 mt-2">
                چاپ افست بالاترین کیفیت رنگ و جزئیات را ارائه می‌دهد.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
