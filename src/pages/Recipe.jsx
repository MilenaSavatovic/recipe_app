import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Paper, List, ListItem, ListItemText, Typography } from '@mui/material'

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
  }, [params.id])

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ m: '5rem', p: '5rem' }}>
        <Typography variant={'h4'}>{details.title}</Typography>

        {/* <Typography variant={'p'}>{details.summary}</Typography> */}
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {details.extendedIngredients.map((ingredient) => (
            <ListItem key={ingredient.id} disableGutters>
              <ListItemText primary={ingredient.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  )
}

export default Recipe
