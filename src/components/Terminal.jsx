import { useState, useRef, useEffect } from 'react'

const commands = {
  '/projetos': `
Projetos:

• Sistema de Engenharia com geração de PDF
• Painel Administrativo com MUI
• App Kotlin offline com Room
• Sistema com upload e sincronização
`,
  '/habilidades': `
Habilidades:

• React
• Node.js
• MySQL
• Docker
• Kotlin
• Tailwind
`,
  '/sobre': `
Thiago Nascimento
Desenvolvedor Full Stack focado em sistemas inteligentes.
`,
  '/help': `
Comandos disponíveis:

/projetos
/habilidades
/sobre
/clear
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
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
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
        <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm text-slate-200">
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
