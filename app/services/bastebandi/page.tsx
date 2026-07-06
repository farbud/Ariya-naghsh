import Footer from "@/app/components/layout/Footer";
import Image from "next/image";

export default function PackagingPage() {
  return (
    <>
      <main className="bg-white text-slate-800">
        {/* HERO */}
        <section className="relative h-[70vh] w-full">
          <Image
            src="/images/packaging.jpg"
            alt="بسته بندی"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              طراحی و تولید بسته‌بندی حرفه‌ای
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-2xl">
              بسته‌بندی خلاقانه و اختصاصی برای افزایش ارزش برند و فروش محصولات
              شما
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">بسته‌بندی چیست؟</h2>

          <p className="text-lg leading-8 text-gray-700">
            بسته‌بندی فقط یک جعبه نیست؛ اولین برخورد مشتری با برند شماست. طراحی
            اصولی بسته‌بندی می‌تواند ارزش محصول را چند برابر کند و در تصمیم خرید
            مشتری تأثیر مستقیم داشته باشد.
          </p>
        </section>

        {/* FEATURES */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">🎯 طراحی اختصاصی</h3>
              <p className="text-gray-600">
                بسته‌بندی کاملاً متناسب با هویت برند شما
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">📦 افزایش فروش</h3>
              <p className="text-gray-600">
                طراحی حرفه‌ای باعث جذب بیشتر مشتری می‌شود
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">🏭 تولید حرفه‌ای</h3>
              <p className="text-gray-600">
                استفاده از متریال باکیفیت و چاپ صنعتی
              </p>
            </div>
          </div>
        </section>

        {/* SAMPLE WORKS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            نمونه بسته‌بندی‌ها
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["packaging.jpg", "offset.jpg", "design.jpg"].map((img, i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={`/images/${img}`}
                  alt="نمونه بسته بندی"
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            سوالات متداول
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">چرا بسته‌بندی مهم است؟</h3>
              <p className="text-gray-600 mt-2">
                بسته‌بندی اولین چیزی است که مشتری از برند شما می‌بیند و تأثیر
                مستقیم روی فروش دارد.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                آیا طراحی اختصاصی انجام می‌دهید؟
              </h3>
              <p className="text-gray-600 mt-2">
                بله، تمام بسته‌بندی‌ها بر اساس برند شما طراحی می‌شوند.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">حداقل سفارش چقدر است؟</h3>
              <p className="text-gray-600 mt-2">
                بسته به نوع پروژه متفاوت است و بعد از مشاوره مشخص می‌شود.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
