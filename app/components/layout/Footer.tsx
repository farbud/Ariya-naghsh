export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">آریا نقش</h3>
          <p className="mt-4 text-gray-400">
            چاپ و بسته‌بندی حرفه‌ای برای برندهای مدرن و آینده‌نگر.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">لینک‌ها</h4>
          <ul className="space-y-2 text-gray-400">
            <li>خانه</li>
            <li>خدمات</li>
            <li>نمونه‌کارها</li>
            <li>درباره ما</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">خدمات</h4>
          <ul className="space-y-2 text-gray-400">
            <li>چاپ افست</li>
            <li>بسته‌بندی</li>
            <li>طراحی گرافیک</li>
            <li>چاپ اختصاصی</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">تماس</h4>

          <p className="text-gray-400">ایمیل:</p>

          <p className="mt-2 text-blue-400">info@arianaghsh.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} آریا نقش. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
