import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const SearchDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  // pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const Search = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleIconSubmit = () => {
    console.log(search)
    if (search !== '') {
      navigate('/recipes/' + search)
    }

    setSearch('')
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <SearchDiv onClick={handleIconSubmit}>
      <SearchIconWrapper component={Link} to="/">
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={search}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />
    </SearchDiv>
  )
}

export default Search
