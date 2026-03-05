import { createContext, useContext, useState } from 'react'

const TerminalContext = createContext()

const TerminalProvider = ({ children }) => {
  const [terminalMode, setTerminalMode] = useState(false)

  const openTerminal = () => setTerminalMode(!terminalMode)
  const closeTerminal = () => setTerminalMode(false)
  const toggleTerminal = () => setTerminalMode((prev) => !prev)

  return (
    <TerminalContext.Provider
      value={{ terminalMode, openTerminal, closeTerminal, toggleTerminal }}
    >
      {children}
    </TerminalContext.Provider>
  )
}

const useTerminal = () => useContext(TerminalContext)

export { TerminalProvider, useTerminal }
