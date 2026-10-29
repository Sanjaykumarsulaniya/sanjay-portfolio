import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle({ theme, onClick }) { return <button className="icon-button" onClick={onClick} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button> }
