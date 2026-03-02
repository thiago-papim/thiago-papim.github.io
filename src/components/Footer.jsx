import BtnHeader from './ui/BtnHeader'

export default function Footer() {
  return (
    <div className="font-montserrat font-light w-full flex flex-col items-center mb-5 border-t-2 pt-5">
      <div className="flex flex-col sm:flex-row mb-5">
        <BtnHeader nome="Início" section="inicio" />
        <BtnHeader nome="Skills" section="skills" color="black" />
        <BtnHeader nome="Projetos" section="projetos" color="black" />
        <BtnHeader nome="Contato" section="contato" />
      </div>
      <p className="text-center">
        © 2026 Thiago Papim. Todos os direitos reservados.
      </p>
    </div>
  )
}
