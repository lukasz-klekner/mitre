import { useState, useEffect } from 'react'

import { fetchData } from './service/apiRequests'
import { endpoints } from './service/endpoint'

const useAppLogic = () => {
  const [categories, setCategories] = useState([])
  const [navigator, setNavigator] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        setCategories(await fetchData(endpoints.categories))
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        setNavigator(await fetchData(endpoints.navigator))
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return {
    categories,
    navigator,
  }
}

export default useAppLogic
