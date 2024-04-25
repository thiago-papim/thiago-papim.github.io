/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadPdf from '../components/DownloadPdf';

export default function Sobre() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    localStorage.setItem('menuItem', 1);
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
      className="dark:bg-[url('./images/fundo.png')] dark:text-white h-[100%]
      bg-[url('./images/fundo-white.jpg')]
      min-h-screen"
    >
      <Header />
      <div className="flex flex-col items-center pb-14">
        <div className="flex flex-col md:justify-start justify-center">
          <Typography
            style={ { fontSize, fontWeight: 'bold', textAlign: 'center' } }
            id="typographyTitle"
            variant="overline"
            display="block"
            gutterBottom
          >
            Um pouco sobre mim
          </Typography>
          <div className="flex items-center text-center pt-5 mx-5">
            <h2 className="md:text-2xl text-lg sm:text-base font-custom">
              Desde jovem, sempre sonhei em ser desenvolvedor. Trabalhei desde os 15 anos e me dediquei em todas as áreas em que atuei.
              Passei por diferentes trabalhos, como vendedor de consórcio, montador e técnico de computadores, metalúrgico, porteiro, gerente de lan house e até mesmo na produção de uma fábrica de doces.
              Minha paixão pela tecnologia sempre esteve presente em todas essas experiências.
              <br />
              <br />
              Concluí meu curso na área de desenvolvimento de software e tenho trabalhado como freelancer, colocando em prática o que aprendi.
              Agora, estou em busca de novas oportunidades.
              Estou pronto para contribuir com minha experiência e dedicação.
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:justify-start justify-center">
          <Typography
            style={ { fontSize: 18, fontWeight: 'bold', textAlign: 'center' } }
            id="typographyTitle"
            variant="overline"
            display="block"
            gutterBottom
          >
            Tenho conhecimentos nas seguintes tecnologias:
          </Typography>
          <div className="flex flex-col md:flex-row justify-center mb-5">
            <div className="flex flex-col items-center md:items-start pt-5 ml-5 md:mr-36">
              <h2 className="text-2xl mb-3 font-custom">
                Front-end:
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Unix, Shell e Git
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                HTML
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                CSS
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Tailwind
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                JavaScript ES6
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                JavaScript Assíncrono
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                React
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                React Hooks
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                React Testing Library
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Redux
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Context API
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-start pt-5 ml-5">
              <h2 className="text-2xl mb-3 font-custom">
                Back-end:
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Docker
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                SQL
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Node.js
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                TypeScript
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Express
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Sequelize
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Arquitetura de Software MSC
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Python
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                Java
              </h2>
              <h2 className="md:text-lg text-base font-custom">
                AWS S3
              </h2>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-5">
          <DownloadPdf />
        </div>
      </div>
      <Footer />
    </div>
  );
}
