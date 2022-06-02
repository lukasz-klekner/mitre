import { useState, useEffect } from 'react'

import Tabs from './components/Tabs'

import './App.css'

const BASE_URL = 'http://localhost:8000'
const endpoints = {
  categories: '/categories',
  navigator: '/navigator',
}

function App() {
  const [categories, setCategories] = useState([])
  const [navigator, setNavigator] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoints.categories}`)
        const data = await response.json()

        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoints.navigator}`)
        const data = await response.json()

        setNavigator(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return <Tabs categories={categories} navigator={navigator} />
}

export default App
