import React from 'react'
import { Stack, Divider, Paper } from '@mui/material'
import theme from '../layouts/Theme'

const styles = {
  paperStyle: {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}

const Recipes = () => {
  return (
    <React.Fragment>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Paper sx={styles.paperStyle}>Paper 1</Paper>
        <Paper sx={styles.paperStyle}>Paper 2</Paper>
        <Paper sx={styles.paperStyle}>Paper 3</Paper>
      </Stack>
    </React.Fragment>
  )
}

export default Recipes
