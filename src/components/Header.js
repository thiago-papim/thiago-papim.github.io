/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React from 'react';
import logo from '../images/logo-letra.png';
import MenuHeader from './MenuHeader';
import HeaderMobile from './HeaderMobile';

function Header() {
  return (
    <div
      className="flex w-full bg-[#201c24] h-20 text-white justify-center fixed z-50"
    >
      <div className="flex lg:w-[1200px] w-full justify-between">
        <div className="flex font-[Poppins] text-[18px] font-bold items-center pl-5">
          <img
            className="h-[40px]"
            src={ logo }
            alt="logo"
          />
          <p>Portfolio | Thiago</p>
        </div>
        <MenuHeader />
        <div className="md:hidden flex">
          <HeaderMobile />
        </div>
        <div className="md:flex justify-center items-center hidden">
          <button
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
            className="transition duration-700 border-[#64b5f6] bg-[#201c24] border-2 h-10 text-[#64b5f6] px-4 mr-4 rounded-3xl
          hover:text-black hover:bg-[#64b5f6]"
            onClick={ () => window.open('//github.com/thiago-papim') }
          >
            GitHub Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
