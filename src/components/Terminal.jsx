import { useState, useRef, useEffect } from 'react'

const commands = {
  '/projetos': `
🚀 Projetos em Destaque:

🖥️ Frontend:
• Finanhome – Site institucional para empresa financeira
• Bragi – Site estratégico para construtora
• Energe Engenharia – Sistema completo com geração de PDF
• Trybe Tunes – App de músicas interativo
• Online Store – Loja online integrada à API do Mercado Livre
• Trivia – Jogo com React + Redux
• Recipes App – Aplicação completa de receitas

⚙️ Backend:
• Trybe Futebol Clube – API com TypeScript e Sequelize
• Blogs API – Sistema CRUD com autenticação JWT
• Store Manager – API RESTful de vendas
• Trybe Smith – API CRUD com TypeScript
• MySQL All for One – Desafios avançados SQL
• MySQL One for All – Normalização de banco de dados

📱 Mobile:
• Energe Mobile – Aplicação offline com React Native
`,

  '/habilidades': `
💡 Habilidades Técnicas:

🎨 Frontend:
• React
• JavaScript
• Tailwind CSS
• Material UI
• Bootstrap
• Redux
• Vite

🛠 Backend:
• Node.js
• Express
• TypeScript
• Sequelize
• JWT
• MySQL

📱 Mobile:
• React Native
• Expo
• Expo Router
• NativeWind
• React Native Paper

🧪 Testes:
• Jest
• Mocha
• Chai
• Cypress
`,

  '/sobre': `
👋 Thiago Nascimento

Desenvolvedor Full Stack apaixonado por tecnologia e por criar sistemas inteligentes.

Experiência com:
• Frontend moderno e responsivo
• APIs seguras e performáticas
• Banco de dados estruturado
• Aplicações mobile offline
• Geração de relatórios em PDF
• Sistemas com sincronização de dados

Foco em entregar soluções completas, escaláveis e estratégicas.
`,

  '/help': `
📌 Comandos disponíveis:

/projetos  → Lista meus principais projetos
/habilidades → Tecnologias que utilizo
/sobre → Sobre mim
/clear → Limpar terminal
`,
}

export default function Terminal() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim()

      if (command === '/clear') {
        setHistory([])
        setInput('')
        return
      }

      const output =
        commands[command] || 'Comando não reconhecido. Digite /help'

      setHistory((prev) => [
        ...prev,
        { type: 'input', text: command },
        { type: 'output', text: output },
      ])

      setInput('')
    }
  }

  return (
    <div className="w-full lg:max-w-300 min-h-screen flex justify-center pt-30">
      {' '}
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden h-150 max-w-[90%] w-full">
        {/* Header estilo macOS */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-4 text-sm text-slate-400 font-medium">
            terminal
          </span>
        </div>

        {/* Corpo */}
        <div className="p-6 h-100 overflow-y-auto font-mono text-sm text-slate-200">
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.type === 'input' && (
                <div>
                  <span className="text-emerald-400">thiago@portfolio:~$</span>{' '}
                  {item.text}
                </div>
              )}
              {item.type === 'output' && (
                <pre className="whitespace-pre-wrap text-slate-300 mt-1">
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <span className="text-emerald-400">thiago@portfolio:~$</span>
            <input
              className="bg-transparent outline-none ml-2 flex-1 text-slate-100 caret-emerald-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
