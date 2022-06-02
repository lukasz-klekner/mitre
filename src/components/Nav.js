import { Stack } from '@mui/material'

import Tactics from './Tactics'

const Nav = ({ id, navigator }) => {
  const tactics = navigator
    .map(({ name, tactics }) => {
      const items = tactics.filter(({ category_id }) => category_id === id)

      return {
        name,
        tactics: items,
      }
    })
    .filter((item) => item.tactics.length > 0)

  return (
    <Stack direction='row'>
      {tactics.map(({ name, tactics }) => (
        <Tactics key={name} name={name} tactics={tactics} />
      ))}
    </Stack>
  )
}

export default Nav
