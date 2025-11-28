import Button from "../common/Button"
import ToggleSwitch from "../common/ToggleSwitch"

const ExtensionCard = ({ item }) => {
  return (
    <div className="bg-neutro-800 py-3 px-4 border border-neutro-700 rounded-xl my-4">
      <li className="flex items-start ">
        <img src={item.logo} alt={item.name} />
        <div className="mx-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
      </li>
      <div className="flex justify-between px-4 mt-15">
        <Button />
        <ToggleSwitch />
      </div>
    </div>
  )
}

export default ExtensionCard