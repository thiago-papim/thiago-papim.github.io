import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import logoLinkedIn from '../images/logoLinkedIn.png';
import logoGitHubDark from '../images/logoGithubDark.png';
import logoGitHubLigth from '../images/logoGithubLigth.png';

function LinksBtn() {
  const { theme } = useContext(AppContext);
  return (
    <div
      className="flex w-screen
    justify-center items-center dark:bg-black bg-white items-end px-10"
    >
      <a
        className="px-8 btnLinkedIn"
        href="//www.linkedin.com/in/thiago-papim/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-12 py-2 hover:scale-110"
          src={ logoLinkedIn }
          alt="Logo LinkedIn"
        />
      </a>
      <a
        className="px-8 btnGitHub"
        href="//github.com/thiago-papim"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-12 hover:scale-110"
          src={ theme === 'dark' ? logoGitHubLigth : logoGitHubDark }
          alt="Logo Github"
        />
      </a>
    </div>
  );
}

export default LinksBtn;
