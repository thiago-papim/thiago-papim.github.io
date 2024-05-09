/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Button, Collapse, useMediaQuery } from '@mui/material';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import avatar from '../images/logo-terno.png';
import linkedIn from '../images/nome-linkedin.png';

function Sobre() {
  const [expanded, setExpanded] = React.useState(false);
  const { text } = useTypewriter({
    words: ['Devloper', 'FullStack', 'Testando'],
    loop: {},
  });
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Desenvolvedor Front-end', 'Desenvolvedor Back-end', 'Desenvolvedor Full-Stack'];
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
            Olá, eu sou o
            <br />
            Thiago Papim
          </p>
          <div>
            <p
              style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
              className="py-5 text-[#64b5f6] text-center lg:text-left lg:text-[32px] md:text-[25px] text-[20px]"
            >
              <Typewriter
                words={ words }
                loop
                cursor
                cursorStyle="|"
                typeSpeed={ 50 }
                onLoop={ (loopCount) => {
                  setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                } }
              />
            </p>
          </div>
          <p
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 400, lineHeight: '30px' } }
            className="text-[#9e9e9e] text-center lg:text-left lg:text-[20px] md:text-[18px] text-[15px]"
          >
            Uma pessoa apaixonada por ajudar os outros, e acredito que a tecnologia seja uma poderosa aliada nessa missão de fazer a diferença na vida das pessoas!
            Com 31 anos e residindo em Santo André - SP, em outubro de 2022 decidi realizar meu sonho de me tornar um Desenvolvedor. Completei com sucesso o curso da Trybe em novembro de 2023, adquirindo conhecimentos valiosos e complementando meu aprendizado com estudos pessoais.
          </p>
          <Collapse
            in={ expanded }
            style={ { fontFamily: 'Poppins, sans-serif' } }
          >
            <p
              style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 400, lineHeight: '30px' } }
              className="text-[#9e9e9e] text-center lg:text-left lg:text-[20px] md:text-[18px] text-[15px]"
            >
              Desde jovem, sempre sonhei em ser desenvolvedor. Trabalhei desde os 15 anos e me dediquei em todas as áreas em que atuei. Passei por diferentes trabalhos, como vendedor de consórcio, montador e técnico de computadores, metalúrgico, porteiro, gerente de lan house e até mesmo na produção de uma fábrica de doces. Minha paixão pela tecnologia sempre esteve presente em todas essas experiências.

              Concluí meu curso na área de desenvolvimento de software e tenho trabalhado como freelancer, colocando em prática o que aprendi. Agora, estou em busca de novas oportunidades. Estou pronto para contribuir com minha experiência e dedicação.
            </p>
          </Collapse>
          <Button
            onClick={ () => {
              if (expanded) {
                setExpanded(false);
              } else {
                setExpanded(true);
              }
            } }
            style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
          >
            {expanded ? 'Recolher' : 'Caso queira saber um pouco mais sobre mim, clique aqui'}
          </Button>
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
