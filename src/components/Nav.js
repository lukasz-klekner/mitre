import { Stack } from '@mui/material'

import Tactics from './Tactics'

function Nav({ id, navigator }) {
  const tactics = navigator
    .map(({ name, tactics }) => {
      const items = tactics.filter((item) => item.category_id === id)

      return {
        name,
        tactics: items,
      }
    })
    .filter((item) => item.tactics.length > 0)

  return (
    <Stack direction='row'>
      {tactics.map((item) => (
        <Tactics key={item.name} name={item.name} tactics={item.tactics} />
      ))}
    </Stack>
  )
}

export default Nav
