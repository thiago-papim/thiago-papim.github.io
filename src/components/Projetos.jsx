import { arrBackend, arrFrontend, arrMobile } from '@/utils/projetos'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { useState } from 'react'

export default function Projetos() {
  const [categoria, setCategoria] = useState('frontend')

  const projetos = {
    frontend: arrFrontend,
    backend: arrBackend,
    mobile: arrMobile,
  }

  return (
    <div
      className="font-montserrat flex flex-col items-center w-full scroll-mt-20"
      id="projetos"
    >
      <h1 className="text-4xl font-light dark:text-white my-8 text-center">
        Meus Projetos
      </h1>
      <div className="flex gap-4 mb-10">
        {['frontend', 'backend', 'mobile'].map((item) => (
          <button
            key={item}
            onClick={() => setCategoria(item)}
            className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
        ${
          categoria === item
            ? 'bg-[#3D5A80] text-white'
            : 'bg-[#acc2ef] dark:bg-[#0F1C2E] dark:text-white'
        }
        hover:scale-105
      `}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-10 lg:max-w-250">
        {projetos[categoria].map((projeto) => (
          <Dialog key={projeto.name}>
            <DialogTrigger asChild>
              <div
                className="
                    flex flex-col items-start 
                    dark:bg-[#0F1C2E] bg-[#acc2ef] p-4 rounded-lg 
                    w-[90%] sm:w-70 
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-black/20
                    "
              >
                <h2 className="text-lg font-bold mb-3 dark:text-white">
                  {projeto.name}
                </h2>

                <p className="text-sm dark:text-[#acc2ef]">
                  {projeto.description.length > 150
                    ? projeto.description.slice(0, 150) + '...'
                    : projeto.description}
                </p>

                {projeto.stacks && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {projeto.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="dark:bg-[#3D5A80] bg-[#cee8ff] dark:text-[#e0e0e0] text-xs font-semibold py-1 px-2 rounded"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </DialogTrigger>

            <DialogContent className="dark:bg-[#374357] bg-[#acc2ef] dark:text-[#e0e0e0] border-0 max-h-[90%] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{projeto.name}</DialogTitle>
              </DialogHeader>
              {projeto.img && (
                <img
                  src={projeto.img}
                  alt={projeto.name}
                  className="max-h-80 rounded mx-auto"
                />
              )}
              <p className="mt-4">{projeto.description}</p>
              {projeto.stacks && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {projeto.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="dark:bg-[#3D5A80] bg-[#cee8ff] dark:text-[#e0e0e0] text-xs font-semibold py-1 px-2 rounded"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={
                  projeto.url
                    ? projeto.url
                    : 'https://api.whatsapp.com/send?phone=5511949160023&text=Ol%C3%A1,%20venho%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!'
                }
                target="_blank"
                className={`mt-2 flex items-center justify-center
                            px-4 py-2 rounded-lg
                            dark:bg-[#3D5A80] bg-[#cee8ff] dark:text-white text-sm font-medium
                            transition-all duration-300 ease-out
                            dark:hover:bg-[#4d648d] hover:bg-[#4d648d]
                            active:scale-95`}
              >
                {projeto.url ? 'Repositório' : 'Solicitar acesso'}
              </a>
              {projeto.site && (
                <a
                  href={projeto.site}
                  target="_blank"
                  className="flex items-center justify-center
                            px-4 py-2 rounded-lg
                            dark:bg-[#3D5A80] bg-[#cee8ff] dark:text-white text-sm font-medium
                            transition-all duration-300 ease-out
                            dark:hover:bg-[#4d648d] hover:bg-[#4d648d]
                            active:scale-95"
                >
                  Site
                </a>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
