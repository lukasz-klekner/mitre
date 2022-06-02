import { Box } from '@mui/material'
import Card from './Card'

function Techniques({ name, techniques }) {
  return (
    <>
      <div>{name}</div>
      {techniques.map((item) => (
        <Card name={item.name} />
      ))}
    </>
  )
}

export default Techniques
