import React from "react";
import Image from "next/image";
import landingImage from "../assets/image 2.png"; // Ensure the path is correct

const Landing = () => {
  return (
    <div className="bg-[#0E041D] h-[705px] flex items-center justify-center px-4 py-12">
      <div className="w-[90%] flex flex-col lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-2xl">

        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Landing sahifalar</h2>

          <ul className="space-y-6 mb-8">
            <li>
              <p className="text-xl font-semibold">◻️ Qisqa va taʼsirli</p>
              <p className="text-base text-gray-300">
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim maʼlumotlarni taqdim etadi.
              </p>
            </li>
            <li>
              <p className="text-xl font-semibold">◻️ Maqsadli</p>
              <p className="text-base text-gray-300">
                Aniq maqsadga yoʻnaltirilgan boʻlib, mijozni maxsus harakatga undashga xizmat qiladi.
              </p>
            </li>
            <li>
              <p className="text-xl font-semibold">◻️ Tez yuklanuvchi</p>
              <p className="text-base text-gray-300">
                Mijozlarning sabr-toqatiga taʼsir qilmaslik uchun iloji boricha tez yuklanadi.
              </p>
            </li>
          </ul>

          <div className="text-sm text-gray-400 space-y-2 mb-6">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-white text-[#0E041D] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Landing;
