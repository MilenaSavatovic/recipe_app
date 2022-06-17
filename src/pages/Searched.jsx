import { Typography, Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchResult from '../components/SearchResult'
import theme from '../layouts/Theme'

const styles = {
  headingStyle: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginBottom: '5rem',
  },
}

const Searched = () => {
  let params = useParams()
  console.log(params)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (params !== '') {
      fetch(
        `https://api.spoonacular.com/food/search?query=${params.item}&apiKey=${process.env.REACT_APP_API_KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.searchResults[0].results)
        })
        .catch(() => {
          console.log('error')
        })
    }
  }, [params])

  return (
    <React.Fragment>
      <Typography sx={styles.headingStyle} variant="h3">
        The results of your search
      </Typography>
      {results ? (
        <Box
          sx={{
            flexGrow: 1,
            [theme.breakpoints.down('md')]: {
              m: '2rem',
            },
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={5}>
            {results.map((result) => {
              return <SearchResult result={result} />
            })}
          </Grid>
        </Box>
      ) : (
        <Typography>No results for your search</Typography>
      )}
    </React.Fragment>
  )
}

export default Searched
