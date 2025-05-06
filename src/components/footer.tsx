"use client";

const Footer = ({ selectedLanguage = "UZ" }: { selectedLanguage: "UZ" | "RU" | "EN" }) => {
  const team = Array(9).fill({
    name: "Xusanov Alibek",
    role: {
      UZ: "Dasturchi",
      RU: "Разработчик",
      EN: "Developer",
    },
  });

  const translations = {
    title: {
      UZ: "Biz bilan aloqa",
      RU: "Свяжитесь с нами",
      EN: "Contact Us",
    },
    subtitle: {
      UZ: "Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz",
      RU: "Давайте обсудим, как реализовать ваш проект",
      EN: "Let's discuss how to realize your project",
    },
    teamTitle: {
      UZ: "Bizning jamoa haqida",
      RU: "О нашей команде",
      EN: "About our team",
    },
    consultTitle: {
      UZ: "Bepul konsultatsiya",
      RU: "Бесплатная консультация",
      EN: "Free Consultation",
    },
    consultText: {
      UZ: "Loyihangiz bo’yicha boshlang’ich bepul konsultatsiya uchun ma’lumotingizni qoldiring.",
      RU: "Оставьте свои данные для начальной бесплатной консультации по вашему проекту.",
      EN: "Leave your details for a free initial consultation about your project.",
    },
    namePlaceholder: {
      UZ: "Ismingiz",
      RU: "Ваше имя",
      EN: "Your Name",
    },
    phonePlaceholder: {
      UZ: "Telefon raqamingiz",
      RU: "Ваш номер телефона",
      EN: "Your Phone Number",
    },
    submitButton: {
      UZ: "Jo‘natish",
      RU: "Отправить",
      EN: "Submit",
    },
  };

  return (
    <footer className="bg-[#0E041D] w-full py-20 relative text-white text-center">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-4xl">{translations.title[selectedLanguage]}</h1>
        <p className="font-normal text-lg mt-4">{translations.subtitle[selectedLanguage]}</p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
          <div className="w-full lg:w-2/3 bg-[#1A1129] border border-white rounded-lg p-5">
            <p className="text-[30px] font-semibold text-left">
              {translations.teamTitle[selectedLanguage]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-[#2E263B] max-w-[290px] w-full h-[105px] rounded-[18px] p-[10px] border border-white"
                >
                  <div className="w-[84px] h-[84px] rounded-[8px] bg-white flex-shrink-0"></div>
                  <div className="text-left mt-[4px]">
                    <p className="font-medium text-[18px]">{member.name}</p>
                    <p className="font-normal text-[14px]">
                      {member.role[selectedLanguage]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-[#1A1129] border border-white rounded-lg p-6">
            <h2 className="text-[30px] font-semibold mb-5 mt-[20px]">
              {translations.consultTitle[selectedLanguage]}
            </h2>
            <p className="text-[16px] font-normal mb-4 px-6">
              {translations.consultText[selectedLanguage]}
            </p>

            <form className="flex flex-col gap-4 items-center">
              <input
                type="text"
                placeholder={translations.namePlaceholder[selectedLanguage]}
                className="w-full max-w-[300px] text-[15px] px-4 py-3 rounded-lg bg-[#31283E] border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-center mt-[20px]"
              />
              <input
                type="text"
                placeholder={translations.phonePlaceholder[selectedLanguage]}
                className="w-full max-w-[300px] text-[15px] px-4 py-3 rounded-lg bg-[#31283E] border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-center mt-[10px]"
              />
              <button
                type="submit"
                className="w-full max-w-[300px] py-3 bg-[#5A00DB] hover:bg-white hover:text-[#5A00DB] text-white font-semibold rounded-lg transition-all duration-300 mt-[40px]"
              >
                {translations.submitButton[selectedLanguage]}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-32 h-32 md:w-48 md:h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute top-10 left-10" />
      <div className="w-32 h-32 md:w-48 md:h-40 rounded-full bg-purple-700 blur-3xl opacity-60 absolute bottom-1 right-10" />
    </footer>
  );
};

export default Footer;

