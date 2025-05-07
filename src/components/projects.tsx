'use client';

import Image from 'next/image';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <div className="bg-[#0E041D] w-full min-h-[850px] relative py-20 overflow-hidden">
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-30 absolute z-0 top-[40%] left-[14%]" />
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-20 absolute z-0 top-[7%] left-[70%]" />
      <div className="w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-20 absolute z-0 top-[80%] left-[75%]" />

      <div className="container mx-auto w-[80%] relative z-10">
        <h1 className="text-white text-center font-bold text-[48px]">Loyihalarimiz</h1>
        <p className="text-white text-center font-normal text-[18px]">Biz haqimizda gapirsin!</p>

        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project2} alt="Project 2" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h2 className="font-semibold text-[24px] mt-8">Tourmad loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
            Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
            </p>
            <button className="text-white font-semibold text-[16px] mt-5 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#5A00DB] transition duration-300 bg-[#261D33]">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project1} alt="Project 1" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2 text-right">
            <h2 className="font-semibold text-[24px] mt-12">ProRun loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
            Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin. 
Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.

            </p>
            <button className="text-white font-semibold text-[16px] mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#5A00DB] transition duration-300 bg-[#261D33]">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <Image src={project3} alt="Project 3" className="rounded-3xl w-full" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h2 className="font-semibold text-[24px] mt-10">Xalq trans loyihasi</h2>
            <p className="font-normal text-[18px] mt-5">
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
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
