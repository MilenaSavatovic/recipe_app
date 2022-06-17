import React from 'react'
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const styles = {
  imgStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
}

const Categories = (props) => {
  console.log(props.width)
  return (
    <React.Fragment>
      <Box
        sx={{ flexGrow: 1, m: '3rem' }}
        display="flex"
        justifyContent="center"
      >
        <ImageList
          sx={{
            width: `${props.width}px`,
            height: `${props.height}px`,

            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',

            // Hide Scrollbar
            '-ms-overflow-style': 'none' /* IE and Edge */,
            'scrollbar-width': 'none' /* Firefox */,
            '&::-webkit-scrollbar': {
              /* Chrome */ display: 'none',
            },
          }}
          // rowHeight={250}
          cols={props.col}
        >
          {props.itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                sx={styles.imgStyle}
              />

              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    component={Link}
                    to={item.path}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </React.Fragment>
  )
}

export default Categories
