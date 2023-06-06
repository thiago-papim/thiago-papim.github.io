import React from 'react';
import imgTrybeTunes from '../images/projetos/trybetunes.png';

function Frontend() {
  const projetosFront = [
    {
      name: 'Trybe Tunes',
      url: '//thiago-papim.github.io/trybetunes',
      image: imgTrybeTunes,
      description: `Este projeto foi desenvolvido para aprimoramento de
      requisições para API e utilização de React Router. Utilizando a api
      do Spotify para pesquisar e favoritar músicas`,
      repositório: '//github.com/thiago-papim/trybetunes',
    },
  ];
  return (
    <div className="lg:w-4/5 w-full h-[100%] p-8 fontHeader dark:text-white">
      <div>
        { projetosFront.map((project) => (
          <div
            className="lg:w-[500px] flex flex-col items-center"
            key={ project }
          >
            <h1
              className="text-center text-3xl"
            >
              { project.name }
            </h1>
            <img
              className="lg:w-[400px] w-60"
              src={ project.image }
              alt={ project.name }
            />
            <h1 className="text-center text-xl">{ project.description }</h1>
            <div className="flex justify-around">
              <a
                className="w-[200px] p-3"
                href={ project.url }
                target="_blank"
                rel="noreferrer"
              >
                <h1
                  className="text-center btnHeader text-xl"
                >
                  SITE
                </h1>
              </a>
              <a
                className="w-[200px] p-3"
                href={ project.repositório }
                target="_blank"
                rel="noreferrer"
              >
                <h1
                  className="text-center btnHeader text-xl"
                >
                  GITHUB
                </h1>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frontend;
