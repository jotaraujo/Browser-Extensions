const Button = ({ children, onClick }) => {
  return (
    <button className=" dark:bg-neutro-800 text-neutro-800 dark:text-neutro-100 px-3 py-1 border border-neutro-400 dark:border-neutro-700 rounded-2xl cursor-pointer outiline-none focus:ring-2 focus:ring-vermelho-700 dark:focus:ring-vermelho-500 dark:focus:bg-neutro-600 dark:focus:border-2 dark:focus:border-neutro-800 hover:bg-vermelho-700 dark:hover:bg-vermelho-500 dark:hover:text-neutro-800 dark:focus:hover:bg-vermelho-500 hover:text-neutro-100 transition-colors duration-300 dark:hover" onClick={onClick}>
      Remove
    </button>
  )
}

export default Button