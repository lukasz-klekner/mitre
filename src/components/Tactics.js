import { Box } from '@mui/material'
import Techniques from './Techniques'

function Tactics({ name, tactics, navigator }) {
  const techniques = tactics.map(({ name, techniques }) => ({
    name,
    techniques,
  }))

  return (
    <>
      <div>{name}</div>
      {techniques.map((item) => (
        <Techniques name={item.name} techniques={item.techniques} />
      ))}
    </>
  )
}

export default Tactics
