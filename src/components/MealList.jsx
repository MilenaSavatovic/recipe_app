import { Box, List, ListItem, ListItemText, Grid } from '@mui/material'
import React from 'react'

import Meal from './Meal'

const MealList = (props) => {
  const nutrients = props.mealList.nutrients

  return (
    <Box sx={{ m: '1rem 5rem' }}>
      <List sx={{ m: '0px auto' }}>
        <ListItem>
          <ListItemText
            primary={`Calories: ${nutrients.calories.toFixed(0)}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Carbohydrates: ${nutrients.carbohydrates.toFixed(0)}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Fats: ${nutrients.fat.toFixed(0)}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Protein: ${nutrients.protein.toFixed(0)}`} />
        </ListItem>
      </List>
      <Box
        sx={{ flexGrow: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container spacing={5}>
          {props.mealList.meals.map((meal) => {
            return <Meal meal={meal} />
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default MealList
