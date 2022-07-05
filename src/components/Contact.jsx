/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#023047] flex justify-center items-center p-4'>
        <form method='POST' action='mailto:contactomanuelgutierrez@gmail.com' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-200 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - contactomanuelgutierrez@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-3 rounded-xl' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact