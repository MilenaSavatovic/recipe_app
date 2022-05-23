import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const styles = {
  subheadingStyle: {
    margin: '10px 0px',
  },
  paperStyle: {
    width: '70%',
    margin: '5rem auto',
    padding: '5rem',
  },
}

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    )

    const detailData = await data.json()
    console.log(detailData)
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params])

  return (
    <React.Fragment>
      <Paper elevation={3} sx={styles.paperStyle}>
        <Typography variant={'h4'} sx={{ mb: '16px' }}>
          {details.title}
        </Typography>

        <Box display="flex" justifyContent="left">
          <RestaurantMenuIcon sx={{ m: '5px' }} />
          <Typography sx={{ m: '5px' }}> {details.servings} persons</Typography>

          <AccessTimeIcon sx={{ m: '5px' }} />
          <Typography sx={{ m: '5px' }}>
            {' '}
            {details.readyInMinutes} minutes
          </Typography>
        </Box>

        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={details.title}
          src={details.image}
        />

        <Typography variant="h5" sx={styles.subheadingStyle}>
          Summary{' '}
        </Typography>

        <Typography
          dangerouslySetInnerHTML={{ __html: details.summary }}
        ></Typography>

        <Typography variant="h5" sx={styles.subheadingStyle}>
          Ingredients:{' '}
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {details.extendedIngredients?.map((ingredient) => {
            return (
              <ListItem key={ingredient.id} disablePadding>
                <ListItemText primary={ingredient.name} />
              </ListItem>
            )
          })}
        </List>

        <Typography variant="h5" sx={styles.subheadingStyle}>
          Instructions{' '}
        </Typography>

        <Typography
          dangerouslySetInnerHTML={{ __html: details.instructions }}
        ></Typography>
      </Paper>
    </React.Fragment>
  )
}

export default Recipe
