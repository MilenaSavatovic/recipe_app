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
  const [recipes, setRecipes] = useState([])
  console.log(props.diet)
  console.log(props.intoleranciesList)
  console.log(props.meal)

  useEffect(() => {
    getRecipes()
  }, [props])

  const getRecipes = async () => {
    // switch (props) {
    //   case props.country:
    //     console.log(props.country)
    //     const api1 = await fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${props.country}`,
    //     )
    //     console.log(api1)
    //     const data1 = await api1.json()
    //     console.log(data1)

    //     setRecipes(data1.results)
    //     break
    //   case props.diet:
    //     console.log(props.diet)
    //     const api2 = await fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${props.diet}`,
    //     )
    //     console.log(api2)
    //     const data2 = await api2.json()
    //     console.log(data2)

    //     setRecipes(data2.results)
    //     break
    //   case props.intoleranciesList:
    //     console.log(props.intoleranciesList)
    //     const api3 = await fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&intolerances=${props.intoleranciesList}`,
    //     )
    //     console.log(api3)
    //     const data3 = await api3.json()
    //     console.log(data3.results)

    //     setRecipes(data3.results)
    //     break
    //   case props.meal:
    //     console.log(props.meal)
    //     const api4 = await fetch(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${props.meal}`,
    //     )
    //     console.log(api4)
    //     const data4 = await api4.json()
    //     console.log(data4.results)

    //     setRecipes(data4.results)
    //     break
    //   default:
    //     console.log(props)
    // }
    if (
      props.diet === undefined &&
      props.intoleranciesList === undefined &&
      props.meal === undefined
    ) {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${props.country}`,
      )
      console.log(api)
      const data = await api.json()
      console.log(data)

      setRecipes(data.results)
    } else if (
      props.country === undefined &&
      props.intoleranciesList === undefined &&
      props.meal === undefined
    ) {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${props.diet}`,
      )
      console.log(api)
      const data = await api.json()
      console.log(data)

      setRecipes(data.results)
    } else if (
      props.country === undefined &&
      props.diet === undefined &&
      props.meal === undefined
    ) {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&intolerances=${props.intoleranciesList}`,
      )
      console.log(api)
      const data = await api.json()
      console.log(data.results)

      setRecipes(data.results)
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${props.meal}`,
      )
      console.log(api)
      const data = await api.json()
      console.log(data.results)

      setRecipes(data.results)
    }
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
