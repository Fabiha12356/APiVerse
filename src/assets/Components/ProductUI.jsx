import React from 'react'

import"./ProductUI.css"

export const ProductUI = ({product}) => {
    console.log(product)
  return (

 <>
 {
    product.map((item) =>{
        
  return   <div className="products-container" key={item.id}>

      <div className="products-grid">

        {/* Product Card 1 */}
        <div className="product-card">

          <div className="product-image">
            <img
              src={item.images}
              alt="Product"
            />
          </div>

          <div className="product-content">
            <span className="product-category">{item.description}</span>

            <h3>{item.title}</h3>

            <p>
             {item.description}
            </p>

            <div className="product-bottom">
              <h4>{item.price}</h4>
              <button>View Details</button>
            </div>
          </div>

        </div>


     

      </div>
    </div>
    })
 }
 </>
  )
}

export default ProductUI