import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import mealPlan from '../assets/mealPlan.jpg'
import recipes from '../assets/recipes.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import theme from '../layouts/Theme'

const styles = {
  headingStyle: {
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  content: {
    marginLeft: '12rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5rem',
    },
  },
}

const Section = () => {
  return (
    <React.Fragment>
      <Grid container sx={{ mt: '5rem' }}>
        <Grid item sx={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={styles.content}>
              <Typography variant="h4" sx={styles.headingStyle}>
                Recipes
              </Typography>
              <Typography variant="body2">
                Need some inspiration for making exciting meals at home? Check
                out all the recipes we offer based on various cathegories. Find
                what fits for you and make your life tastier!
              </Typography>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                color="error"
                component={Link}
                to="/recipes"
                sx={{ mt: '3rem' }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={12} md={6}>
          <CardMedia
            component="img"
            image={recipes}
            alt="recipes book"
            height="400"
          />
        </Grid>
        <Grid item sx={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={mealPlan}
              alt="recipes book"
              height="400"
            />
          </Card>
        </Grid>
        <Grid item sx={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={styles.content}>
              <Typography variant="h4" sx={styles.headingStyle}>
                Meal plan
              </Typography>
              <Typography variant="body2">
                You are one click away from your custom daily meal plan. This
                can get you into perfect shape and make you healthier. Check it
                out and let us know how you like this option!
              </Typography>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                color="error"
                component={Link}
                to="/mealplan"
                sx={{ mt: '3rem' }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Section
