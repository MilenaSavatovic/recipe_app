import { Container, Typography, Link, Stack, IconButton } from '@mui/material'
import React from 'react'
import theme from './Theme'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const styles = {
  background: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    typography: 'tab',
    minWidth: 10,
    marginTop: '0rem',
  },
}

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ py: 2 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MilenaSavatovic">
        Milena Savatovic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Container maxWidth={false} sx={styles.background}>
      <Stack sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5">Foodie App</Typography>
        <Stack direction="row" spacing={2} sx={{ m: '2rem auto' }}>
          <Link href="/" underline="none" color="inherit">
            Home
          </Link>
          <Link href="/recipes" underline="none" color="inherit">
            Recipes
          </Link>
          <Link href="/mealplan" underline="none" color="inherit">
            Meal Plan
          </Link>
          <Link href="/contact" underline="none" color="inherit">
            Contact
          </Link>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ m: '2rem auto' }}>
          <Link
            href="https://github.com/MilenaSavatovic"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHubIcon sx={{ color: 'white' }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/milena-savatovi%C4%87-baa8baa4/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <LinkedInIcon sx={{ color: 'white' }} />
            </IconButton>
          </Link>
        </Stack>
      </Stack>

      <Copyright />
    </Container>
  )
}

export default Footer
