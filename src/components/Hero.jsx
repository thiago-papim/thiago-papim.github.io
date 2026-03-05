import BtnHeader from './ui/BtnHeader'
import { Highlighter } from '@/components/ui/highlighter'
import Logo from '../assets/images/logo-letra.png'
import { TextAnimate } from './ui/text-animate'
import { TypingAnimation } from './ui/typing-animation'
import fotoPerfil from '../assets/images/foto-perfil.png'
import linkedIn from '../assets/images/linkedin.png'
import gitHub from '../assets/images/github.png'
import pdf from '../assets/images/pdf.png'
import handleDownload from '@/utils/DownloadPdf'

export default function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center px-10 pt-30 w-full lg:max-w-300 lg:gap-20"
      id="inicio"
    >
      <div className="flex flex-col justify-center order-1 lg:order-0">
        <p className="font-montserrat text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-center lg:text-left">
          Olá, eu sou o <br />
          Thiago Papim! 👋
        </p>
        <p className="p-0  m-0 font-montserrat text-md sm:text-xl font-light dark:text-white/50 text-center lg:text-left">
          Desenvolvedor{' '}
          <TypingAnimation
            loop
            words={['Front-end', 'Back-end', 'Mobile', 'Full-stack']}
            duration={200}
          />
        </p>
        <div className="flex gap-3 items-center justify-center lg:justify-start">
          <a
            href="https://www.linkedin.com/in/thiago-papim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10" src={linkedIn} alt="foto-perfil" />
          </a>
          <a
            href="https://github.com/thiago-papim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10" src={gitHub} alt="foto-perfil" />
          </a>
          <button onClick={handleDownload} className="cursor-pointer">
            <img className="w-10" src={pdf} alt="foto-perfil" />
          </button>
        </div>
        <p className="font-montserrat text-md md:text-lg font-light lg:text-xl lg:text-left text-center dark:text-white lg:max-w-lg mt-10">
          Uma pessoa apaixonada por ajudar os outros, e acredito que a
          tecnologia seja uma poderosa aliada nessa missão de fazer a diferença
          na vida das pessoas! Com 33 anos e residindo em São Caetano do Sul -
          SP, em outubro de 2022 decidi realizar meu sonho de me tornar um
          Desenvolvedor. Completei com sucesso o curso da Trybe em novembro de
          2023, adquirindo conhecimentos valiosos e complementando meu
          aprendizado com estudos pessoais.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-52 md:w-72 md:h-72 lg:w-86 lg:h-86 border-4 p-1 border-[#acc2ef] rounded-full"
          src={fotoPerfil}
          alt="foto-perfil"
        />
      </div>
    </div>
  )
}
