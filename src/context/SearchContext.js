import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
