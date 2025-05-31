import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/me.jpeg"
        alt="الصورة الشخصية"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-left sm:ms-5 sm:mb-5 aspect-square object-cover"
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
        <p className="mb-12">
          من مؤلفاتي: روبوت يحتل العالم، دموع اشتياق، وما يبوح به داخلي، وهو عمل جماعي قدت فكرته وكتابته.
        </p>
      </div>

      {/* Books Section */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-8 text-center">مؤلفاتي</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book 1 */}
          <div className="group relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <Image src="/books/book-1.jpeg" alt="روبوت يحتل العالم" fill className="object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold mb-1">روبوت يحتل العالم</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">رواية تتخيل سيطرة الذكاء الاصطناعي على العالم</p>
            </div>
          </div>

          {/* Book 2 */}
          <div className="group relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <Image src="/books/book-2.jpeg" alt="دموع اشتياق" fill className="object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold mb-1">دموع اشتياق</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">مجموعة من الخواطر والمشاعر</p>
            </div>
          </div>

          {/* Book 3 */}
          <div className="group relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <Image src="/books/book-3.jpeg" alt="ما يبوح به داخلي" fill className="object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold mb-1">ما يبوح به داخلي</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">عمل جماعي قدت فكرته وكتابته</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
