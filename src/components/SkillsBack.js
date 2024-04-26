/* eslint-disable max-len */
import React from 'react';
import logoNode from '../images/logo-node-js-512.png';
import logoTs from '../images/typescript-256.png';
import logoSequelize from '../images/sequelize-seeklogo.svg';
import logoExpress from '../images/logo-express.png';
import logoMySQL from '../images/logo-mysql.png';
import logoMsc from '../images/logo-arquiteturaMSC.png';

function SkillsBack() {
  const front = [
    {
      nome: 'Node.js',
      imagem: logoNode,
    },
    {
      nome: 'TypeScript',
      imagem: logoTs,
    },
    {
      nome: 'Express',
      imagem: logoExpress,
    },
    {
      nome: 'Sequelize',
      imagem: logoSequelize,
    },
    {
      nome: 'MySql',
      imagem: logoMySQL,
    },
    {
      nome: 'Arquitetura MSC',
      imagem: logoMsc,
    },
  ];
  return (
    <div
      className="flex flex-col items-center lg:w-[400px] w-full lg:min-h-[420px] text-white mt-5
      rounded-3xl pb-5"
      style={ { boxShadow: '0 0 50px rgba(0, 0, 0, 0.9)' } }
    >
      <p
        style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
        className="py-4 text-[#64b5f6] text-center lg:text-left lg:text-[32px] md:text-[25px] text-[20px]"
      >
        Back-end
      </p>
      <div className="flex flex-wrap justify-center font-[Poppins]">
        {
          front.map((e, i) => (
            <div
              className="flex justify-center items-center
              border-1 rounded-lg m-2 md:w-40 md:h-16 w-36 h-12 bg-white text-black"
              key={ i }
            >
              <img
                className="md:w-12 md:h-12 w-8 h-8"
                src={ e.imagem }
                alt={ e.nome }
              />
              <p className="pl-2">{e.nome}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SkillsBack;
