/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { works } from '../data/data';

const Work = () => {
  const data = works.map(function (work) {
    return (
      <div
        style={{ backgroundImage: `url(${work.img})` }}
        className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'
      >
      </div>
    );

  }); return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#023047]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-200'>
            Work & Clients
          </p>
          <p className='py-6'>// Check out recent clients that I've worked with</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
          {data}
        </div>
      </div>
    </div>
  );
};

export default Work;