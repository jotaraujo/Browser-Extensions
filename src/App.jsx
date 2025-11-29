import Header from './components/Header/Header'
import FilterTabs from './components/ExtensionList/FilterTabs'
import ExtensionList from './components/ExtensionList/ExtensionList';
import { ThemeProvider } from './context/ThemeProvider';


function App() {
  return (
    <ThemeProvider >
      <div className='bg-linear-to-b from-neutro-200 to-neutro-300 dark:from-neutro-950 dark:to-neutro-900 px-5 md:px-60 py-15 h-screen overflow-y-auto font-noto'>
        <Header />
        <FilterTabs />
        <ExtensionList />
      </div>
    </ThemeProvider>
  )
}

export default App
