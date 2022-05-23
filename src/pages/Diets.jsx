import React from 'react'
import Categories from '../components/Categories'

const itemData = [
  {
    img: require('../assets/glutenFree.jpg'),
    title: 'Gluten Free',
    path: '/recipes/diets/glutenFree',
    credits: 'Photo by Eva Elijas',
  },
  {
    img: require('../assets/keto.jpg'),
    title: 'Ketogenic',
    path: '/recipes/diets/ketogenic',
    credits: 'Photo by JJ Jordan',
  },
  {
    img: require('../assets/vegetarian.jpg'),
    title: 'Vegetarian',
    path: '/recipes/diets/vegetarian',
    credits: 'Photo by Ella Olsson from Pexels',
  },
  {
    img: require('../assets/lactoVegetarian.jpg'),
    title: 'Lacto-Vegetarian',
    path: '/recipes/diets/lacto-vegetarian',
    credits: 'Photo by Pixabay',
  },
  {
    img: require('../assets/ovoVegetarian.jpg'),
    title: 'Ovo-Vegetarian',
    path: '/recipes/diets/ovo-vegetarian',
    credits: 'Photo by Daria Shevtsova',
  },
  {
    img: require('../assets/vegan.jpg'),
    title: 'Vegan',
    path: '/recipes/diets/vegan',
    credits: 'Photo by Karolina Grabowska from Pexels',
  },
  {
    img: require('../assets/pescetarian.jpg'),
    title: 'Pescetarian',
    path: '/recipes/diets/pescetarian',
    credits: 'Photo by Sebastian Coman Photography',
  },
  {
    img: require('../assets/paleo.jpg'),
    title: 'Paleo',
    path: '/recipes/diets/paleo',
    credits: 'Photo by JJ Jordan',
  },
  {
    img: require('../assets/primitive.jpg'),
    title: 'Primal',
    path: '/recipes/diets/primal',
    credits: 'Photo by Ron Lach',
  },
  {
    img: require('../assets/lowFodmap.jpg'),
    title: 'Low FODMAP',
    path: '/recipes/diets/lowFODMAP',
    credits: 'Photo by Dainis Graveris',
  },
  {
    img: require('../assets/whole30.jpg'),
    title: 'Whole30',
    path: '/recipes/diets/whole30',
    credits: 'Photo by Đặng Thanh Tú',
  },
]

const Diets = () => {
  return (
    <React.Fragment>
      <Categories itemData={itemData} width="800" height="600" col={4} />
    </React.Fragment>
  )
}

export default Diets
