import React from 'react'


import "./RecipeUI.css"

export const RecipeUI = ({recipes}) => {
  return (
   <>
   <div className="recipes-container">

      <div className="recipes-grid">
       {
        recipes.map((item) =>{
          {/* Recipe Card */}
  return <div className="recipe-card" key={item.id}>

          <div className="recipe-image">
            <img
              src={item.image}
              alt="Pasta"
            />
          </div>

          <div className="recipe-content">

            <span className="recipe-category">
              Italian Cuisine</span>

            <h3>{item.name}</h3>

            <div className="recipe-info">
              <span>⏱ {item.prepTimeMinutes}</span>
              <span>👨‍🍳 {item.difficulty}</span>
              <span>🍽 {item.servings}</span>
            </div>

            <p className="recipe-description">
           Discover delicious recipes, explore new flavors, and find inspiration for your next meal.
            </p>

            <button className="recipe-btn">
              View Recipe
            </button>

          </div>
        </div>
        })
       }


      </div>
    </div>
   </>
  )
}

export default RecipeUI