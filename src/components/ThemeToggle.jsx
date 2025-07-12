import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
      {dark ? <Sun className="text-yellow-500" /> : <Moon className="text-blue-800" />}
    </button>
  )
}
