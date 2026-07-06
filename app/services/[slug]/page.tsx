import Image from "next/image";

type Service = {
  title: string;
  slug: string;
  image: string;
  description: string;
  fullText: string;
};

type Props = {
  params: {
    slug: string;
  };
};

const services: Service[] = [
  {
    title: "چاپ افست",
    slug: "chap-offset",
    image: "/images/offset.jpg",
    description: "چاپ افست با کیفیت بالا برای انواع محصولات تبلیغاتی و تجاری.",
    fullText:
      "چاپ افست یکی از حرفه‌ای‌ترین روش‌های چاپ است که برای تیراژ بالا استفاده می‌شود...",
  },
  {
    title: "بسته‌بندی",
    slug: "bastebandi",
    image: "/images/packaging.jpg",
    description: "طراحی و تولید انواع بسته‌بندی حرفه‌ای برای برند شما.",
    fullText: "خدمات بسته‌بندی شامل طراحی، چاپ و تولید جعبه‌های اختصاصی...",
  },
  {
    title: "طراحی گرافیک",
    slug: "tarahi",
    image: "/images/design.jpg",
    description: "طراحی لوگو، هویت بصری، کاتالوگ، بروشور و انواع طرح‌های چاپی.",
    fullText: "طراحی گرافیک شامل خلق هویت بصری برند و تبلیغات حرفه‌ای...",
  },
  {
    title: "پس از چاپ",
    slug: "after-print",
    image: "/images/after-print.jpg",
    description: "خدمات سلفون، یووی، طلاکوب، برجسته‌سازی و صحافی.",
    fullText:
      "پس از چاپ شامل تمام مراحل تکمیلی برای افزایش کیفیت نهایی محصول...",
  },
];

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="p-10 text-red-500">سرویس پیدا نشد</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <div className="relative h-80 w-full mb-8">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <p className="text-lg text-gray-700 leading-8">{service.fullText}</p>
    </section>
  );
}
