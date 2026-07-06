import Footer from "@/app/components/layout/Footer";
import Image from "next/image";

export default function GraphicDesignPage() {
  return (
    <>
      <main className="bg-white text-slate-800">
        {/* Hero */}
        <section className="relative h-[70vh]">
          <Image
            src="/images/design.jpg"
            alt="طراحی گرافیک"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl font-bold text-white">
              طراحی گرافیک حرفه‌ای
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-200 leading-8">
              از طراحی لوگو تا هویت بصری، کاتالوگ، بروشور، پوستر و هرآنچه برای
              معرفی حرفه‌ای برندتان نیاز دارید.
            </p>
          </div>
        </section>

        {/* معرفی */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">
            طراحی گرافیک؛ هویت برند شما
          </h2>

          <p className="leading-8 text-gray-600 text-lg">
            طراحی گرافیک فقط زیبا بودن نیست؛ بلکه ایجاد هویت، انتقال پیام و
            افزایش اعتماد مخاطب است. ما با طراحی خلاقانه، برند شما را ماندگار
            می‌کنیم.
          </p>
        </section>

        {/* خدمات */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {[
              "طراحی لوگو",
              "هویت بصری",
              "بروشور و کاتالوگ",
              "طراحی شبکه‌های اجتماعی",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow p-8 text-center"
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* نمونه کار */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-center text-3xl font-bold mb-10">
            نمونه طراحی‌ها
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["design.jpg", "offset.jpg", "packaging.jpg"].map((img) => (
              <div
                key={img}
                className="relative h-72 rounded-xl overflow-hidden"
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
        <section className="bg-blue-600 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">برندتان را حرفه‌ای معرفی کنید</h2>

          <p className="mt-4">آماده‌ایم طراحی اختصاصی برند شما را آغاز کنیم.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
