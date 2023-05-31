import React from 'react';

function Sobre() {
  return (
    <div className="w-3/5 fontHeader">
      <h1
        className="text-7xl text-white text-center"
      >
        Um Pouco sobre mim
      </h1>
      <div className=" flex flex-col items-center pt-16">
        <h2
          className="text-white text-2xl flex text-center w-3/5"
        >
          Meu nome é Thiago Papim, tenho 30 anos e moro em São Caetano do Sul - SP
          <br />
          Em Outubro de 2022 resolvi começar um sonho de me tornar Desenvolvedor,
          e estudo atualmente na Trybe.
        </h2>
        <h2
          className="text-white text-2xl pt-12 flex text-center w-3/5"
        >
          Próximo ao final do curso, busco oportunidades para começar minha carreira
          na área da tecnologia, e expandir meus conhecimentos.
        </h2>
        <h2
          className="text-white text-2xl pt-12 flex text-center justify-center"
        >
          Tenho conhecimentos nas seguintes tecnologias:
        </h2>
      </div>
    </div>
  );
}

export default Sobre;
