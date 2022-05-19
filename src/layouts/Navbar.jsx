import React, { useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
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
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import theme from './Theme'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const styles = {
  tabStyle: {
    typography: 'tab',
    minWidth: 10,
    marginLeft: '25px',
    color: 'white',
  },
  // logo: {
  //   height: '8em',
  //   [theme.breakpoints.down('md')]: {
  //     height: '7em',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     height: '5.5em',
  //   },
  // },

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
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginLeft: '2rem',
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

  const [anchorEl, setAnchorEl] = useState(null)

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

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
      case '/foodblog':
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
      <IconButton
        component={Link}
        to="/"
        disableRipple
        sx={styles.logoContainer}
        onClick={() => setValue(0)}
      >
        <LocalDiningIcon sx={styles.logo} />
      </IconButton>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        sx={{ ml: 'auto' }}
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
          to="/foodblog"
          label="Food blog"
        />
      </Tabs>
    </React.Fragment>
  )

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
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
              setValue(0)
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              disableTypography
              sx={
                value === 0
                  ? [styles.drawerItemSelected, styles.drawerItem]
                  : styles.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
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
            to="/foodblog"
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
              Food blog
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
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
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
