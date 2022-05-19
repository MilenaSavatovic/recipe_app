import { Typography } from '@mui/material'
import React from 'react'
import SelectElement from '../components/SelectElement'
import theme from '../layouts/Theme'

const styles = {
  headingStyle: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginBottom: '5rem',
  },
}

const Cuisines = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" sx={styles.headingStyle}>
        {' '}
        Cuisines of the world
      </Typography>
      <SelectElement />
    </React.Fragment>
  )
}

export default Cuisines
