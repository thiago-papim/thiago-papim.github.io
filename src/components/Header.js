import React, { useContext, useEffect } from 'react';
import logo from '../images/logo.png';
import dark from '../images/night.png';
import light from '../images/light.png';
import hambDark from '../images/hamburguerBlack.png';
import hambLigth from '../images/hamburguerWhite.png';
import xDark from '../images/xBtn.png';
import xWhite from '../images/xWhite.jpg';
import AppContext from '../context/AppContext';

function Header() {
  const { setHomeValue, theme, setTheme,
    btnMobile, setBtnMobile,
  } = useContext(AppContext);

  useEffect(() => {
    const darkStorage = localStorage.getItem('theme');
    if (darkStorage) {
      setTheme(darkStorage);
    }
  }, [setTheme]);

  const arrBtn = ['Home', 'Sobre', 'Projetos', 'Contato'];

  return (
    <div>
      <div
        className="lg:px-20 px-6 py-10 flex h-36 lg:justify-center justify-between
        items-center"
      >
        <div className="lg:p-16">
          <img
            src={ logo }
            alt="logo"
            className="h-14 lg:h-24"
          />
        </div>
        <div className="hidden lg:flex min-w-2/5 lg:w-[700px] h-14">
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
          { theme === 'dark'
        && (
          <button
            className="w-72 mx-4 hover:scale-105 focus:scale-110"
            onClick={ () => {
              setTheme('ligth');
              localStorage.setItem('theme', 'ligth');
            } }
          >
            <img src={ light } alt="light-mode" />
          </button>
        )}
          { theme === 'ligth'
        && (
          <button
            className="w-72 mx-4 hover:scale-105 focus:scale-110"
            onClick={ () => {
              setTheme('dark');
              localStorage.setItem('theme', 'dark');
            } }
          >
            <img src={ dark } alt="light-mode" />
          </button>
        )}
        </div>
        <div className="flex">
          { theme === 'dark' ? (
            <button
              className="w-11 hover:scale-105 focus:scale-110 lg:hidden flex py-5"
              onClick={ () => {
                setTheme('ligth');
                localStorage.setItem('theme', 'ligth');
              } }
            >
              <img src={ light } alt="light-mode" />
            </button>
          )
            : (
              <button
                className="w-11 hover:scale-105 focus:scale-110 lg:hidden flex py-5"
                onClick={ () => {
                  setTheme('dark');
                  localStorage.setItem('theme', 'dark');
                } }
              >
                <img src={ dark } alt="light-mode" />
              </button>
            )}
          {btnMobile ? (
            <button
              className="pl-4"
              onClick={ () => { setBtnMobile(!btnMobile); } }
            >
              { theme === 'ligth'
                ? (
                  <img
                    className="w-8 flex lg:hidden"
                    src={ xDark }
                    alt="hamdark"
                  />)
                : (
                  <img
                    className="w-8 flex lg:hidden"
                    src={ xWhite }
                    alt="hambLigth"
                  />)}
            </button>)
            : (
              <button
                className="pl-4"
                onClick={ () => { setBtnMobile(!btnMobile); } }
              >
                { theme === 'ligth'
                  ? (
                    <img
                      className="w-12 flex lg:hidden"
                      src={ hambDark }
                      alt="hamdark"
                    />)
                  : (
                    <img
                      className="w-12 flex lg:hidden"
                      src={ hambLigth }
                      alt="hambLigth"
                    />)}
              </button>)}
        </div>
      </div>
      { btnMobile
      && (
        <div className="flex justify-center">
          <div className="lg:hidden flex flex-col w-1/2">
            { arrBtn.map((e) => (
              <button
                key={ e }
                className="btnHeader mx-4 fontHeader hover:scale-105 focus:scale-110"
                onClick={ () => { setHomeValue(e); setBtnMobile(!btnMobile); } }
              >
                <p className="text-xl">
                  {e}
                </p>
              </button>
            )) }
          </div>
        </div>)}
    </div>
  );
}

export default Header;
