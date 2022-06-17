import React, { useState, useEffect } from 'react'

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import LocalDiningIcon from '@mui/icons-material/LocalDining'
import theme from './Theme'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const styles = {
  tabStyle: {
    typography: 'tab',
    minWidth: 10,
    marginLeft: '25px',
    color: 'white',
  },

  buttonStyle: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    typography: 'estimate',
    height: '45px',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginRight: 5,
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: '70%',
  },
  drawerItem: {
    typography: 'tab',
    color: 'white',
    opacity: 0.7,
  },

  drawerItemSelected: {
    opacity: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
  },
}

const Navbar = () => {
  const theme = useTheme()
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0)
        }
        break
      case '/recipes':
        if (value !== 1) {
          setValue(1)
        }
        break

      case '/mealplan':
        if (value !== 2) {
          setValue(2)
        }
        break
      case '/contact':
        if (value !== 3) {
          setValue(3)
        }
        break

      default:
        break
    }
  }, [value])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        sx={{ ml: 'auto' }}
        indicatorColor="transparent"
      >
        <Tab sx={styles.tabStyle} component={Link} to="/" label="Home" />
        <Tab
          sx={styles.tabStyle}
          component={Link}
          to="/recipes"
          label="Recipes"
        />
        <Tab
          sx={styles.tabStyle}
          component={Link}
          to="/mealplan"
          label="Meal plan"
        />
        <Tab
          sx={styles.tabStyle}
          component={Link}
          to="/contact"
          label="Contact"
        />
      </Tabs>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          style: styles.drawer,
        }}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(1)
            }}
            divider
            button
            component={Link}
            to="/recipes"
            selected={value === 1}
          >
            <ListItemText
              disableTypography
              sx={
                value === 1
                  ? [styles.drawerItemSelected, styles.drawerItem]
                  : styles.drawerItem
              }
            >
              Recipes
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(2)
            }}
            divider
            button
            component={Link}
            to="/mealplan"
            selected={value === 2}
          >
            <ListItemText
              disableTypography
              sx={
                value === 2
                  ? [styles.drawerItemSelected, styles.drawerItem]
                  : styles.drawerItem
              }
            >
              Meal plan
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(3)
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText
              disableTypography
              sx={
                value === 3
                  ? [styles.drawerItemSelected, styles.drawerItem]
                  : styles.drawerItem
              }
            >
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        sx={styles.drawerIconContainer}
      >
        <MenuIcon sx={styles.drawerIcon} />
      </IconButton>
      <IconButton
        component={Link}
        to="/"
        disableRipple
        sx={styles.logoContainer}
        onClick={() => setValue(0)}
      >
        <LocalDiningIcon sx={styles.logo} />
      </IconButton>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.navbar}>
          <Toolbar>
            {matches ? drawer : tabs}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
              <Search />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={(theme) => ({
          pt: {
            ...theme.mixins.toolbar,
          },
          mb: '3.75em',
          [theme.breakpoints.down('md')]: {
            mb: '2.5em',
          },
          [theme.breakpoints.down('xs')]: {
            mb: '1.75em',
          },
        })}
      />
    </React.Fragment>
  )
}

export default Navbar
