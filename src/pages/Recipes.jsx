import React from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import Categories from '../components/Categories'

const itemData = [
  {
    img: require('../assets/recipesImg.jpg'),
    title: 'Cuisines of the world',
    path: '/recipes/cuisines',
    credits: '',
  },
  {
    img: require('../assets/diets.jpg'),
    title: 'Dietary requirements',
    path: '/recipes/diets',
    credits: '',
  },
  {
    img: require('../assets/intolerancies.jpg'),
    title: 'Intolerancies',
    path: '/recipes/intolerancies',
    credits: '',
  },
  {
    img: require('../assets/mealType.jpg'),
    title: 'Meal types',
    path: '/recipes/meals',
    credits: '',
  },
]

const Recipes = () => {
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <React.Fragment>
      {matches ? (
        <Categories itemData={itemData} width="500" height="450" col={1} />
      ) : (
        <Categories itemData={itemData} width="500" height="450" />
      )}
    </React.Fragment>
  )
}

export default Recipes
