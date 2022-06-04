import { forwardRef, useState } from 'react'
import { Box, IconButton, Tooltip, Typography, styled } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const S = {
  Box: styled(Box)(({ colorShadow }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '170px',
    height: 'auto',
    border: '2px solid gray',
    marginBottom: '10px',
    backgroundColor: `rgba(00,00,80,.${colorShadow})`,

    '>p': {
      padding: '10px 5px 0px 10px',
    },
  })),

  TooltipWrapper: styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  })),
}

const Card = ({ description, id, name, ...rest }, ref) => {
  const [cardState, setCardState] = useState({
    [id]: {
      selected: false,
      colorShadow: 0,
    },
  })

  const handleClick = () => {
    if (!cardState[id].selected) {
      setCardState(() => ({
        [id]: {
          selected: true,
          colorShadow: 1,
        },
      }))
    } else {
      setCardState((prevState) => {
        const colorShadow = prevState[id].colorShadow++ % 6

        return {
          [id]: {
            selected: colorShadow ? true : false,
            colorShadow,
          },
        }
      })
    }
  }

  return (
    <S.Box
      colorShadow={cardState[id].colorShadow}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      <Typography>{name}</Typography>
      <S.TooltipWrapper>
        <Tooltip title={description} placement='right'>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </S.TooltipWrapper>
    </S.Box>
  )
}

export default forwardRef(Card)
