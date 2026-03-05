import { AnimatePresence, motion } from 'framer-motion'
import Contato from './components/Contato'
import { useTerminal } from './components/context/TerminalContext'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Skills from './components/Skills'
import Terminal from './components/Terminal'
import BtnWhatsapp from './components/ui/BtnWhatsapp'

export default function App() {
  const { terminalMode } = useTerminal()

  return (
    <div className="dark:bg-[#1f2b3e] bg-[#cee8ff] flex flex-col w-full items-center">
      <Header />
      <BtnWhatsapp />

      <AnimatePresence mode="wait">
        {terminalMode ? (
          <motion.div
            className="w-full lg:max-w-280 flex justify-center"
            key="terminal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <Terminal />
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <Hero />
            <Skills />
            <Projetos />
            <Contato />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
