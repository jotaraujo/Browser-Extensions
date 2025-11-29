import { useState } from "react"
import extensionsData from '../../data/data.json'
import ExtensionCard from "./ExtensionCard"

const ExtensionList = () => {
  const [extension, setExtension] = useState(extensionsData)

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
        {extension.map((item) => (
          <ExtensionCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ExtensionList