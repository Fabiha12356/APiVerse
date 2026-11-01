import React from 'react'


import "./RecipeUI.css"

export const RecipeUI = ({recipes}) => {
  return (
   <>
    {
      recipes.map((item) =>{
      return  <div className="recipes-container" key={item.id}>

      <div className="recipes-grid">

        {/* Recipe Card */}
        <div className="recipe-card">

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
              A delicious creamy pasta made with garlic, cheese and fresh cream.
            </p>

            <button className="recipe-btn">
              View Recipe
            </button>

          </div>
        </div>


      </div>
    </div>
      })
    }
   </>
  )
}

export default RecipeUI