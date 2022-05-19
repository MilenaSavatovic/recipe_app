import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Link, CardMedia } from '@mui/material'
import theme from '../layouts/Theme'

const styles = {
  cardStyle: {
    padding: '2rem',
    backgroundColor: 'rgba(168, 0, 34, 0.10)',
    textAlign: 'center',
  },
  cardImg: {
    borderRadius: '5px',
    paddingBottom: '20px',
  },
  link: {
    color: theme.palette.primary.main,
  },
}

const RecipeList = (props) => {
  console.log(props.country)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [props])

  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${props.country}`,
    )
    console.log(api)
    const data = await api.json()
    console.log(data)

    setRecipes(data.results)
  }

  if (recipes) {
    return (
      <Box sx={{ flexGrow: 1, m: '5rem' }}>
        <Grid container spacing={2}>
          {recipes.map((recipe) => {
            return (
              <Grid item xs={12} md={3} key={recipe.id}>
                <Card sx={styles.cardStyle}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={recipe.image}
                    alt={recipe.title}
                    sx={styles.cardImg}
                  />
                  <Link
                    href={'/recipes/cuisines/' + recipe.id}
                    underline="hover"
                    sx={styles.link}
                  >
                    {recipe.title}
                  </Link>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    )
  } else {
    return <Box></Box>
  }
}

export default RecipeList
