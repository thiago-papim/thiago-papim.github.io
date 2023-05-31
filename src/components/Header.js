import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.png';
import dark from '../images/night.png';
import light from '../images/light.png';
import AppContext from '../context/AppContext';

function Header() {
  const { setHomeValue } = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const darkStorage = localStorage.getItem('dark');
    setDarkMode(darkStorage);
  }, []);

  const arrBtn = ['Home', 'Sobre', 'Projetos', 'Contato'];
  // console.log(darkMode, setDarkMode);

  return (
    <div className="px-20 py-10 flex h-36 justify-between items-center">
      <div>
        <img
          src={ logo }
          alt="logo"
          className="h-24"
        />
      </div>
      <div className="flex min-w-2/5 w-[800px] h-14">
        { arrBtn.map((e) => (
          <button
            key={ e }
            className="btnHeader mx-4 fontHeader hover:scale-105 focus:scale-110"
            onClick={ () => setHomeValue(e) }
          >
            <p className="text-xl">
              {e}
            </p>
          </button>
        )) }
        { darkMode === 'true'
        && (
          <button
            className="w-72"
            onClick={ () => {
              setDarkMode('false');
              localStorage.setItem('dark', false);
            } }
          >
            <img src={ light } alt="light-mode" />
          </button>
        )}
        { darkMode === 'false'
        && (
          <button
            className="w-72"
            onClick={ () => {
              setDarkMode('true');
              localStorage.setItem('dark', true);
            } }
          >
            <img src={ dark } alt="light-mode" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
