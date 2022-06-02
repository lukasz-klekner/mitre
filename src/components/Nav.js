import { Box } from '@mui/material'
import Tactics from './Tactics'

function Nav({ id, name, navigator }) {
  //   const technics = navigator
  //     .flatMap((item) => item.tactics)
  //     .filter(({ category_id }) => category_id === id)
  //     .flatMap(({ techniques }) => techniques)

  const CATEGORIES = navigator.map(({ name }) => ({
    [name]: name,
  }))

  //   console.log(name, navigator)
  //   const TACTICS = navigator.map((item) => ({
  //     [item.name]: item.tactics.map(({ name }) => name),
  //   }))

  //   const allTechniques = Object.values(TACTICS).reduce((acc, current) => {
  //     console.log(current, 'curr')
  //   }, {})

  //   const siemka = navigator.filter((item) => item.tactics)
  //   console.log(siemka, 'siemka')

  //   const CATEGORIES = navigator.map(({ name }) => name)
  //   const TACTICS = navigator.map((item) => {
  //     // console.log(item)
  //     return {
  //       name: item.name,
  //       tactics: item.tactics
  //         .map(({ name }) => name)
  //         .filter(({ category_id }) => category_id === id),
  //     }
  //   })
  //   console.log(TACTICS)

  //   const allTechniques = Object.values(TACTICS).reduce((acc, current) => {
  //     console.log(current, 'curr')
  //   }, {})

  //   const allCategories = navigator.reduce((acc, current) => {
  //     const data = current.tactics
  //       .filter(({ category_id }) => category_id === id)
  //       .flatMap(({ techniques }) => techniques)
  //     const result = {
  //       ...acc,
  //       name: current.name,
  //       [current.name]: data,
  //     }

  //     return result
  //   }, [])

  const tactics = navigator
    .map(({ name, tactics }) => {
      // const items = tactics.map((item) => console.log(items))

      const items = tactics.filter((item) => item.category_id === id)

      return {
        name,
        tactics: items,
      }
    })
    .filter((item) => item.tactics.length > 0)

  //   console.log(name, allCategories)
  //   console.log(CATEGORIES)

  //   for (const key in allCategories) {
  //     console.log(allCategories[key])
  //   }
  //   console.log(navigator.map((item) => console.log(item)))
  //   console.log(allCategories['In']?.map((item) => item.name))

  //   console.log(tactics)
  return (
    <Box>
      <div>
        {tactics.map((item) => (
          <Tactics name={item.name} tactics={item.tactics} />
        ))}
        {/* {allCategories.map((item) => (
          <div>{item.name}</div>
        ))} */}
        {/* {CATEGORIES.map((item, index) => (
          <Tactics tactis={navigator[index].tactics} navigator={navigator} />
        ))} */}
      </div>
    </Box>
  )
}

export default Nav
