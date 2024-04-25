/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import avatar from '../images/avatarCompleto.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    localStorage.setItem('menuItem', 0);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const fontWidth = () => {
    if (windowWidth > 768) {
      return '25px';
    }
    if (windowWidth > 400) {
      return '20px';
    }
    return '12px';
  };

  const fontSize = fontWidth();
  return (
    <div
      className="flex flex-col w-[100%] dark:text-white
      dark:bg-[url('./images/fundo.png')]
      bg-[url('./images/fundo-white.jpg')]
      min-h-screen"
    >
      <Header />
      <div className="h-[100%] mb-10">
        <img
          className="fixed bottom-0 left-8 w-[20%] md:flex hidden"
          src={ avatar }
          alt="avatar"
        />
        <div className="w-full flex justify-center items-center pt-5">
          <Typography
            style={ { fontSize, fontWeight: 'bold' } }
            id="typographyTitle"
            variant="overline"
            display="block"
            gutterBottom
          >
            Bem vindo, Eu sou o Thiago!
          </Typography>
        </div>
        <div className="w-full flex justify-center">
          <div className=" flex flex-col items-center text-center pt-5 md:w-[60%] w-[85%]">
            <h2 className="md:text-2xl text-lg sm:text-base font-custom">
              Uma pessoa apaixonada por ajudar os outros, e acredito que a tecnologia seja uma poderosa aliada nessa missão de fazer a diferença na vida das pessoas!
              <br />
              <br />
              Com 31 anos e residindo em São Caetano do Sul, SP, em outubro de 2022 decidi realizar meu sonho de me tornar um Desenvolvedor.
              Completei com sucesso o curso da Trybe em novembro de 2023, adquirindo conhecimentos valiosos e complementando meu aprendizado com estudos pessoais.
              <br />
              <br />
              Atualmente, busco oportunidades para iniciar minha carreira na tecnologia, ansioso para aplicar minhas habilidades e continuar expandindo meu conhecimento.
              {' '}
            </h2>
            <h2 className="md:text-xl pt-4 text-sm sm:text-base font-custom pb-10">
              <strong>Que tal saber mais sobre mim e meus projetos?</strong>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
