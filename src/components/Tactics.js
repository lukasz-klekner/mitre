import { Stack, Typography, styled } from '@mui/material'
import Techniques from './Techniques'

const S = {
  Stack: styled(Stack)(() => ({
    width: '100%',
  })),

  Typography: styled(Typography)(() => ({
    backgroundColor: '#dedede',
  })),
}

function Tactics({ name, tactics }) {
  const techniques = tactics.map(({ name, techniques }) => ({
    name,
    techniques,
  }))

  return (
    <S.Stack>
      <Typography>{name}</Typography>
      {techniques.map((item) => (
        <Techniques
          key={item.name}
          name={item.name}
          techniques={item.techniques}
        />
      ))}
    </S.Stack>
  )
}

export default Tactics
