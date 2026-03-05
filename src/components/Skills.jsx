import { back, front, outros } from '@/utils/skills'

export default function Skills() {
  return (
    <div
      className="font-montserrat w-full flex flex-col items-center scroll-mt-20"
      id="skills"
    >
      <h1 className="text-4xl font-light dark:text-white my-8 text-center">
        Minhas Skills
      </h1>
      <div className="w-[90%] max-w-200 flex flex-col items-center border-0 dark:bg-[#0F1C2E] bg-[#acc2ef] lg:p-6 p-3 rounded-4xl mb-5 transition-all duration-500">
        <p className="font-montserrat text-md sm:text-xl dark:text-[#acc2ef] font-semi-bold mb-6">
          Front-end
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {front.map((skill) => (
            <div
              key={skill.nome}
              className="flex flex-col items-center dark:bg-[#374357] bg-[#cee8ff] p-2 rounded-lg"
            >
              <img
                className="lg:w-16 lg:h-16 w-12 h-12 hover:pb-2 transition-all duration-500"
                src={skill.imagem}
                alt={skill.nome}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] max-w-200 flex flex-col items-center border-0 dark:bg-[#0F1C2E] bg-[#acc2ef] lg:p-6 p-3 rounded-4xl mb-5 transition-all duration-500">
        <p className="font-montserrat text-md sm:text-xl dark:text-[#acc2ef] font-semi-bold mb-6">
          Back-end
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {back.map((skill) => (
            <div
              key={skill.nome}
              className="flex flex-col items-center dark:bg-[#1f2b3e] bg-[#cee8ff] p-2 rounded-lg"
            >
              <img
                className="lg:w-16 lg:h-16 w-12 h-12 hover:pb-2 transition-all duration-500"
                src={skill.imagem}
                alt={skill.nome}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] max-w-200 flex flex-col items-center border-0 dark:bg-[#0F1C2E] bg-[#acc2ef] lg:p-6 p-3 rounded-4xl mb-5 transition-all duration-500">
        <p className="font-montserrat text-md sm:text-xl dark:text-[#acc2ef] font-semi-bold mb-6">
          Demais
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {outros.map((skill) => (
            <div
              key={skill.nome}
              className="flex flex-col items-center dark:bg-[#374357] bg-[#cee8ff] p-2 rounded-lg"
            >
              <img
                className="lg:w-16 lg:h-16 w-12 h-12 hover:pb-2 transition-all duration-500"
                src={skill.imagem}
                alt={skill.nome}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
