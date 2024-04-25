/* eslint-disable no-unused-vars */
import React from 'react';
import { Fullpage, FullPageSections,
  FullpageSection,
  FullpageNavigation } from '@ap.cx/react-fullpage';
import Home from './Home';
import Sobre from './Sobre';
import Projetos from './Projetos';
import Contato from './Contato';
import Header from '../components/Header';

function FullPag() {
  const SectionStyle = {
    heigth: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div>
      <Fullpage scrollingSpeed={ 100000000 }>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection style={ SectionStyle }>
            <Header />
            <Home />
          </FullpageSection>
          <FullpageSection style={ SectionStyle }>
            <Sobre />
          </FullpageSection>
          <FullpageSection style={ SectionStyle }>
            <Projetos />
          </FullpageSection>
          <FullpageSection style={ SectionStyle }>
            <Contato />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default FullPag;
