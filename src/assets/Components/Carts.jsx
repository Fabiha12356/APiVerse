import React from 'react'
import { useState,useEffect } from 'react'


import "./Carts.css"

export const Carts = () => {

let [carts,setCarts] = useState([])


useEffect(() =>{

  async function getCarts() {
    let data = await fetch('https://dummyjson.com/carts')
     let  get =  await data.json()

         setCarts(get.carts)
   
  }
  getCarts()

  
})
 
  return (
    <>
  {
    carts.map((item)=>{
console.log(item.products)

return (

  <>
    <div className="carts-container">

      <div className="cart-list">

        {item.products.slice(0,2).map((item) => (
  
          <div className="cart-card" key={item.id}>

            <div className="cart-left">
              <div className="cart-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="cart-details">
                <span>Product #{item.id}</span>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </div>

            <div className="cart-right">

              <div className="cart-quantity">
                <small>Quantity</small>
                <h4>{item.quantity}</h4>
              </div>

              <div className="cart-total">
                <small>Total</small>
                <h4>${item.total}</h4>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  </>
  )




    })
  }
    </>
  )
}
export default Carts