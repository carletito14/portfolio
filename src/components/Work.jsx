/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Dbs from '../assets/dbs.jpeg';
import Everis from '../assets/everis.webp';
import Telefonica from '../assets/telefonica.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work & Clients
          </p>
          <p className='py-6'>// Check out recent clients that I've worked with</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Dbs})` }}
            className='shadow-lg shadow-[#313131] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          </div>

          {/* Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Everis})` }}
            className='shadow-lg shadow-[#313131] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          </div>


          {/* Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Telefonica})` }}
            className='shadow-lg shadow-[#313131] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;