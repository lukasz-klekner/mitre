import { Box, Tooltip, styled } from '@mui/material'

const S = {
  Box: styled(Box)(() => ({
    width: '100px',
    height: '100px',
  })),
}

function Card({ name }) {
  return <S.Box>{name}</S.Box>
}

export default Card
