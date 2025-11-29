import ThemeToggle from "../ThemeToggle/ThemeToggle"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="bg-white dark:bg-neutro-800 flex justify-between items-center p-4 rounded-xl shadow-lg max-w-6xl mx-auto mb-15 transition-colors duration-300">
      <div className="dark:text-white">
        <Logo className="h-9 w-auto transition-all duration-300" />
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header