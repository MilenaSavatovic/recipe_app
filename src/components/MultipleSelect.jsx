import React, { useEffect, useState } from 'react'
import { Box, Paper, Chip } from '@mui/material'
import RecipeList from './RecipeList'
import { styled } from '@mui/material/styles'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

const MultipleSelect = () => {
  const [selectedIntolerancies, setSelectedIntolerancies] = useState([])
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Dairy', variant: 'outlined' },
    { key: 1, label: 'Egg', variant: 'outlined' },
    { key: 2, label: 'Gluten', variant: 'outlined' },
    { key: 3, label: 'Grain', variant: 'outlined' },
    { key: 4, label: 'Peanut', variant: 'outlined' },
    { key: 5, label: 'Seafood', variant: 'outlined' },
    { key: 6, label: 'Sesame', variant: 'outlined' },
    { key: 7, label: 'Shellfish', variant: 'outlined' },
    { key: 8, label: 'Soy', variant: 'outlined' },
    { key: 9, label: 'Sulfite', variant: 'outlined' },
    { key: 10, label: 'Tree Nut', variant: 'outlined' },
    { key: 11, label: 'Wheat', variant: 'outlined' },
  ])
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [currentVariant, setCurrentVariant] = useState('outlined')

  const handleClick = (value) => {
    console.log(value)

    chipData.map((chip) => {
      if (chip.label === value) {
        console.log(chip.variant)
        // if (chip.variant === 'outlined') {
        //   return setChipData(
        //     chipData[chipData.indexOf(chip.label)].variant === 'filled',
        //   )
        // } else {
        //   return setChipData(
        //     chipData[chipData.indexOf(chip.label)].variant === 'outlined',
        //   )
        // }
      }
    })
  }

  // const getRecipes = async () => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&intolerancies=${query}`,
  //   )
  //   console.log(api)
  //   const data = await api.json()
  //   console.log(data)

  //   setRecipes(data.results)
  // }

  // const fetchRecipes = () => {
  //   console.log(selectedIntolerancies)
  //   const queryArray = selectedIntolerancies.map((value) => value.label)
  //   const stringArray = queryArray.join()
  //   setQuery(stringArray)
  //   console.log(stringArray)
  //   getRecipes()
  // }

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipData.map((data) => {
            return (
              <ListItem key={data.key}>
                <Chip
                  variant={data.variant}
                  label={data.label}
                  onClick={() => handleClick(data.label)}
                />
              </ListItem>
            )
          })}
        </Paper>
      </Box>
      {/* <RecipeList intoleranciesList={intoleranciesList} /> */}
    </React.Fragment>
  )
}

export default MultipleSelect
