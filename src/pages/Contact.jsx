import { Card, Link, Typography } from '@mui/material'
import React from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const Contact = () => {
  return (
    <Card
      sx={{
        mb: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.7',
      }}
    >
      <Typography variant="h3" align="center">
        Contact us{' '}
      </Typography>

      <ContactMailIcon sx={{ m: '3rem' }} />

      <Link
        href="mailto:milenatul@gmail.com"
        underline="hover"
        color="error"
        variant="h5"
        sx={{ mb: '3rem' }}
      >
        {'Send us an email'}
      </Link>
    </Card>
  )
}

export default Contact
