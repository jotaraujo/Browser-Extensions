const Button = ({ children, onClick }) => {
  return (
    <button className="bg-neutro-800 text-neutral-200 px-4 py-1 border border-neutro-700 rounded-2xl cursor-pointer outilne-none focus:ring-1 focus:ring-vermelho-500 hover:bg-vermelho-400 transition-colors duration-500 hover:border-vermelho-500" onClick={onClick}>
      Remove
    </button>
  )
}

export default Button