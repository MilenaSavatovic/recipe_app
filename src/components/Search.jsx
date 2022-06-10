import React, { useState } from 'react'
import theme from '../layouts/Theme'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import { TextField, FormControl, IconButton, InputBase } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const styles = {
  formStyle: {
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
  },
  input: {
    color: 'inherit',
    padding: theme.spacing(1.5, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  icon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
}

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

  // const handleSubmit = (e) => {
  //   console.log(search)
  //   console.log(e.key)
  //   e.preventDefault()
  //   if (e.key === 'Enter') {
  //     fetch(
  //       `https://api.spoonacular.com/food/search?query=${search}&apiKey=${process.env.REACT_APP_API_KEY}`,
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.searchResults)
  //       })
  //       .catch(() => {
  //         console.log('error')
  //       })
  //   }
  //   setSearch('')
  // }

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
    // <FormControl sx={styles.formStyle} onClick={handleIconSubmit}>
    //   <IconButton sx={styles.icon} onClick={handleIconSubmit}>
    //     <SearchIcon />
    //   </IconButton>

    //   <TextField
    //     id="outlined-basic"
    //     variant="standard"
    //     placeholder="Search…"
    //     value={search}
    //     onChange={handleChange}
    //     sx={styles.input}
    //   />
    // </FormControl>

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
