import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import RecipeList from './RecipeList'

const CuisinesList = () => {
  const [country, setCountry] = useState('')

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <React.Fragment>
      <Box sx={{ minWidth: 120 }} display="flex" justifyContent="center">
        <FormControl variant="outlined" color="warning">
          <InputLabel id="demo-simple-select-label">Cuisines</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handleChange}
            sx={{ minWidth: 120 }}
          >
            {cousines.map((couisine, index) => {
              return (
                <MenuItem key={index} value={couisine}>
                  {couisine}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
      <RecipeList country={country} />
    </React.Fragment>
  )
}

const cousines = [
  '',
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
]

export default CuisinesList
