import React from 'react';
import Header from '../components/Header';
import avatarCompleto from '../images/avatarCompleto.png';

class Home extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="flex flex-col h-screen">
        <Header { ...props } />
        <div
          className="h-screen flex justify-between"
        >
          <div className="w-3/5 teste">
            <h1
              className="text-8xl text-white text-center"
            >
              Bem vindo
              <br />
              Eu sou o Thiago!
            </h1>
            <h2
              className="text-white text-5xl h-96 flex items-center justify-center"
            >
              Portfolio em Construção!
            </h2>
          </div>
          {/* <h1 className="bg-white w-3/5">Bem vindo</h1> */}
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
}

export default Home;
