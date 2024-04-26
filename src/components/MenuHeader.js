/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React from 'react';

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

function MenuHeader() {
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
    <div className="hidden md:flex lg:w-[500px] justify-center items-center">
      {arrMenu.map((e, i) => (
        <div
          style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
          className="lg:p-8 p-4"
          key={ i }
        >
          <button
            onClick={ () => scrollToSection(e.nome) }
            className="transition duration-500 hover:text-[#64b5f6] text-white py-2 rounded-full inline-flex items-center"
          >
            {e.nome}
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuHeader;
