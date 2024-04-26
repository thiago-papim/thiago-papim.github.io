/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
import React from 'react';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import SkillsBack from '../components/SkillsBack';
import SkillsOutros from '../components/SkillsOutros';
import SkillsFront from '../components/SkillsFront';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

function Home() {
  return (
    <div id="Inicio">
      <Header />
      <Sobre />
      {/* Skills */}
      <div
        id="Skills"
        className="flex flex-col justify-center items-center bg-transparent bg-gradient-to-b from-[#201c24] to-[#381257] py-8"
      >
        <p
          style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
          className="text-center text-white lg:text-[50px] md:text-[40px] text-[30px]"
        >
          Skills
        </p>
        <p
          style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 300 } }
          className="text-center text-gray-400 lg:text-[20px] md:text-[20px] text-[18px] px-2"
        >
          Tenho conhecimento nas seguintes tecnologias
        </p>
        <div className="flex flex-wrap justify-center lg:w-[1200px] w-full items-center p-6">
          <SkillsFront />
          <SkillsBack />
          <SkillsOutros />
        </div>
      </div>
      {/* Projetos */}
      <div
        id="Projetos"
        className="flex flex-col justify-center items-center bg-transparent bg-gradient-to-b from-[#201c24] to-[#381257] py-8"
      >
        <div className="w-full">
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
            className="text-center text-white lg:text-[50px] md:text-[40px] text-[30px]"
          >
            Projetos
          </p>
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 300 } }
            className="text-center text-gray-400 lg:text-[20px] md:text-[20px] text-[18px] px-2"
          >
            Aqui estão alguns de meus projetos
          </p>
          <Projetos />
        </div>
      </div>
      {/* Contato */}
      <div
        id="Contato"
        className="flex flex-col justify-center items-center bg-transparent bg-gradient-to-b from-[#201c24] to-[#381257] py-8"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
            className="text-center text-white lg:text-[50px] md:text-[40px] text-[30px]"
          >
            Contato
          </p>
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 300 } }
            className="text-center text-gray-400 lg:text-[20px] md:text-[20px] text-[18px] px-2"
          >
            Preencha o formulário abaixo e entre em contato,
            responderei o mais breve possível.
          </p>
          <Contato />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#201c24] py-3">
        <p
          style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
          className="py-5 text-[#64b5f6] text-center lg:text-left text-[20px]"
        >
          Thiago Papim do Nascimento
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
