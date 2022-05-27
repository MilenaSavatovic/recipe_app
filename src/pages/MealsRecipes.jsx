import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeList from '../components/RecipeList'

const MealsRecipes = () => {
  let param = useParams()
  return (
    <React.Fragment>
      <RecipeList meal={param.type} />
    </React.Fragment>
  )
}

export default MealsRecipes
