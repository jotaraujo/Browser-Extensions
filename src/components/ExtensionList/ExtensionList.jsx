import { useState } from "react"
import extensionsData from '../../data/data.json'
import ExtensionCard from "./ExtensionCard"

const ExtensionList = () => {
  const [extension, setExtension] = useState(extensionsData)

  return (
    <div>
      <ul>
        {extension.map((item) => (
          <ExtensionCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ExtensionList