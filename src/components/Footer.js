/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React from 'react';
import logoLinkedIn from '../images/logoLinkedIn.png';
import logoWhatsapp from '../images/whatsapp.png';
import logoGithub from '../images/logoGithubLigth.png';

const arrMenu = [
  {
    nome: 'Inicio',
  },
  {
    nome: 'Skills',
  },
  {
    nome: 'Projetos',
  },
  {
    nome: 'Contato',
  },
];

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const yOffset = -50; // Deslocamento opcional para compensar o cabeçalho
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {arrMenu.map((e, i) => (
          <div
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
            className="lg:p-8 p-4"
            key={ i }
          >
            <button
              onClick={ () => scrollToSection(e.nome) }
              className="transition duration-500 hover:text-[#64b5f6] text-white rounded-full inline-flex items-center"
            >
              {e.nome}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mb-2">
        <button
          onClick={ () => window.open('//www.linkedin.com/in/thiago-papim/') }
        >
          <img
            className="md:w-16 w-12 mx-4"
            src={ logoLinkedIn }
            alt="logo-linkedin"
          />
        </button>
        <button
          onClick={ () => window.open('//github.com/thiago-papim') }
        >
          <img
            className="md:w-16 w-12 mx-4"
            src={ logoGithub }
            alt="logo-github"
          />
        </button>
        <button
          onClick={ () => window.open(
            'https://api.whatsapp.com/send?phone=5511949160023&text=Olá, venho através do seu portfólio!',
          ) }
        >
          <img
            className="md:w-16 w-12 mx-4"
            src={ logoWhatsapp }
            alt="logo-whats"
          />
        </button>
      </div>
    </div>
  );
}

export default Footer;
