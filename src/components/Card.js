import { Box, IconButton, Tooltip, Typography, styled } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const S = {
  Box: styled(Box)(() => ({
    width: '150px',
    height: '100px',
    border: '2px solid gray',
    marginBottom: '10px',
  })),
  Tooltip: styled(Tooltip)(() => ({
    position: 'absolute',
    right: '0px',
  })),
}

function Card({ name }) {
  return (
    <S.Box>
      <Typography>{name}</Typography>
      <Tooltip title={name} placement='right'>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </S.Box>
  )
}

export default Card
