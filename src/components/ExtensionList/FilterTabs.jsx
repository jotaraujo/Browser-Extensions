const FilterTabs = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto mb-7">
      <h1 className="text-3xl font-bold text-neutro-800 dark:text-neutro-100">Extensions List</h1>
      <div className="">
        <button className="bg-neutro-100 dark:bg-neutro-800 mr-2 px-4 py-1 border border-neutro-400 dark:border-neutro-700 dark:text-neutro-200 rounded-3xl cursor-pointer hover:bg-vermelho-500 transition-colors duration-300 hover:text-neutro-100 dark:hover:text-neutro-900 focus:ring-2 focus:ring-vermelho-500 dark:focus:bg-neutro-600 dark:focus:hover:bg-vermelho-500 dark:focus:border-neutro-900">All</button>
        <button className="bg-neutro-100 dark:bg-neutro-800 mr-2 px-4 py-1 border border-neutro-400 dark:border-neutro-700 dark:text-neutro-200 rounded-3xl cursor-pointer hover:bg-vermelho-500 transition-colors duration-300 hover:text-neutro-100 dark:hover:text-neutro-900 focus:ring-2 focus:ring-vermelho-500 dark:focus:bg-neutro-600 dark:focus:hover:bg-vermelho-500 dark:focus:border-neutro-900">Active</button>
        <button className="bg-neutro-100 dark:bg-neutro-800 px-4 py-1 border border-neutro-400 dark:border-neutro-700 dark:text-neutro-200 rounded-3xl cursor-pointer hover:bg-vermelho-700 transition-colors duration-300 hover:text-neutro-100 dark:hover:text-neutro-900 focus:ring-2 focus:ring-vermelho-700 dark:focus:bg-neutro-600 dark:focus:hover:bg-vermelho-700 dark:focus:border-neutro-900">Inactive</button>
      </div>
    </div>
  )
}

export default FilterTabs