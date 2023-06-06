import React, { useContext } from 'react';

import avatarCompleto from '../images/avatarCompleto.png';

import AppContext from '../context/AppContext';

import LinksBtn from '../components/LinksBtn';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

function Home() {
  const { homeValue } = useContext(AppContext);
  return (
    <div
      className="flex flex-col h-screen w-[100%]
       bg-[url('./images/fundo-white.jpg')]
       dark:bg-[url('./images/fundo.png')]"
    >
      <Header />
      <div
        className="h-full flex justify-between flex-col lg:flex-row"
      >
        { homeValue === 'Home' && <Inicio />}
        { homeValue === 'Sobre' && <Sobre />}
        { homeValue === 'Projetos' && <Projetos />}
        { homeValue === 'Contato' && <Contato />}
        <div
          className="flex w-2/5 items-end flex-col"
        >
          <div className="h-1/7 lg:flex hidden">
            <LinksBtn />
          </div>
          <div className="lg:flex flex-col h-full justify-end items-end hidden">
            <img
              src={ avatarCompleto }
              alt="Avatar"
              className="lg:w-[80%]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
