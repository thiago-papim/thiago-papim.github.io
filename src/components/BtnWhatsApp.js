/* eslint-disable max-len */
import React from 'react';
import whatsapp from '../images/whatsapp.png';
import logoLinkedIn from '../images/logoLinkedIn.png';
import logoGitHubDark from '../images/logoGithubDark.png';
import logoGitHubLigth from '../images/logoGithubLigth.png';

export default function BtnWhatspp() {
  const theme = localStorage.getItem('theme');
  return (
    <div
      className="fixed md:flex hidden md:flex-col w-[40px] md:bottom-5 md:right-10 bottom-4 right-4"
    >
      <button
        className="md:mb-3 mb-3 md:w-[60px] w-[45px]"
        id="whats"
        onClick={ () => window.open(
          'https://api.whatsapp.com/send?phone=5511949160023&text=Olá, venho através do seu portfólio!',
        ) }
      >
        <img
          className="hover:scale-110"
          src={ whatsapp }
          alt="btnWhats"
        />
      </button>
      <div className="mb-3 md:w-[60px]">
        <a
          className="md:mb-3 md:w-[60px]"
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
      </div>
      <a
        className="md:w-[60px]"
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
