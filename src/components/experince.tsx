'use client';

import Image from 'next/image';
import laptop from '../assets/laptop.png';
import img1 from '../assets/v1.png';
import img2 from '../assets/v2.png';
import img3 from '../assets/v3.png';
import img4 from '../assets/v4.png';

const Experience = () => {
  const experienceData = [
    { img: img1, value: '7+ yillik', label: 'Umumiy tajriba' },
    { img: img2, value: '5+', label: 'Yirik loyihalar' },
    { img: img3, value: '8+', label: 'Xizmat turlari' },
    { img: img4, value: '100%', label: 'Xavfsizlik' },
  ];

  return (
    <div className="relative bg-[#0E041D] w-full min-h-[850px] overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute w-72 h-72 rounded-full bg-purple-700 blur-3xl opacity-40 top-1/4 left-[60%] -translate-x-1/2 z-0" />
      <div className="absolute w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 top-2/3 left-[42%] z-0" />

      <div className="container mx-auto w-[80%] flex flex-col relative z-10">
        {/* Headline Section */}
        <div className="pt-[130px]">
          <p className="text-white text-[48px] font-bold">Yuqori sifatdagi</p>
          <p className="text-white text-[48px] font-light">aniqlikka asoslanib</p>
          <p className="text-[#5A00DB] text-[48px] font-bold">istalgan turdagi</p>
          <p className="text-white text-[48px] font-bold">dasturlarni tayyorlaymiz</p>
          <button className="mt-[30px] px-[18px] py-[14px] bg-[#5A00DB] text-white text-[16px] font-semibold rounded-lg hover:bg-white hover:text-[#5A00DB] transition-all duration-300">
            Xizmatlar haqida
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-[100px] mb-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="text-white w-full h-[120px] border border-white bg-[#261D33] flex items-center rounded-[16px] px-[30px] py-[26px] hover:bg-[#FFFFFF33] transition"
            >
              <Image src={item.img} alt={`icon-${index}`} width={40} height={40} />
              <ul className="ml-[10px]">
                <li className="font-semibold text-[24px]">{item.value}</li>
                <li className="font-normal text-[18px]">{item.label}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Laptop Image */}
      <div className="hidden lg:block absolute bottom-[150px] right-[100px] z-0">
        <Image src={laptop} alt="laptop" width={1000} />
      </div>
      <div className="block lg:hidden w-[80%] mx-auto mt-10 z-10">
        <Image src={laptop} alt="laptop mobile" />
      </div>

      {/* About Section */}
      <div className="w-full h-[150px] bg-[#5A00DB] px-[40px] py-[30px] flex flex-col justify-center">
        <h1 className="font-bold text-[48px] text-white">Biz haqimizda</h1>
        <p className="font-normal text-[18px] text-white">Qisqacha ma’lumot</p>
      </div>
    </div>
  );
};

export default Experience;
