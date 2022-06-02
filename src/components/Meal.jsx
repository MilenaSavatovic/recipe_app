import React, { useEffect, useState } from 'react'
import { Card, Link, Typography, Grid, CardMedia } from '@mui/material'
import theme from '../layouts/Theme'

const styles = {
  cardStyle: {
    padding: '1rem',
    backgroundColor: 'rgba(168, 0, 34, 0.10)',
    textAlign: 'center',
    // width: '200px',
  },
  cardImg: {
    borderRadius: '5px',
    paddingBottom: '20px',
  },
  link: {
    color: theme.palette.primary.main,
  },
}

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`,
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image)
      })
      .catch(() => {
        console.log('error')
      })
  }, [meal.id])
  return (
    <Grid item xs={12} md={4} key={meal.id}>
      <Card sx={styles.cardStyle}>
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt={meal.title}
          sx={styles.cardImg}
        />
        <Link
          href={'/recipes/cuisines/' + meal.id}
          underline="hover"
          sx={styles.link}
        >
          {meal.title}
        </Link>
        <Typography>Preparation time: {meal.readyInMinutes}</Typography>
        <Typography>Number of servings: {meal.servings}</Typography>
      </Card>
    </Grid>
  )
}

export default Meal
