'use client';

import Image from 'next/image';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const cardData = [
  {
    img: img1,
    title: 'Boshlanishi',
    description: `Tajribamiz davomida umumiy hisobda - - loyiha uchun 
                 -- - muddatda ishlab topshirdik`,
  },
  {
    img: img2,
    title: 'Uzoq muddatli loyihalar',
    description: `Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo’ydik`,
  },
  {
    img: img3,
    title: 'Jamoamiz kengaymoqda',
    description: `Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda`,
  },
];

const Cards = () => {
  return (
    <div className="relative bg-[#0E041D] w-full py-20 flex flex-col items-center overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-30 top-1/2 right-2 z-0"></div>
      <div className="absolute w-72 h-72 rounded-full bg-purple-700 blur-3xl opacity-40 top-1/2 left-1/4 z-0"></div>

      <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border border-white w-full h-[500px] md:h-[550px] bg-[#261D33] hover:bg-[#FFFFFF33] rounded-lg shadow-lg flex flex-col items-center transition duration-300"
          >
            <div className="w-full h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden rounded-t-lg">
              <Image
                src={card.img}
                alt={`Card ${index + 1}`}
                className="object-cover w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="p-6 text-white text-center">
              <p className="font-semibold text-2xl">{card.title}</p>
              <p className="font-normal text-lg mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[85%] text-white text-lg mt-10 z-10">
        <p>
          Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Cards;
