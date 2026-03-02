import BtnHeader from './ui/BtnHeader'
import Logo from '../assets/images/logo-letra.png'
import MenuIcon from '@mui/icons-material/Menu'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { useState } from 'react'
import { Drawer } from '@mui/material'

export default function Header() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  return (
    <div className="flex w-full bg-transparent h-16 text-white justify-center fixed z-40">
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="top"
        PaperProps={{
          className:
            'rounded-b-3xl dark:bg-[#0f172a]/80 bg-[#e6ecff]/80 backdrop-blur-lg',
        }}
      >
        <div className="flex flex-col px-6 py-6 dark:bg-[#0f172a]/80 bg-[#e6ecff]/80 dark:text-white">
          <div className="flex justify-between items-center mb-8">
            <img src={Logo} alt="Logo" className="w-10 h-10" />

            <button
              onClick={toggleDrawer(false)}
              className="text-2xl font-light hover:rotate-90 transition duration-300"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-3 text-xl font-semibold uppercase tracking-wider">
            <BtnHeader
              nome="Início"
              section="inicio"
              onClick={toggleDrawer(false)}
            />
            <BtnHeader
              nome="Skills"
              section="skills"
              onClick={toggleDrawer(false)}
            />
            <BtnHeader
              nome="Projetos"
              section="projetos"
              onClick={toggleDrawer(false)}
            />
            <BtnHeader
              nome="Contato"
              section="contato"
              onClick={toggleDrawer(false)}
            />
          </div>

          <div className="mt-auto pt-10 flex justify-between items-center">
            <span className="text-sm opacity-60">© 2026 Thiago</span>
            <AnimatedThemeToggler />
          </div>
        </div>
      </Drawer>
      <div
        className="w-[90%] lg:max-w-250 flex justify-between items-center px-5 py-7 z-10
         bg-[#0f1120]/50 backdrop-blur-md mt-5
         rounded-full border-gray-500"
      >
        {' '}
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <div className="hidden md:flex">
          <BtnHeader nome="Início" section="inicio" />
          <BtnHeader nome="Skills" section="skills" />
          <BtnHeader nome="Projetos" section="projetos" />
          <BtnHeader nome="Contato" section="contato" />
          <AnimatedThemeToggler />
        </div>
        <div className="md:hidden" anchor="top">
          <MenuIcon onClick={toggleDrawer(true)} />
        </div>
      </div>
    </div>
  )
}
