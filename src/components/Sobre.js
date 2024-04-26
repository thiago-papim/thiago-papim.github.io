/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React from 'react';
import { useMediaQuery } from '@mui/material';
import avatar from '../images/logo-terno.png';
import linkedIn from '../images/nome-linkedin.png';

function Sobre() {
  return (
    <div
      className="flex w-full flex-col lg:flex-row text-white justify-center bg-gradient-to-b from-[#201c24] to-[#381257] pt-24"
    >
      <div className="lg:w-[1200px] flex flex-col lg:flex-row justify-center">
        <div
          className="lg:order-1 order-2 px-5 pt-12 flex flex-col lg:w-1/2"
        >
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
            className="text-center lg:text-left lg:text-[50px] md:text-[40px] text-[30px]"
          >
            Olá, eu sou
            <br />
            Thiago Papim
          </p>
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
            className="py-5 text-[#64b5f6] text-center lg:text-left lg:text-[32px] md:text-[25px] text-[20px]"
          >
            Desenvolvedor Full Stack
          </p>
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 400, lineHeight: '30px' } }
            className="text-[#9e9e9e] text-center lg:text-left lg:text-[20px] md:text-[18px] text-[15px]"
          >
            Uma pessoa apaixonada por ajudar os outros, e acredito que a tecnologia seja uma poderosa aliada nessa missão de fazer a diferença na vida das pessoas!
            Com 31 anos e residindo em Santo André - SP, em outubro de 2022 decidi realizar meu sonho de me tornar um Desenvolvedor. Completei com sucesso o curso da Trybe em novembro de 2023, adquirindo conhecimentos valiosos e complementando meu aprendizado com estudos pessoais.
          </p>
          <div className="flex justify-center pt-3">
            <button
              style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
              className="transition duration-700 border-[#64b5f6] bg-white border-0 h-8 px-4 rounded-lg
          text-black hover:scale-110 hover:bg-[#0073b0] lg:w-56 w-44 flex justify-center mb-10 mt-5"
              onClick={ () => window.open('//www.linkedin.com/in/thiago-papim/') }
            >
              <img
                className="h-full"
                src={ linkedIn }
                alt="logo-linkedIn"
              />
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center lg:w-1/2 order-1"
        >
          <img
            className="w-52 md:w-72 md:h-72 lg:w-96 lg:h-96 border-0 rounded-full bg-white pt-1"
            src={ avatar }
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
