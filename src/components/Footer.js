import React, { useContext } from 'react';
import whatsapp from '../images/whatsapp.png';
import logoLinkedIn from '../images/logoLinkedIn.png';
import logoGitHubDark from '../images/logoGithubDark.png';
import logoGitHubLigth from '../images/logoGithubLigth.png';
import AppContext from '../context/AppContext';

export default function Footer() {
  const { theme } = useContext(AppContext);
  return (
    <div
      className="fixed bottom-0 justify-center items-center
    flex right-00 bg-white dark:bg-black w-full md:hidden h-16"
    >
      <button
        className="w-[40px] mr-4"
        id="whats"
        onClick={ () => window.open(
          'https://api.whatsapp.com/send?phone=5511949160023&text=Olá, venho através do seu portfólio!',
        ) }
      >
        <img
          src={ whatsapp }
          alt="btnWhats"
        />
      </button>
      <a
        className="w-[40px] mr-4"
        href="//www.linkedin.com/in/thiago-papim/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="hover:scale-110"
          src={ logoLinkedIn }
          alt="Logo LinkedIn"
        />
      </a>
      <a
        className="w-[40px] dark:w-[41px]"
        href="//github.com/thiago-papim"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="hover:scale-110"
          src={ theme === 'dark' ? logoGitHubLigth : logoGitHubDark }
          alt="Logo Github"
        />
      </a>
    </div>
  );
}
