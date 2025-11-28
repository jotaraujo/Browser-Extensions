import Header from './components/Header/Header'
import FilterTabs from './components/ExtensionList/FilterTabs'
import ExtensionList from './components/ExtensionList/ExtensionList';


function App() {
  return (
    <div className='bg-linear-to-b from-neutro-0 to-neutro-100 dark:from-slate-950 dark:to-indigo-950 px-60 py-15 h-screen overflow-y-auto font-noto'>
      <Header />
      <FilterTabs />
      <ExtensionList />
    </div>
  )
}

export default App
