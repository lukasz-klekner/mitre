import { styled } from '@mui/system'
import FilterListIcon from '@mui/icons-material/FilterList'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const S = {
  Container: styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
  })),

  CheckBoxIcon: styled(CheckBoxIcon)(() => ({
    width: '20px',
    height: '20px',
    marginLeft: '14px',
    fill: 'blue',
  })),

  FilterListIcon: styled(FilterListIcon)(() => ({
    widht: '20px',
    height: '20px',
    marginLeft: '10px',
  })),

  ZoomOutMapIcon: styled(ZoomOutMapIcon)(() => ({
    width: '20px',
    height: '20px',
    marginRight: '10px',
    transform: 'rotate(45deg)',
  })),
}

const Category = ({ name }) => (
  <S.Container>
    <S.ZoomOutMapIcon />
    {name}
    <S.FilterListIcon />
    <S.CheckBoxIcon />
  </S.Container>
)

export default Category
