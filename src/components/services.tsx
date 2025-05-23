'use client';

import { FileText, Briefcase, ShoppingCart, Users, FileSpreadsheet, CalendarCog, GraduationCap, Box, BarChart } from 'lucide-react'

const Services = () => {
  return (
    <div className="bg-[#0E041D] w-full h-auto relative">
      <div className="w-[90%] mx-auto pt-[80px] text-center">
        <h1 className="text-white font-[700] text-[48px]">Xizmat turlari</h1>
        <p className="text-white font-[400] text-[18px]">
          Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
        </p>

        <div className="pt-[70px] flex flex-wrap justify-center gap-10 pb-[100px]">
          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <FileText size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Landing sahifalar</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Qisqa, tasirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun moljallangan.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Briefcase size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Korporativ veb-sayt</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Kompaniyaning umumiy malumotini taqdim etish, xizmatlar yoki mahsulotlar haqida malumot berish.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <ShoppingCart size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Online do’kon</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Users size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">CRM tizimi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <FileSpreadsheet size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Portfolio saytlari</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <CalendarCog size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Blog sahifalari</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              O‘z fikrlari, yangiliklari yoki malumotlarini o‘rtoqlashish. Malumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <GraduationCap size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Ta’lim platformasi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Talim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] transition-all duration-300">
            <Box size={170} className="mx-auto text-white p-[38px] bg-[#3B3348] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">ERP platformasi</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy taminotdir. U tashkilotning moliyaviy, ishlab chiqarish, logistika, kadrlar boshqaruvi.
            </p>
          </div>

          <div className="w-[440px] h-[440px] border border-white rounded-lg bg-[#5A00DB] transition-all duration-300">
            <BarChart size={170} className="mx-auto text-white p-[38px] bg-[#6A19DF] rounded-3xl mt-[55px]" />
            <p className="text-white font-[600] text-[30px] pt-[30px]">Alohida loyihami ?</p>
            <p className="text-white font-[400] text-[18px] px-[35px] pt-[15px]">
              Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz.
            </p>
          </div>
        </div>
      </div>

      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-1/100 left-1/7"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-3/10 left-1"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-4/10 left-3/10"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-4/10 right-1"></div>
      <div className="w-32 h-32 md:w-48 md:h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute bottom-12 left-10" />
    </div>
  );
};

export default Services;
