import Button from "../common/Button"
import ToggleSwitch from "../common/ToggleSwitch"

const ExtensionCard = ({ item }) => {
  return (
    <div className="bg-white dark:bg-neutro-800 py-3 px-4 border border-neutro-200 dark:border-neutro-700 rounded-xl shadow-lg dark:shadow-none">
      <li className="flex items-start ">
        <img src={item.logo} alt={item.name} />
        <div className="mx-4">
          <h3 className="font-semibold text-neutro-900 dark:text-white">{item.name}</h3>
          <p className="text-sm text-neutro-600 dark:text-gray-400">{item.description}</p>
        </div>
      </li>
      <div className="flex justify-between mt-11">
        <Button />
        <ToggleSwitch />
      </div>
    </div>
  )
}

export default ExtensionCard