import { Typography } from '@mui/material'
import React from 'react'
import MultipleSelect from '../components/MultipleSelect'
import theme from '../layouts/Theme'

const styles = {
  headingStyle: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginBottom: '5rem',
  },
}

const Intolerancies = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" sx={styles.headingStyle}>
        {' '}
        Food intolerancies
      </Typography>
      <MultipleSelect />
    </React.Fragment>
  )
}

export default Intolerancies
