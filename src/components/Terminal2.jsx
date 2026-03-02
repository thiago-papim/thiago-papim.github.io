import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Thiago Papim Terminal v1.0' },
    { type: 'system', text: 'Digite /help para ver os comandos.' },
  ])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const commands = {
    '/help': `
Comandos disponíveis:

/sobre
/projetos
/habilidades
/contato
/clear
    `,

    '/sobre': `
Olá 👋
Sou Thiago Papim,
Desenvolvedor Frontend focado em React,
UI moderna e performance.
    `,

    '/projetos': `
Projetos:

• Portfolio Terminal
• Dashboard React
• Landing Page SaaS
• Sistema de Tarefas
    `,

    '/habilidades': `
Habilidades:

• React
• JavaScript
• Tailwind
• Vite
• Node.js
    `,

    '/contato': `
Contato:

Email: thiago@email.com
LinkedIn: linkedin.com/in/thiago
    `,
  }

  function handleCommand(cmd) {
    if (cmd === '/clear') {
      setHistory([])
      return
    }

    if (commands[cmd]) {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmd },
        { type: 'ai', text: commands[cmd] },
      ])
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmd },
        {
          type: 'ai',
          text: `Comando não reconhecido.
Digite /help para ver as opções.`,
        },
      ])
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    handleCommand(input.trim())
    setInput('')
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="max-w-3xl mx-auto">
        {history.map((item, index) => (
          <div key={index} className="mb-2 whitespace-pre-line">
            {item.type === 'user' && (
              <p>
                <span className="text-green-500">$</span> {item.text}
              </p>
            )}
            {item.type !== 'user' && <p>{item.text}</p>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center mt-4">
          <span className="text-green-500 mr-2">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none flex-1"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  )
}
