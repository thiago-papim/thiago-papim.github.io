import React from 'react';
import Button from './Button';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="px-20 py-10 flex h-36 justify-between items-center">
        <div>
          <img
            src={ logo }
            alt="logo"
            className="h-24"
          />
        </div>
        <div className="flex">
          <Button name="Home" />
          <Button name="Sobre mim" />
          <Button name="Projetos" />
          <Button name="Contato" />
        </div>
      </div>
    );
  }
}

export default Header;
