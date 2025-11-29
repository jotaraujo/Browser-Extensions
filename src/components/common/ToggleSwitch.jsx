const ToggleSwitch = ({ isChecked, onToggle, id }) => {
  return (
    <label htmlFor={id} className="relative inline-block w-12 h-6 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="sr-only peer"
        checked={isChecked}
        onChange={onToggle} />
      <span className="absolute inset-0 bg-gray-300 dark:bg-neutro-600 rounded-full focus:ring-1 focus:ring-vermelho-700 transition-colors duration-300 peer-checked:bg-vermelho-500"/>
      <span className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 ease-in-out shadow peer-checked:translate-x-6" />
    </label>
  )
}

export default ToggleSwitch