import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Typography, styled } from '@mui/material'

import Techniques from './Techniques'
import { updateTechniques } from '../service/apiRequests'
import { endpoints } from '../service/endpoint'

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

const updateData = async (data, navigator, name) => {
  const itemToUpdate = navigator.find((item) => item.name === name)
  const updatedData = { ...itemToUpdate, tactics: data }

  await updateTechniques(endpoints.navigator_id(itemToUpdate.id), updatedData)
}

const Tactics = ({ name, navigator, tactics }) => {
  const techniques = tactics.map((item) => ({
    name: item.name,
    ...item,
  }))

  const [techniquesOrdered, setTechniquesOrdered] = useState(techniques)

  const handleOnDragEnd = ({ destination, source }) => {
    if (!destination) return

    const items = [...techniquesOrdered]
    const reorderedItem = items
      .find(({ name }) => name === source.droppableId)
      .techniques.splice(source.index, 1)

    items
      .find(({ name }) => name === destination.droppableId)
      .techniques.splice(destination.index, 0, reorderedItem[0])

    setTechniquesOrdered(items)
    updateData(items, navigator, name)
  }

  return (
    <S.Container>
      <S.Typography>{name}</S.Typography>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <S.Wrapper>
          {techniquesOrdered.map(({ name, techniques }) => (
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
