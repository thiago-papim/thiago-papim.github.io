import React from 'react';

function Inicio() {
  return (
    <div className="lg:w-4/5 w-full fontHeader">
      <h1
        className="lg:text-6xl text-4xl text-center dark:text-white"
      >
        Bem vindo
        <br />
        Eu sou o Thiago!
      </h1>
      <div className=" flex flex-col items-center pt-20">
        <h2
          className="lg:text-2xl text-xl flex text-center
          justify-center lg:w-3/5 dark:text-white"
        >
          Tenho 30 anos e moro em São Caetano do Sul - SP
          <br />
          Em Outubro de 2022 resolvi começar um sonho de me tornar Desenvolvedor,
          e estudo atualmente na Trybe.
        </h2>
        <h2
          className="lg:text-2xl text-xl pt-8 flex text-center
          justify-center lg:w-3/5 dark:text-white"
        >
          Próximo ao final do meu curso, busco oportunidades para começar minha carreira
          na área da tecnologia, e expandir meus conhecimentos.
        </h2>
        <h2
          className="lg:text-2xl text-xl pt-8 flex text-center
          justify-center lg:w-3/5 dark:text-white"
        >
          Que tal ver mais sobre mim e ver meus projetos?
        </h2>
      </div>
    </div>
  );
}

export default Inicio;
