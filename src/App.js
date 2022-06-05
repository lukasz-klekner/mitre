import Search from './components/Search'
import Tabs from './components/Tabs'

import './App.css'
import useLogic from './useApp'

const App = () => {
  const { categories, navigator } = useLogic()

  return (
    <div>
      <Search />
      <Tabs categories={categories} navigator={navigator} />
    </div>
  )
}

export default App
