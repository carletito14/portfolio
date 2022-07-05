/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import en_flag from "../assets/en.png";
import es_flag from "../assets/es.png";

const Navbar = () => {
    const [t, i18n] = useTranslation("global");

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023047] text-gray-300'>

            <div className='flex'>
                <div className='flex flex-initial'>
                    <img className='w-9 h-9' src={en_flag} alt="en_flag" role="button" onClick={() => i18n.changeLanguage("en")} />
                    <img className='w-9 h-9' src={es_flag} alt="en_flag" role="button" onClick={() => i18n.changeLanguage("es")} />
                </div>
            </div>
            <div className='flex'>
                <img src={Logo} alt='Logo Image' style={{ width: '50px' }} className='text-center' />

            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        {t("navbar.home")}
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        {t("navbar.about")}
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        {t("navbar.skills")}
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        {t("navbar.work")}
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        {t("navbar.contact")}
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#023047] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/manuel-gutiérrez-campos/'
                            target='_blank' rel="noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/carletito14'
                            target='_blank' rel="noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:contactomanuelgutierrez@gmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;