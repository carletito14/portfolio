/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useTranslation } from 'react-i18next';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Firebase from '../assets/firebase.png'
import { skills } from '../data/data';

const Skills = () => {
    const [t] = useTranslation("global");
    const skillsData = skills.map(function (skill) {
        return (

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={skill.img} alt="HTML icon" />
                <p className='my-4'>{skill.name.toUpperCase()}</p>
            </div>
        );

    });

    return (
        <div name='skills' className='w-full h-screen bg-[#023047] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-200 '>{t("skills.title")}</p>
                    <p className='py-4'>// {t("skills.content")}</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skillsData}
                </div>
            </div>
        </div>
    );
};

export default Skills;