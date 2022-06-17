import React, { useState } from 'react'
import { Box, Button, FormControl, TextField } from '@mui/material'
import MealList from './MealList'
import theme from '../layouts/Theme'

const InputForm = () => {
  const [calories, setCalories] = useState(2000)
  const [mealData, setMealData] = useState(null)

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log('error')
      })
    setCalories(0)
  }

  const handleChange = (e) => {
    setCalories(e.target.value)
  }

  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          mb: '5rem',
          [theme.breakpoints.down('md')]: {
            mb: '13rem',
          },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl defaultValue="" required>
          <TextField
            id="outlined-basic"
            label="Calories (e.g. 2000)"
            variant="outlined"
            color="error"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            size="medium"
            color="error"
            sx={{ mt: '2rem' }}
            onClick={getMealData}
          >
            Get Daily Meal Plan
          </Button>
        </FormControl>
      </Box>
      {mealData && <MealList mealList={mealData} />}
    </React.Fragment>
  )
}

export default InputForm
