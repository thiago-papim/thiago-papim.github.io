import Contato from './components/Contato'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Skills from './components/Skills'
import Terminal from './components/Terminal'

export default function App() {
  return (
    <div className="dark:bg-[#0F1C2E] bg-[#cee8ff] flex flex-col w-full items-center">
      <Header />
      <Hero />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}
