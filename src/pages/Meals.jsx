import React from 'react'
import Categories from '../components/Categories'
import { useTheme, useMediaQuery } from '@mui/material'

const itemData = [
  {
    img: require('../assets/mainCourse.jpg'),
    title: 'Main Course',
    path: '/recipes/meals/mainCourse',
    credits: 'Photo by cem zaloğlu',
  },
  {
    img: require('../assets/sideDish.jpg'),
    title: 'Side Dish',
    path: '/recipes/meals/sideDish',
    credits: 'Photo by Alesia  Kozik',
  },
  {
    img: require('../assets/dessert.jpg'),
    title: 'Dessert',
    path: '/recipes/meals/dessert',
    credits: 'Photo by Ella Olsson',
  },
  {
    img: require('../assets/appetizer.jpg'),
    title: 'Appetizer',
    path: '/recipes/meals/appetizer',
    credits: 'Photo by Daria Shevtsova',
  },
  {
    img: require('../assets/salad.jpg'),
    title: 'Salad',
    path: '/recipes/meals/salad',
    credits: 'Photo by Karolina Grabowska',
  },
  {
    img: require('../assets/bread.jpg'),
    title: 'Bread',
    path: '/recipes/meals/bread',
    credits: 'Photo by Mariana Kurnyk',
  },
  {
    img: require('../assets/breakfast.jpg'),
    title: 'Breakfast',
    path: '/recipes/meals/breakfast',
    credits: 'Photo by Alexander Mils',
  },
  {
    img: require('../assets/soup.jpg'),
    title: 'Soup',
    path: '/recipes/meals/soup',
    credits: 'Photo by Foodie Factor',
  },
  {
    img: require('../assets/beverage.jpg'),
    title: 'Beverage',
    path: '/recipes/meals/beverage',
    credits: 'Photo by Element5 Digital',
  },
  {
    img: require('../assets/sauce.jpg'),
    title: 'Sauce',
    path: '/recipes/meals/sauce',
    credits: 'Photo by Engin Akyurt',
  },
  {
    img: require('../assets/marinade.jpg'),
    title: 'Marinade',
    path: '/recipes/meals/marinade',
    credits: 'Photo by Gustavo Fring',
  },
  {
    img: require('../assets/fingerFood.jpg'),
    title: 'Finger food',
    path: '/recipes/meals/fingerFood',
    credits: 'Photo by Karolina Grabowska',
  },
  {
    img: require('../assets/snacks.jpg'),
    title: 'Snacks',
    path: '/recipes/meals/snacks',
    credits: 'Photo by Kyle Roxas',
  },
  {
    img: require('../assets/drink.jpg'),
    title: 'Drink',
    path: '/recipes/meals/drink',
    credits: 'Photo by Toni Cuenca',
  },
]

const Meals = () => {
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <React.Fragment>
      {matches ? (
        <Categories itemData={itemData} width="60%" height="600" col={1} />
      ) : (
        <Categories itemData={itemData} width="60%" height="600" col={7} />
      )}
    </React.Fragment>
  )
}

export default Meals
