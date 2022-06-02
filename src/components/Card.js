import { Box, IconButton, Tooltip, Typography, styled } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

const S = {
  Box: styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '170px',
    height: 'auto',
    border: '2px solid gray',
    marginBottom: '10px',
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

const Card = ({ description, name }) => (
  <S.Box>
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

export default Card
