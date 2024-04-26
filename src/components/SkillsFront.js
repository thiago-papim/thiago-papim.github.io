/* eslint-disable max-len */
import React from 'react';
import logoHtml from '../images/logo-html.png';
import logoCss from '../images/logo-css.png';
import logoMui from '../images/logo-mui.png';
import logoBootstrap from '../images/logo-bootstrap.png';
import logoJavaScript from '../images/logo-js.png';
import logoReact from '../images/logo-react.png';
import logoTailwind from '../images/logo-tailwind.png';

function SkillsFront() {
  const front = [
    {
      nome: 'HTML',
      imagem: logoHtml,
    },
    {
      nome: 'CSS',
      imagem: logoCss,
    },
    {
      nome: 'JavaScript',
      imagem: logoJavaScript,
    },
    {
      nome: 'React',
      imagem: logoReact,
    },
    {
      nome: 'Tailwind',
      imagem: logoTailwind,
    },
    {
      nome: 'Material UI',
      imagem: logoMui,
    },
    {
      nome: 'BootsTrap',
      imagem: logoBootstrap,
    },
  ];
  return (
    <div
      className="flex flex-col items-center lg:w-[400px] w-full lg:min-h-[420px] text-white mt-5
      rounded-3xl pb-5 lg:mr-10"
      style={ { boxShadow: '0 0 50px rgba(0, 0, 0, 0.9)' } }
    >
      <p
        style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 600 } }
        className="py-4 text-[#64b5f6] text-center lg:text-left lg:text-[32px] md:text-[25px] text-[20px]"
      >
        Front-end
      </p>
      <div className="flex flex-wrap justify-center font-[Poppins]">
        {
          front.map((e, i) => (
            <div
              className="flex justify-center items-center
              border-1 rounded-lg m-2 md:w-40 md:h-16 w-36 h-12 bg-white text-black"
              key={ i }
            >
              <img
                className="md:w-12 md:h-12 w-8 h-8"
                src={ e.imagem }
                alt={ e.nome }
              />
              <p className="pl-2">{e.nome}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SkillsFront;
