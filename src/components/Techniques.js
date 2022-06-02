import { Typography } from '@mui/material'
import Card from './Card'

function Techniques({ name, techniques }) {
  return (
    <div>
      <Typography>{name}</Typography>
      {techniques.map((item) => (
        <Card key={item.name} name={item.name} />
      ))}
    </div>
  )
}

export default Techniques
