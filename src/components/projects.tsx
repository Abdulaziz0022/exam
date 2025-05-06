'use client';

import Image from 'next/image';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <div className="bg-[#0E041D] w-full min-h-[850px] relative py-20 overflow-hidden">
      {/* Background blur circles */}
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-30 absolute z-0 top-[40%] left-[14%]" />
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-20 absolute z-0 top-[7%] left-[70%]" />
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-20 absolute z-0 top-[80%] left-[75%]" />

      <div className="container mx-auto w-[80%] relative z-10">
        <h1 className="text-white text-center font-bold text-[48px]">Loyihalarimiz</h1>
        <p className="text-white text-center font-normal text-[18px]">Biz haqimizda gapirsin!</p>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project2} alt="Project 2" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h2 className="font-semibold text-[24px] mt-8">Tourmad loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
              Tourmad – O‘zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha servicelarni jamlagan: Mehmonxona xizmati, Restoran xizmati, Gidlik xizmati, Mashinada sayohat qilish, haydovchilar xizmati va boshqa ko‘plab xizmatlar. Shuningdek, foydalanuvchilar xizmat narxlari va joylashuvini ko‘rib, oldindan buyurtma bera olishadi.
            </p>
            <button className="text-white font-semibold text-[16px] mt-5 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#5A00DB] transition duration-300 bg-[#261D33]">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project1} alt="Project 1" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2 text-right">
            <h2 className="font-semibold text-[24px] mt-12">ProRun loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
              Prorun.uz – yugurish musobaqalari uchun maxsus yaratilgan platforma. Ishtirokchilar, shu jumladan chet elliklar ham, saytdan ro‘yxatdan o‘tib, istalgan musobaqada qatnashishlari mumkin. Sayt – ro‘yxatdan o‘tish jarayonini soddalashtirish maqsadida ishlab chiqilgan.
            </p>
            <button className="text-white font-semibold text-[16px] mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#5A00DB] transition duration-300 bg-[#261D33]">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project3} alt="Project 3" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h2 className="font-semibold text-[24px] mt-10">Xalq trans loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
              Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived five centuries, and remains unchanged in electronic typesetting.
            </p>
            <button className="text-white font-semibold text-[16px] mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#5A00DB] transition duration-300 bg-[#261D33]">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-20">
          <button className="font-semibold text-[16px] bg-[#5A00DB] px-[18px] py-[14px] rounded-xl text-white hover:bg-white hover:text-[#5A00DB] transition duration-300">
            Boshqa loyihalarni ko’rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
