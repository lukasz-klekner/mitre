import { BASE_URL } from './endpoint'

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export const updateTechniques = async (endpoint, body) => {
  try {
    await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.error(error)
  }
}
