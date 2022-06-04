import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SearchContextProvider from './context/SearchContext'

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  root
)
