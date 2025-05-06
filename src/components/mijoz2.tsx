import React from "react";
import Image from "next/image";
import img3 from "../assets/Group1.png"; // Make sure this is the correct image

const Mijoz2 = () => {
  return (
    <section className="bg-[#0E041D] w-full py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 relative">
        <div className="w-full lg:w-1/2 pt-10 lg:pt-24 z-10 mb-[120px]">
          <h2 className="text-white text-[32px] lg:text-[48px] font-bold leading-tight">
            Har bir xizmat turini
          </h2>
          <p className="text-white text-[32px] lg:text-[48px] font-light leading-tight">
            har bir mijoz uchun
          </p>
          <p className="text-[32px] lg:text-[48px] font-bold leading-tight">
            <span className="text-[#5A00DB]">alohida ahamiyatli </span>
            <span className="text-white">deb yondoshamiz !</span>
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:mt-0 relative h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl mt-[20px]">
            <Image
              src={img3}
              alt="Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mijoz2;
