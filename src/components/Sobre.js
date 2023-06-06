import React from 'react';

function Sobre() {
  return (
    <div className="lg:w-4/5 fontHeader">
      <h1
        className="lg:text-6xl text-4xl text-center dark:text-white"
      >
        Um Pouco sobre mim
      </h1>
      <div className=" flex flex-col items-center lg:pt-8 pt-6">
        <h2
          className="lg:text-2xl flex text-justify w-4/5 dark:text-white pb-3"
        >
          Desde jovem sempre tive um sonho em ser desenvolvedor,
          trabalhei grande parte da minha vida com vendas de consórcios.
          <br />
          Trabalhei também com vendas de hardwares, montagem e manutenção de
          computadores,
          metalúrgico, porteiro, gerente de lan house, produção de uma fábrica de doces
          e tudo isso desde os 15 anos de idade, sendo meu primeiro emprego na minha
          antiga escola como coordenador da sala de informática.
        </h2>
        <h2
          className="lg:text-2xl flex text-justify w-4/5 dark:text-white pb-3"
        >
          Desde sempre gosto de tudo relacionado à tecnologia e gosto de jogar nas
          horas vagas.
        </h2>
        <h2
          className="lg:text-2xl flex text-justify w-4/5 dark:text-white pb-3"
        >
          Próximo ao final do meu curso, busco oportunidades para começar minha carreira
          na área da tecnologia, e expandir meus conhecimentos.
        </h2>
        <h2
          className="text-2xl pt-8 flex text-center justify-center dark:text-white"
        >
          Tenho conhecimentos nas seguintes tecnologias:
        </h2>
        <div
          className="text-xl flex pt-6 justify-center dark:text-white"
        >
          <div className="w-1/2 lg:px-8 pb-8 px-2">
            <h3 className="pb-4 text-2xl underline">Front-end:</h3>
            <li>Unix, Shell e Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TailWind</li>
            <li>JavaScript ES6</li>
            <li>JavaScript Assíncrono</li>
            <li>React</li>
            <li>React Hooks</li>
            <li>React Testing Library</li>
            <li>Redux</li>
            <li>Context API</li>
          </div>
          <div className="w-1/2 lg:px-8 px-2">
            <h3 className="pb-4 text-2xl underline">Back-end:</h3>
            <li>Docker</li>
            <li>SQL</li>
            <li>Node.js</li>
            <li>Arquitetura de Software MSC</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
