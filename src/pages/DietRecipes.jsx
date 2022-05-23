import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeList from '../components/RecipeList'

const DietRecipes = () => {
  let params = useParams()
  console.log(params.type)
  return (
    <React.Fragment>
      <RecipeList diet={params.type} />
    </React.Fragment>
  )
}

export default DietRecipes
