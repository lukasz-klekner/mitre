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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    console.log(result)
  }

  return (
    <S.Container>
      <S.Typography>{name}</S.Typography>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <S.Wrapper>
          {techniques.map(({ name, techniques }) => (
            <Droppable droppableId={name} key={name}>
              {(provided) => (
                <Techniques
                  name={name}
                  techniques={techniques}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                />
              )}
            </Droppable>
          ))}
        </S.Wrapper>
      </DragDropContext>
    </S.Container>
  )
}

export default Tactics
