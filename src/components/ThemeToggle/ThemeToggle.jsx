import { useTheme } from './../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className='p-2 rounded-xl hover:bg-neutro-200 dark:hover:bg-neutro-700 transition-color duration-300 cursor-pointer' aria-label='Alternar tema da aplicação'>
      {theme === 'light' ? (
        <img src="/images/icon-moon.svg" alt="Logo do tema escuro" />
      ) : (
        <img src='/images/icon-sun.svg' alt='Logo do tema claro'/>
      )}
    </button>
  )
}

export default ThemeToggle