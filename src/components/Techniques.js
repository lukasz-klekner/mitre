import { Typography, styled } from '@mui/material'

import Card from './Card'
import useSearchContext from '../hooks/useSearchContext'

const S = {
  Typography: styled(Typography)(() => ({
    height: '90px',
    width: '150px',
    paddingTop: '30px',
    fontWeight: 'bold',
  })),
}

const Techniques = ({ name, techniques }) => {
  const { searchTerm } = useSearchContext()

  const cardTechniques =
    searchTerm !== ''
      ? techniques.filter((technique) =>
          technique.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : techniques

  return (
    <div>
      <S.Typography>{name}</S.Typography>
      {cardTechniques.map(({ description, name }) => (
        <Card key={name} name={name} description={description} />
      ))}
    </div>
  )
}

export default Techniques
