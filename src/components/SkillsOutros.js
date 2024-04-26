/* eslint-disable max-len */
import React from 'react';
import logoGit from '../images/logo-git.png';
import logoGitHub from '../images/logoGithubDark.png';
import logoDocker from '../images/logo-docker.png';
import logoVscode from '../images/logo-vscode.png';
import logoInsomnia from '../images/logo-insomnia.png';
import logoBeekeeper from '../images/logo-beekeeper.svg';

function SkillsOutros() {
  const front = [
    {
      nome: 'Git',
      imagem: logoGit,
    },
    {
      nome: 'GitHub',
      imagem: logoGitHub,
    },
    {
      nome: 'Docker',
      imagem: logoDocker,
    },
    {
      nome: 'VS Code',
      imagem: logoVscode,
    },
    {
      nome: 'Insomnia',
      imagem: logoInsomnia,
    },
    {
      nome: 'Beekeper',
      imagem: logoBeekeeper,
    },
  ];
  return (
    <div
      className="flex flex-col items-center lg:w-1/2 w-full lg:min-h-[300px] text-white mt-5
      rounded-3xl pb-5"
      style={ { boxShadow: '0 0 50px rgba(0, 0, 0, 0.9)' } }
    >
      <p
        style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
        className="py-4 text-[#64b5f6] text-center lg:text-left lg:text-[32px] md:text-[25px] text-[20px]"
      >
        Outros
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

export default SkillsOutros;
