import React, { useContext } from 'react';
import Header from '../components/Header';
import avatarCompleto from '../images/avatarCompleto.png';
import AppContext from '../context/AppContext';
import Inicio from '../components/Inicio';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';

function Home() {
  const { homeValue } = useContext(AppContext);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div
        className="h-screen flex justify-between"
      >
        { homeValue === 'Home' && <Inicio />}
        { homeValue === 'Sobre' && <Sobre />}
        { homeValue === 'Projetos' && <Projetos />}
        { homeValue === 'Contato' && <Contato />}
        <div
          className="flex w-2/5 items-end justify-center"
        >
          <img
            src={ avatarCompleto }
            alt="Avatar"
            className="w-4/5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
