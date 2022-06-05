import { forwardRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'
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

const Techniques = ({ name, techniques }, ref) => {
  const { searchTerm } = useSearchContext()

  const cardTechniques =
    searchTerm !== ''
      ? techniques.filter((technique) =>
          technique.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : techniques

  return (
    <div ref={ref}>
      <S.Typography>{name}</S.Typography>
      {cardTechniques.map(({ description, id, name }, index) => (
        <Draggable key={name} draggableId={name} index={index}>
          {(provided) => (
            <Card
              description={description}
              id={id}
              name={name}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            />
          )}
        </Draggable>
      ))}
    </div>
  )
}

export default forwardRef(Techniques)
