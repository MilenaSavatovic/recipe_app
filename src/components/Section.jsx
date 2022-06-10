import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import mealPlan from '../assets/mealPlan.jpg'
import recipes from '../assets/recipes.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const styles = {
  headingStyle: {
    marginBottom: '2rem',
    marginTop: '2rem',
  },
  content: {
    marginLeft: '12rem',
  },
}

const Section = () => {
  return (
    <React.Fragment>
      <Card sx={{ mt: '5rem', display: 'flex' }}>
        <CardContent sx={styles.content}>
          <Typography variant="h4" sx={styles.headingStyle}>
            Recipes
          </Typography>
          <Typography variant="body2">
            Need some inspiration for making exciting meals at home? Check out
            all the recipes we offer based on various cathegories. Find what
            fits for you and make your life tastier!
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
        <CardMedia
          component="img"
          image={recipes}
          alt="recipes book"
          height="400"
        />
      </Card>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          image={mealPlan}
          alt="recipes book"
          height="400"
        />

        <CardContent sx={styles.content}>
          <Typography variant="h4" sx={styles.headingStyle}>
            Meal plan
          </Typography>
          <Typography variant="body2">
            You are one click away from your custom daily meal plan. This can
            get you into perfect shape and make you healthier. Check it out and
            let us know how you like this option!
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
    </React.Fragment>
  )
}

export default Section
