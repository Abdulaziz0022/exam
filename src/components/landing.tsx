"use client";

import React from "react";
import Image from "next/image";
import landingImage from "../assets/image 2.png";
import icon from '../assets/Icon.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'



const Landing = () => {
  return (
    <div className="bg-[#0E041D] h-auto flex flex-col items-center justify-center px-4 py-12 gap-[70px] relative">
      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Landing sahifalar</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold pr-[40px]">◻️ Qisqa va taʼsirli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim maʼlumotlarni taqdim etadi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Maqsadli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Aniq maqsadga yoʻnaltirilgan boʻlib, mijozni maxsus harakatga undashga xizmat qiladi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tez yuklanuvchi</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarning sabr-toqatiga taʼsir qilmaslik uchun iloji boricha tez yuklanadi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Image
            src={icon}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Katalog sahifalari
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Mahsulotlar tavsifi
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Har bir mahsulotning batafsil tavsifi, xususiyatlari, afzalliklari va rasmlari bilan berilgan.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Turli filtrlar
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarning qidirishni osonlashtirish uchun turli xil filtrlar va saralash imkoniyatlari taqdim etiladi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Navigatsiya            </p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
            Katalog boylab oson va intuitiv harakatlanish uchun qulay navigatsiya tizimi yaratilgan.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon2}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">eCommerce Sahifalari</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Onlayn sotish
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarga tovarlarni togridan-togri onlayn sotib olish imkoniyatini beradi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Xavfsiz tolov             </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Turli xil xavfsiz tolov usullarini qo]llab-quvvatlaydi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Yetkazib berish            </p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
            Mijozlarga buyurtmalarni tez va qulay tarzda yetkazib berish xizmatini taqdim etadi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon3}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">CRM Sahifalari
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Mijozlar malumotlari
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlar haqida muhim malumotlarni toplash va saqlash uchun moljallangan
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Mijozlar bilan muloqot              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlar bilan samarali aloqa ornatish va ularni qollab-quvvatlashga imkon beradi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tahlil</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
            Mijozlar haqida toplangan malumotlarni tahlil qilish va qarorlar qabul qilishga yordam beradi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon4}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">ERP sahifalari          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Butun Korxona Integratsiyasi
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Turli bolimlarni birlashtirib, malumot almashinuvini optimallashtiradi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Avtomatlashtirish</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Kopgina jarayonlarni avtomatlashtirib, vaqt va resurslarni tejaydi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tahlil va xabarnoma
            </p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
            Korxona faoliyatini tahlil qilish va muhim xabarnomalarni olish imkonini beradi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon5}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Landing sahifalar</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Qisqa va taʼsirli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim maʼlumotlarni taqdim etadi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Maqsadli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Aniq maqsadga yoʻnaltirilgan boʻlib, mijozni maxsus harakatga undashga xizmat qiladi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tez yuklanuvchi</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarning sabr-toqatiga taʼsir qilmaslik uchun iloji boricha tez yuklanadi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Landing sahifalar</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Qisqa va taʼsirli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim maʼlumotlarni taqdim etadi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Maqsadli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Aniq maqsadga yoʻnaltirilgan boʻlib, mijozni maxsus harakatga undashga xizmat qiladi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tez yuklanuvchi</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarning sabr-toqatiga taʼsir qilmaslik uchun iloji boricha tez yuklanadi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>

      <div className="w-[90%] flex flex-col-reverse lg:flex-row bg-[#1B0E2F] shadow-lg overflow-hidden rounded-3xl relative">
        <div className="w-full lg:w-[60%] p-8 lg:p-12 text-white lg:ml-[40px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Landing sahifalar</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
            <div className="w-full lg:w-[260px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Qisqa va taʼsirli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim maʼlumotlarni taqdim etadi.
              </p>
            </div>

            <div className="w-full lg:w-[290px]">
              <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Maqsadli</p>
              <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
                Aniq maqsadga yoʻnaltirilgan boʻlib, mijozni maxsus harakatga undashga xizmat qiladi.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[230px] mt-8">
            <p className="text-[20px] lg:text-[24px] font-semibold">◻️ Tez yuklanuvchi</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-300">
              Mijozlarning sabr-toqatiga taʼsir qilmaslik uchun iloji boricha tez yuklanadi.
            </p>
          </div>

          <div className="text-sm lg:text-lg font-normal text-[#FFFFFF] space-y-2 mt-5">
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismlardan iborat boʻladi.)</p>
            <p>Veb Dizayn: 10–15 soatlik mehnat.</p>
          </div>

          <button className="bg-[#3B3347] text-white px-6 py-3 rounded-lg font-semibold text-[16px] border border-white mt-10">
            Buyurtma berish
          </button>
        </div>

        <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[705px] relative">
          <Image
            src={landingImage}
            alt="Landing Page Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Image
            src={icon}
            alt="Landing Page Preview"
            className="absolute left-5/11 bottom-[-15px]"
          />
      </div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[140px] left-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[700px] right-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[1250px] left-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[1830px] left-[48%] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[2350px] left-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[2670px] right-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[3330px] left-[40%] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[4050px] left-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[4600px] right-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[5000px] left-[0] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[5580px] left-[49%] hidden lg:block"></div>
      <div className="w-48 h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-[5850px] left-[0] hidden lg:block"></div>
    </div>
  );
};

export default Landing;
