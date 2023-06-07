import React, { useEffect, useState } from 'react';

function Inicio() {
  const [text, setText] = useState('');
  const fullText = 'BBem vindo,<br />Eu sou o Thiago!';
  const typingSpeed = 70; // Velocidade da digitação em milissegundos

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
      }

      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [fullText]);

  const cursorStyle = {
    opacity: text === fullText ? 0 : 1,
  };
  return (
    <div className="lg:w-4/5 w-full fontHeader">
      <h1
        className="lg:text-6xl text-4xl text-center dark:text-white"
      >
        <span dangerouslySetInnerHTML={ { __html: text } } />
        <span
          className="inline-block piscar"
          style={ cursorStyle }
        >
          |

        </span>
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
