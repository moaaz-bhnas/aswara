import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/me.avif"
        alt="الصورة الشخصية"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-left sm:ms-5 sm:mb-5"
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-bold">رفيقة القلم والكتابة</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-4">خريجة كلية اللغات والترجمة، قسم الإنجليزية والصينية.</p>
        <p className="mb-4">أكتب بحثًا عن لحظة هادئة ينمو فيها الخيال وتهمس فيها المشاعر.</p>
        <p className="mb-4">
          شاركت في أعمال جماعية مثل: أنين أقلام، نوركان، فتات قلب سجين العقل، ملتقى الأغراب، رغبة الرحيل، قلب أحمق،
          ومتاهات الإدراك.
        </p>
        <p>من مؤلفاتي: روبوت يحتل العالم، دموع اشتياق، وما يبوح به داخلي، وهو عمل جماعي قدت فكرته وكتابته.</p>
      </div>
    </section>
  );
}
