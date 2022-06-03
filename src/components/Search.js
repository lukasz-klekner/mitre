import { InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import useSearchContext from '../hooks/useSearchContext'

const S = {
  Container: styled('div')(() => ({
    position: 'relative',
    marginTop: '4px',
    marginLeft: '20px',
    width: '100%',
  })),

  InputBase: styled(InputBase)(() => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: '4px 4px 4px 0px',
      width: '300px',
      borderBottom: '1px solid lightgray',
    },
  })),

  SearchIconWrapper: styled('div')(() => ({
    position: 'absolute',
    left: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px',
    height: '100%',
    pointerEvents: 'none',
  })),
}

const Search = () => {
  const { setSearchTerm } = useSearchContext()

  return (
    <S.Container>
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
      <S.InputBase
        placeholder='Search'
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </S.Container>
  )
}

export default Search
