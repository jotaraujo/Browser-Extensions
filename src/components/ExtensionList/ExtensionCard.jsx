const ExtensionCard = ({ item }) => {
  return (
    <li>
      <img src={item.logo} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </li>
  )
}

export default ExtensionCard