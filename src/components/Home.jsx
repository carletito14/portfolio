import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [t] = useTranslation("global");
  const woman = '👩‍💻'

  return (
    <div name='home' className='w-full h-screen bg-[#023047]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-200'>{t("header.small-title")}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          {t("header.title")}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          {t("header.subtitle")}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>{t("header.title-description")}
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-200'>
            {t("header.button-work")}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;