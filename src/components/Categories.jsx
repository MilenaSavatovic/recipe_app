import React from 'react'
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Categories = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />

              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    component={Link}
                    to={item.path}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </React.Fragment>
  )
}

const itemData = [
  {
    img: require('../assets/recipesImg.jpg'),
    title: 'Cuisines of the world',
    path: '/recipes/cuisines',
  },
  {
    img: require('../assets/diets.jpg'),
    title: 'Dietary requirements',
    path: '/recipes/diets',
  },
  {
    img: require('../assets/intolerancies.jpg'),
    title: 'Intolerancies',
    path: '/recipes/intolerancies',
  },
  {
    img: require('../assets/mealType.jpg'),
    title: 'Meal types',
    path: '/recipes/meals',
  },
]

export default Categories
