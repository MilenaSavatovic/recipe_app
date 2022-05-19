import { Typography } from '@mui/material'
import React from 'react'
import Popular from '../components/Popular'
import theme from '../layouts/Theme'

const styles = {
  headingStyle: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    paddingBottom: '3rem',
  },
}

const Home = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" sx={styles.headingStyle}>
        {' '}
        Popular recipes
      </Typography>

      <Popular />
    </React.Fragment>
  )
}

export default Home