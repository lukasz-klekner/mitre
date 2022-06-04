import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Typography, styled } from '@mui/material'

import Techniques from './Techniques'

const S = {
  Container: styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    border: '1px solid black',
  })),

  Typography: styled(Typography)(() => ({
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
    padding: '10px',
  })),

  Wrapper: styled('div')(() => ({
    display: 'flex',
    height: '100%',
    '>div': {
      padding: '0px 10px',
      borderRight: '1px solid black',
    },
  })),
}

const Tactics = ({ name, tactics }) => {
  const techniques = tactics.map(({ name, techniques }) => ({
    name,
    techniques,
  }))

  return (
    <S.Container>
      <S.Typography>{name}</S.Typography>
      <DragDropContext>
        <Droppable droppableId={name}>
          {(provided) => (
            <S.Wrapper {...provided.droppableProps} ref={provided.innerRef}>
              {techniques.map(({ name, techniques }) => (
                <Techniques key={name} name={name} techniques={techniques} />
              ))}
            </S.Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  )
}

export default Tactics
