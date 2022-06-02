import { Typography, styled } from '@mui/material'
import Card from './Card'

const S = {
  Typography: styled(Typography)(() => ({
    height: '90px',
    width: '150px',
    paddingTop: '30px',
    fontWeight: 'bold',
  })),
}

const Techniques = ({ name, techniques }) => (
  <div>
    <S.Typography>{name}</S.Typography>
    {techniques.map(({ description, name }) => (
      <Card key={name} name={name} description={description} />
    ))}
  </div>
)

export default Techniques
