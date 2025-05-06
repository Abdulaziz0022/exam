'use client';

import Image from 'next/image';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';

const Services = () => {
  return (
    <div className="bg-[#0E041D] w-full h-auto relative">
      <div className="w-[90%] mx-auto pt-[80px] text-center">
        <h1 className="text-white font-[700] text-[48px]">Xizmat turlari</h1>
        <p className="text-white font-[400] text-[18px]">
          Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
        </p>

        <div className="pt-[70px] flex flex-wrap justify-center gap-10 pb-[100px]">
          {/* Landing Page */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon5} alt="Landing" className="px-[142px] pt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Landing sahifalar</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Qisqa, tasirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun moljallangan.
            </p>
          </div>

          {/* Corporate Website */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon2} alt="Corporate Website" className="px-[142px] pt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Korporativ veb-sayt</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Kompaniyaning umumiy malumotini taqdim etish, xizmatlar yoki mahsulotlar haqida malumot berish.
            </p>
          </div>

          {/* E-commerce */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon3} alt="E-commerce" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Online do’kon</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.
            </p>
          </div>

          {/* CRM System */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon7} alt="Mobile Apps" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">CRM tizimi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
            </p>
          </div>

          {/* Portfolio Websites */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon4} alt="CRM System" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Portfolio saytlari</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
            </p>
          </div>

          {/* Blog Pages */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon1} alt="SEO Optimization" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Blog sahifalari</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              O‘z fikrlari, yangiliklari yoki malumotlarini o‘rtoqlashish. Malumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.
            </p>
          </div>

          {/* Education Platforms */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon6} alt="UI/UX Design" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Ta’lim platformasi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Talim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
            </p>
          </div>

          {/* ERP Platform */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Image src={icon8} alt="Custom Software" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">ERP platformasi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy taminotdir. U tashkilotning moliyaviy, ishlab chiqarish, logistika, kadrlar boshqaruvi.
            </p>
          </div>

          {/* Custom Project */}
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#5A00DB] transition-all duration-300">
            <Image src={icon9} alt="Technical Support" className="px-[142px] pt-[55px]" width={160} height={160} />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Alohida loyihami ?</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-1/100 left-1/7"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-3/10 left-1"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-4/10 left-3/10"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-4/10 right-1"></div>
    </div>
  );
};

export default Services;
