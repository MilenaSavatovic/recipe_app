import React, { useEffect, useState } from 'react'
import { Card, CardMedia, Typography, Box, Paper } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import theme from '../layouts/Theme'

const styles = {
  cardStyle: {
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: '12px',
  },
  containerStyle: {
    margin: 'auto',
    width: 400,
    height: 200,

    textAlign: 'center',
  },
  paperStyle: {
    background: 'rgba(168, 0, 34, 0.54)',
  },
}

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
      )

      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))

      setPopular(data.recipes)
    }
  }

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={styles.containerStyle}
        PaperProps={{ style: styles.paperStyle }}
      >
        <Splide
          options={{
            perPage: 1,
            pagination: false,
            drag: 'free',
            width: '100%',
            height: '100%',
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Box
                    sx={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <CardMedia
                      component="img"
                      width="100%"
                      alt={recipe.title}
                      image={recipe.image}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(168, 0, 34, 0.54)',
                        color: 'white',
                        padding: '10px',
                      }}
                    >
                      <Typography variant="h5">{recipe.title}</Typography>
                    </Box>
                  </Box>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Paper>
    </React.Fragment>
  )
}

export default Popular
