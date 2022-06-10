import React, { useState, useEffect } from 'react'
import { Card, Link, Grid, CardMedia } from '@mui/material'
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

const SearchResult = ({ result }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`,
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image)
      })
      .catch(() => {
        console.log('error')
      })
  }, [result.id])
  return (
    <Grid item xs={12} md={4} key={result.id}>
      <Card sx={styles.cardStyle}>
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt={result.title}
          sx={styles.cardImg}
        />
        <Link
          href={'/recipes/cuisines/' + result.id}
          underline="hover"
          sx={styles.link}
        >
          {result.name}
        </Link>
      </Card>
    </Grid>
  )
}

export default SearchResult
